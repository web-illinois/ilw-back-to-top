# ilw-back-to-top
## Overview
This component places a button in the bottom-right corner of the screen which takes visitors back to the top of the page.

## Placement Guidance

The preferred placement is as close as possible to the ending `</body>` tag, outside of any `<ilw-page>` element in use, so the button behaves like a page-level utility control. You can also place the component inside the `<ilw-footer>` tag.

By default, this component will take the visitor to the top edge of the page. To change the location of the top of the page, use the `target` attribute.

## Accessibility

This component respects the user's reduced-motion preference. If the user has enabled Reduced Motion on their device, clicking the button scrolls directly to the top target instead of using the stepped scroll effect.

## Code Examples

Placement
```html
<body>
  <ilw-page>

  <!-- ... page content ... -->

  </ilw-page>
  <ilw-back-to-top></ilw-back-to-top>
</body>
```
To change the location of the top of the page, use the `target` attribute:

```html
<ilw-page>
  
  <div id="my-top-of-page"></div>
  
</ilw-page>
<ilw-back-to-top target="my-top-of-page"></ilw-back-to-top>
```

To change the position of the button, modify the `ilw-back-to-top--right` and `ilw-back-to-top--bottom` CSS variables. These control the distance from the button to the right and bottom edges of the screen, respectively.

```css
ilw-back-to-top {
  --ilw-back-to-top--right: 48px;
  --ilw-back-to-top--bottom: 48px;
}
```
## Upgrade Process
Rename il-back-to-top to ilw-back-to-top.
## External References
https://www.nngroup.com/articles/back-to-top/