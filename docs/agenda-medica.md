---
sidebar_position: 3
---

# Agenda médica

Con la agenda médica podrás llevar un control adecuado de tus consultas médicas. La aplicación ofrece un sistema de clasificación que te facilitará organizarlas, así como múltiples opciones para complementar la información de cada una.

## Agendar una consulta médica

Para agendar una consulta médica siga los siguiente pasos:

1. Entra al menú **Agenda Médica** ➜ **Consultas Médicas**
2. En la nueva ventana haz clic en "➕ Agregar". A continuación, se mostrará un formulario en el que se solicitan datos generales de la consulta.

   - En los campos *Consultorio, Médico y Paciente* solicitan información registrada con anterioridad en la aplicación. De esta manera la administración de un historial médico será más sencilla de administrar. *([Haga clic para más información sobre como añadir un consultorio, ](centros-medicos/consultorios.md) [paciente](pacientes.md) [o médico](usuarios/medico.md))*

   - Si el paciente cuenta con una aseguradora médica es posible agregar la información de ésta. *( [Haga clic para más información sobre aseguradoras](configuracion/aseguradoras.md))*.
   
   - Para enviar un email al paciente con la información de su consulta deberá contar con un correo registrado (*[Haga clic para saber más sobre el registro de pacientes](pacientes.md)*)y activar el interruptor mostrado en el formulario con la leyenda *"¿Enviar notificación al paciente?"*.

:::info Información
Los datos marcados con asterisco (*) son obligatorios y deberán ser llenados para poder crear el consultorio.
:::

## Cambiar el estatus de una consulta

La aplicación cuenta con el siguiente  sistema de clasificación de citas:
- **Cancelado**: La consulta agendada fue cancelada por el paciente.
- **Atendido**: La consulta agendada fue atendida correctamente.
- **En atención**: La consulta agendada esta siendo atendida.
- **Programado**: La consulta fue agendada para una futura fecha.

Para cambiar el estatus de una consulta médica sigue los siguientes pasos:
1. Entra al menú **Agenda Médica** ➜ **Consultas Médicas**
2. Haz clic en el icono ![icono submenu](/img/agenda_médica/icon_dots_submenu.png) de la consulta médica a actualizar. Y selecciona el estatus deseado.

Dependiendo el estatus actual de la consulta será posible actualizarlo según las siguientes opciones:

    |Actual/Disponible| En atención |Programado|Cancelado|Atendido|
    |------------|-------------|----------|---------|--------|
    | En atención|  ❌         |❌        |   ❌   |  ✔️    |
    | Programado |   ✔️        |✔️        |  ✔️    |  ✔️    |
    | Cancelado  |   ❌        |❌        |  ❌    |  ❌    |
    | Atendido   |   ❌        |❌        |  ❌    |   ❌   |

:::info Información
Es posible agregar una aseguradora médica al momento de cambiar el estatus de una consulta médica de **"Programado"** a **"En atención"**, esto se verá reflejado en la creación de ordenes de venta.
:::

## Creación de receta médica
Para poder una receta médica sigue los siguientes pasos:
1. Entra al menú **Agenda Médica** ➜ **Consultas Médicas**
2. Haz clic en la consulta médica a agregar una receta médica. Y en la parte inferior de la pantalla encontrarás una cinta de opciones. Haz clic en "Receta médica" ➜ "➕ Agregar receta médica".
3. Llene el formulario con los datos solicitados. Esta información quedará registrada en la consulta.
      - **¿Desea agregar medicamentos a la receta?**
        1. Haz un clic sobre la receta médica, una cinta de opciones se desplegará en la parte inferior
        2. Haz clic en "➕ Agregar" y llene el formulario correspondiente.

:::info Información
El medicamento a seleccionar deberá existir en el **catálogo de médicamentos**. (*[Haga clic para más información sobre el catálogo de medicamentos.](catalogos/medicamentos.md)*)
:::

## Agregar orden de venta

:::info Danger
Para agregar una orden de venta, la consulta deberá tener el estatus **"En atención"**.
Al cambiar el estatus a **"Atendido"** no será posible cambiar la información registrada en una orden de venta.
:::
Para agregar la orden de venta correspondiente a la consulta médica sigue los siguientes pasos:

1. Entra al menú **Agenda Médica** ➜ **Consultas Médicas**
2. Haz clic en la consulta médica a agregar una orden de venta. En la parte inferior de la pantalla encontrará una cinta de opciones, de clic en "Orden de venta".
    Se debe de tener en cuenta las siguientes dos opciones para las ordenes de venta:
      - **El paciente cuenta con aseguradora médica:** se mostrarán dos ordenes de venta. La primera contará con el nombre del paciente, mientras que la segunda tendrá los detalles de la aseguradora médica.
      - **El paciente no cuenta con aseguradora médica:** se mostrará una sola orden de venta.  
3. Para poder editar los detalles de la orden de venta creada, deberá hacer clic sobre el icono ![iconos submenu](/img/agenda_médica/icon_dots_submenu.png) y hacer clic en la opción "seleccionar".
4. Diríjase al final de la pantalla donde encontrará la sección *"Detalle orden de venta"* , haga clic en "➕ Agregar". Este nuevo formulario solicitará información como precio de servicio/articulos que tiene registrados en su catálogo *[Haga clic para más información sobre el catálogo de articulos](configuracion/listas-precios.md)*, el impuesto que desea agregar *[Haga clic para más información sobre registrar impuestos en la aplicación](configuracion/impuestos.md)*, etc.


## Opciones de consulta médica

La aplicación cuenta con funciones adicionales para complementar la información de consultas médicas, las opciones disponibles son las siguientes:

### Agregar signos vitales

Para gregar los signos vitales del paciente durante la consulta, sigue los siguientes pasos:
1. Haga clic en la consulta a la que desea agregar signos vitales del paciente.
2. En la parte inferior de la pantalla encontrará una cinta de opciones, de clic en "Signos vitales"▶"➕ Agregar signos vitales".
3. Llene el formulario con los datos solicitados. Esta información quedará registrada en la consulta.

### Agregar un diagnóstico
La aplicación cuenta con el catálogo CIE-10 para seleccionar un diagnóstico. [Haga clic para obtener más información del catalogo de diagnosticos CIE-10](catalogos/diagnositcos-cie.md). Si desea agregar un diagnóstico a la consulta médica, siga los siguientes pasos:
1. Haga clic en la consulta a la que desea agregar el diagnóstico del paciente.
2. En la parte inferior de la pantalla encontrará una cinta de opciones, de clic en "Diagnósticos"▶"➕ Agregar diagnósticos".
3. Llene el formulario con los datos solicitados. Esta información quedará registrada en la consulta.

### Expedición de certificados de incapacidad laboral para el trabajo (CITT)
Si el paciente necesita la expedición de incapacidad laboral esta puede ser generada siguiendo los siguientes pasos:
1. Haga clic en la consulta correspondiente al paciente que solicita el CITT.
2. En la parte inferior de la pantalla encontrará una cinta de opciones, de clic en "Incapacidad laboral"▶"➕ Agregar".
3. Llene el formulario con los datos solicitados. Esta información quedará registrada en la consulta.

:::info Información
Para imprimir el CITT, haga clic en "Reporte" y seleccione el archivo a descargar de su preferencia, terminada la descarga abra el documento e imprímalo.
::: 