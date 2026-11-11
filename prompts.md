# Prompts

Aquí van **todos los prompts que lanzaste** para hacer el ejercicio, en el orden en que los
lanzaste, con el modelo y la herramienta de cada uno.

Esto no es papeleo. Lo que se revisa es **cómo pediste las cosas**, no solo lo que salió: un
resultado flojo con un prompt bueno y un resultado flojo con un prompt vago necesitan feedback
distinto, y sin este archivo no se distinguen.

## Cómo rellenarlo

- Un apartado `## Prompt N` por cada prompt.
- **Pega el prompt tal cual lo lanzaste**, dentro del bloque de código, aunque ocupe diez líneas
  y aunque tenga faltas. No lo reescribas para que quede bien: el que arreglaste mentalmente
  después no es el que lanzaste.
- Incluye también los que **no funcionaron**. Suelen ser los más útiles de leer.
- `Modelo` y `Herramienta` en todos. Si cambiaste de una a otra a mitad, se nota aquí.

---

## Prompt 1

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
cada prompt que hagamos lo vas a escribir dentro de prompts.md. Fijate el esquema de cada prompt y rellena correctamente el modelo y herramienta
```

**Qué salió:** funcionó a la primera.

## Prompt 2

**Modelo:** Opus 5.5
**Herramienta:** Claude Code (skill `/plannotator-visual-explainer`)

```
/plannotator-visual-explainer hazme un explainer y un checkbox list para hacer este ejercicio

[+ pegado a continuación el texto íntegro de la lección «Ejercicio FlowSync: mide qué está probado de verdad», el mismo que está en README.md]
```

**Qué salió:** un explainer HTML con checklist abierto en Plannotator (fuera del repo, no se entrega). El primer intento se interrumpió antes de que la skill recibiera argumentos.

## Prompt 3

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
como digo a ojo los escenarios cubiertos? tengo que lanzar la app?
```

**Qué salió:** aclaración: la estimación es una intuición sin abrir nada, no hace falta lanzar la app.

## Prompt 4

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
pero para yo decidir algo a ojo tengo que poder palpar algo. Lo hago leyendo el codigo de front y back?
```

**Qué salió:** aclaración: la estimación sale de lo que ya sabes del proyecto, sin leer código ni tests.

## Prompt 5

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
Tengo que escribir la matriz de trazabilidad en jgp?
```

**Qué salió:** confirmado: matriz y tres líneas en docs/verificacion/jgp.md; los tests van aparte.

## Prompt 6

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
ya lo he escrito
```

## Prompt 7

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
no encuentro los tests
```

## Prompt 8

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
no hay tests de tareas por lo que entonces ninguno esta cubierto, es esa la respuesta?
```

**Qué salió:** no se da la respuesta; se recuerda leer los tests de auth por si alguno afirma lo que pide un scenario, y cómo decidir entre los tres estados.

## Prompt 9

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
podria asignar los tests de "functional / Auth | iniciales", pero eso no cubre es spec, unicamente cubre que iniciales tiene un usuario
```

**Qué salió:** razonamiento validado: ese test se le parece pero no comprueba lo mismo; cómo anotarlo en la matriz.

## Prompt 10

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
Rellenalo con "No cubierto"
```

**Qué salió:** matriz de docs/verificacion/jgp.md rellenada: los 3 scenarios en «No cubierto», Cubiertos: 0; en dos filas se anota que el test `Auth | iniciales` se miró y no aplica (comprueba el login, no el assignee de la tarea).

**Qué salió:** `NO TESTS EXECUTED`: aún no existe ningún test en `tests/functional/tasks/`.

## Prompt 12

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
anade los tests en backend/tests/functional/tasks/
```

**Qué salió:** `backend/tests/functional/tasks/assignee.spec.ts` con un test por scenario, comprobado en la tarea suelta y en la lista. Resultado: 2 en verde y 1 en rojo («el responsable no trae el email…»): en `GET /tasks` el `assignee` trae `email`. No se ha tocado el código. Ojo: `--files=tasks` no ejecuta nada; filtra por nombre de archivo, así que hay que usar `--files=assignee`.

## Prompt 13

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
Como rellenarias las 3 lineas en base a o que hemos hablado?
```

**Qué salió:** propuesta de redacción de las tres líneas, sin escribirla en jgp.md.

## Prompt 14

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
comprueba si respondo a lo que se pedia
```

**Qué salió:** revisión de jgp.md contra el enunciado: falta la matriz (borrada al reescribir), la línea 2 atribuye el fallo al test equivocado y la línea 3 propone un comportamiento en vez de una decisión tomada al escribir el test.

## Prompt 15

**Modelo:** Opus 5.5
**Herramienta:** Claude Code

```
comprueba ahora
```

**Qué salió:** la matriz ha vuelto pero sin los dos números de arriba; la línea 2 mezcla el test en rojo con la duda de spec y la línea 3 sigue proponiendo un comportamiento en vez de una decisión tomada al escribir el test.
