## 1. Creía vs. estaban

Pensaba que estaban cubiertos 3 y en realidad no habia nada cubierto

| Scenario | Test que lo cubre | Estado | Si «No lo sé», qué faltó |
|---|---|---|---|
| Responsable identificable | — (`Auth \| iniciales › un nombre de dos palabras da la inicial de cada una` no aplica: comprueba las iniciales en la respuesta del login, no en el `assignee` de la tarea) | No cubierto | — |
| La tarea no filtra datos de cuenta | — | No cubierto | — |
| Responsable sin nombre | — (`Auth \| iniciales › sin nombre, las iniciales salen del email` no aplica: comprueba las iniciales en la respuesta del login, no en el `assignee` de la tarea) | No cubierto | — |

## 2. Hueco de test o hueco de spec

El test de "La tarea no filtra datos de cuenta" falla porque los datos devuelve un email. La spec no permite acceder al email pero las iniciales salen del email 

## 3. Lo que decidí yo

La respuesta "POST /tasks" deberia responder con las iniciales a mostrar, sin mas. El nombre o el email no son necesarios, unicmanete las iniciales que se hayan calculado para ese usuario
