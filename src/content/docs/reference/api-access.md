---
title: Acceso
description: Sobre los tokens de acceso
---

Los tokens de Acceso no son más que una medida preventiba y un plan para lograr abusos y volver mantenible este proyecto a largo plazo.

Un Acceso es una identificación única para cada usuario que puede ser **creada, actualizada y eliminada** según sea necesario. Cada acceso está relacionado con un `token` que permite consumir de la API sólo a los usuarios que solicitaron su token en nuestro [Servidor de Discord](https://discord.gg/YqUkagNPaw).

## ¿Cómo consigo un token?

Cómo se mencionó anteriormente, puedes solicitar tu token entrando a nuestro [Servidor de Discord](https://discord.gg/YqUkagNPaw) y abriendo un ticket con el comando `/ticket open`.

## ¿Qué planes exísten?

Actualmente solo existen 2 planes.

- ### Plan `Básico`.

  Puedes acceder a la API y generar imágenes, pero estas estarán limitadas en cuanto a opciones de personalización y una marca de agua.

- ### Plan `Completo`.

  Obtienes acceso completo a todas las características de la API sin las limitantes.

## Renovación

:::danger
Los términos descrítos en este apartado aplican para ambos planes por igual, pedimos tenerlos en cuenta al momento de usar nuestro servicio.
:::

Una vez hayas generado un token con cualquiera de los 2 planes, debes tener en cuenta el `tiempo de expiración`, pues este determinan la vida útil de tu token y el periodo de facturación si decidiste optar por nuestro [plan completo](#plan-completo).

Se le notificará con **7 días** de anticipación que usted tiene un token a punto de expirar (esto mediante nuestro bot oficial).

Una vez notificado, puedes abrir o reabrir un ticket y realizar la renovación de tu ticket.

## ¿Qué pasa sí mi token expira?

Si detectamos que se hizo una solicitud con un token expirado, el estado de ese token pasará a ser `Suspendido` y se dará un plazo de 7 días para ir a nuestro servidor y renovarlo.

En caso de no haber contactado con nosotros, **todo token que tenga 7 días de suspendido** será actualizado automáticamente con el estado `Revocado`. Una vez en esta etapa, deben pasar 30 días para la eliminación total de este mismo de forma automática.

## ¿Cómo puedo ver la información de mi token?

Toda la información sobre un Acceso y el token relacionado podrá obtenerse mediante un comando de nuestro bot oficial (Sparkle).

Es importante mencionar que este bot es privado, por lo tanto es indispensable estar dentro de nuestro Servidor de Discord para poder acceder a todos los comandos necesarios.
