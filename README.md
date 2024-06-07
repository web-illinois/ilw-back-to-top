# ilw-back-to-top
Back to top component for toolkit 

This component places a button in the bottom-right corner of the screen which takes visitors back to the top of the page. It uses animation that simulates vertical scrolling while not being overwhelming for motion-sensitive viewers.

## Placement

This component should be placed as close as possible to the ending `</body>` tag, outside of any `<ilw-page>` element in use:

```html
<body>
  <ilw-page>

  <!-- ... page content ... -->

  </ilw-page>
  <ilw-back-to-top></ilw-back-to-top>
</body>
```

## Changing the location of the top of the page

By default, this component will take the visitor to the top edge of the page. To change the location of the top of the page, use the `target` attribute:

```html
<ilw-page>
  
  <div id="my-top-of-page"></div>
  
</ilw-page>
<ilw-back-to-top target="my-top-of-page"></ilw-back-to-top>
```

## Changing the position of the button

To change the position of the button, modify the `ilw-back-to-top-right` and `ilw-back-to-top-bottom` CSS variables. These control the distance from the button to the right and bottom edges of the screen, respectively.

```css
ilw-back-to-top {
  --ilw-back-to-top-right: 48px;
  --ilw-back-to-top-bottom: 48px;
}
```
