---
title: Variantes
description: Variantes de tarjetas (cuerpos)
---

Para hacer mantenible la documentación de la API, las propiedades de cada variante se listarán aquí.

:::note
Para poder representar el formato [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) correctamente se deben tener lo siguientes puntos en cuenta:

1. Se está usando el formato JSON para proporcionar resaltado, pero en la práctica todos los valores de un FormData se basan en `clave=valor`, por lo tanto los **valores** deben convertirse a una cadena de texto.

   Si tenías algo como esto:

   ```json
   {
     "number1": 9,
     "nestedObject": { "nestedProp": "example" }
   }
   ```

   Debes convertir los valores a una cadena de texto:

   ```json
   {
     "number1": "9",
     "nestedObject": "{\"nestedProp\":\"example\"}"
   }
   ```

2. Cada que una propiedad contenga el valor `@file.png` se hace referencia a la subida de un archivo local.

   ```json
   {
     "campo1": "@file.png"
   }
   ```

:::

## Tipografías

Independientemente de la variante, los nombres de las tipografías siempre serán globales. Por lo tanto, estos son los actuales valores aceptables:

- `Fredoka One`
- `Milky Coffee`
- `Poppins`

## Classic

### Tarjetas de bienvenida

:::note
Las siguientes propiedades sólo están disponibles para usuarios del Plan Completo.

```diff lang=json "custom"
{
  "frameType": "custom", // <-- Sólo ese valor
+  "frame": "@frameFile.png",
+  "mask": "@maskFile.png"
}
```

:::

<details>
<summary>¿Qué hace el frameType "custom"?</summary>

La propiedad `frameType` determina el tipo de marco que usará el **avatar**, esta puede ser Circular, Cuadrada o Personalizada.

Al asignarle el valor `custom` significa que el usuario definirá la Forma (llamada Máscara) del avatar y el Marco que este usara.

:::caution
Al usar un marco personalizado, las transparencias en las imágenes del Marco y las máscaras serán muy importantes, por lo que recomendamos subir estos archivos en un formato que las acepte (PNG o WebP)
:::

</details>

```json
// body.json
{
  "variant": "Classic",
  "frameType": "circle", // "square" o "custom"
  "frameColor": "#fff", // o el nombre del color: red, white, violet, pink, etc...
  "background": "@file.png", // Opcional
  "avatar": "@file.png",
  "backgroundOpacity": 0.3, // entre 1 y 0 (por defecto: 0)
  "font": "Fredoka One"
}
```
