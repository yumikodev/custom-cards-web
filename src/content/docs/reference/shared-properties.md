---
title: Propiedades compartidas
description: Sobre las propiedades compartidas
---

Las propiedades compartidas son aquellas que se pueden presentar en el body de 1 o más rutas, y su funcionamiento seguirá siendo el mismo, esto independientemente de la variante o la tarjeta.

## font

Propiedad de tipo `string` que define el tipo de letra (o tipografía) a usar en el diseño de los textos de la tarjeta. Actualmente sólo se admiten 3 tipos de valores como fuentes:

- `Fredoka One`
- `Milky Coffee`
- `Poppins`

## avatar

Esta propiedad es de tipo [File](https://developer.mozilla.org/en-US/docs/Web/API/File/File) y sirve para subir la imágen que se usará como avatar en la tarjeta. Las dimensiones recomendadas para los avatars es de `300x300` píxeles y las imágenes mayores a este tamaño se ajustarán automáticamente a las medidas mencionadas.

## background

Al igual que la propiedad [avatar](#avatar), esta también es de tipo [File](https://developer.mozilla.org/en-US/docs/Web/API/File/File) y sirve para subir la imágen del fondo (las dimensiones del fondo puede cambiar dependiendo del tipo de tarjeta, pero esta igualmente se recortará y se ajustará automáticamente).

### backgroundOpacity

Esta propiedad va relacionada con el fondo de la imágen, determina la opacidad (o mejor dicho, la visibilidad) que esta tendrá. Por defecto tendrá el valor `0`, significa que no se aplicará ningún efecto y el fondo se mantendrá tal cual.

Se admiten valores entre `0` y `1` (por lógica, se aceptan decimales), mientras su valor sea cada vez más cercano a `1` el fondo se verá más ocuro.

```toml
backgroundOpacity=0.1 # ✅ Se verá un poco más oscuro que la imágen original.
backgroundOpacity=0.76 # ✅ La imágen se verá más oscura.
backgroundOpacity=1 # ✅ Fondo completamente negro.
backgroundOpacity=7 # ❌ Completamente inválido.
```

## frameType

Esta es una propiedad relacionada con los avatars, pues indica cuál va a ser el estilo del marco que estos tendrán. Actualmente sólo se admiten 3 valores.

| Valores admitidos | Descripción                                                   |
| ----------------- | ------------------------------------------------------------- |
| `circle`          | El avatar tendrá una forma circular.                          |
| `square`          | El avatar tendrá una forma cuadrada con bordes redondeados.   |
| `custom`          | El usuario podrá personalizar la forma del avatar y su marco. |

Aunque `circle` y `square` pueden usarse por todos los usuarios, `custom` es un valor que sólo está reservado para los usuarios del [Plan Completo](/reference/api-access#plan-completo).

### frameColor

Esta es una propiedad de tipo `string` que está disponible en cualquier lugar donde esté presente el [frameType](#frametype). De esta se espera como valor un color hexadecimal (también son válidos los [nombres de colores CSS](https://www.w3schools.com/cssref/css_colors.php)).

:::caution
Esta propiedad sólo estará disponible cuando el valor de [frameType](#frametype) sea `circle` o `square`.
:::

```toml
frameColor="#ff7eae" # Color hexadecimal.
frameColor="pink" # También es válido.
```

### frame

### mask
