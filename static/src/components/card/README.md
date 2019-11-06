# Card

## Images
Images within the `card__media` element can either be `img` elements (if the image can be output at a consitent size) or as a background image using the `style` attribute (if images are not a consitent size).

### Using the `img` element
```html
<div class="card__media">
  <img src="http://via.placeholder.com/400x250/ddd/ddd" alt="">
</div>
```

### Using the `style` attribute
```html
<div class="card__media" style="background-image:url(http://via.placeholder.com/400x250/ddd/ddd)"></div>
```