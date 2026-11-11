import User from '#models/user'
import { test } from '@japa/runner'
import testUtils from '@adonisjs/core/services/test_utils'

/**
 * Lo que cada tarea muestra de su responsable. Cubre los tres scenarios del
 * requisito «Lo que cada tarea muestra de su responsable» de
 * `openspec/specs/tasks/spec.md`: responsable identificable, la tarea no filtra
 * datos de cuenta y responsable sin nombre.
 *
 * Cada scenario se comprueba en las dos formas de obtener una tarea: suelta
 * (`GET /tasks/:id`) y dentro de la lista (`GET /tasks`).
 */
test.group('Tasks | responsable', (group) => {
  group.each.setup(() => testUtils.db().withGlobalTransaction())

  const HOY = '2026-11-11'

  async function sesion(client: any, fullName: string | null, email = 'ada@example.com') {
    await User.create({ fullName, email, password: 'secreto123' })

    const response = await client.post('/api/v1/auth/login').json({ email, password: 'secreto123' })

    return response.body().data.token as string
  }

  async function crearTarea(client: any, token: string) {
    const response = await client
      .post('/api/v1/tasks')
      .header('Authorization', `Bearer ${token}`)
      .json({ title: 'Revisar el informe' })

    response.assertStatus(201)
    return response.body().data.id as number
  }

  async function responsables(client: any, token: string, id: number) {
    const suelta = await client
      .get(`/api/v1/tasks/${id}`)
      .qs({ today: HOY })
      .header('Authorization', `Bearer ${token}`)
    suelta.assertStatus(200)

    const lista = await client.get('/api/v1/tasks').header('Authorization', `Bearer ${token}`)
    lista.assertStatus(200)
    const enLista = lista.body().data.find((t: any) => t.id === id)

    return { suelta: suelta.body().data.assignee, enLista: enLista.assignee }
  }

  test('el responsable llega con su nombre y sus iniciales', async ({ client, assert }) => {
    const token = await sesion(client, 'Ada Lovelace')
    const id = await crearTarea(client, token)

    const { suelta, enLista } = await responsables(client, token, id)

    for (const assignee of [suelta, enLista]) {
      assert.equal(assignee.fullName, 'Ada Lovelace')
      assert.equal(assignee.initials, 'AL')
    }
  })

  test('el responsable no trae el email ni datos de acceso de la cuenta', async ({
    client,
    assert,
  }) => {
    const token = await sesion(client, 'Ada Lovelace')
    const id = await crearTarea(client, token)

    const { suelta, enLista } = await responsables(client, token, id)

    for (const assignee of [suelta, enLista]) {
      assert.notProperty(assignee, 'email')
      assert.notProperty(assignee, 'password')
      assert.notInclude(JSON.stringify(assignee), 'ada@example.com')
    }
  })

  test('un responsable sin nombre llega con nombre nulo y con iniciales', async ({
    client,
    assert,
  }) => {
    const token = await sesion(client, null)
    const id = await crearTarea(client, token)

    const { suelta, enLista } = await responsables(client, token, id)

    for (const assignee of [suelta, enLista]) {
      assert.isNull(assignee.fullName)
      assert.isString(assignee.initials)
      assert.isNotEmpty(assignee.initials)
    }
  })
})
