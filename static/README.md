# Fractal Bootstrap

This project provides a development experience that mirrors the idfive Component Library but instead uses Bootstrap 4 as the underlying frontend library.

## Installation

Dependencies need to be installed with [node/npm](https://docs.npmjs.com/getting-started/installing-node).

`npm install`

## Development

The component library includes [Fractal](http://fractal.build) for component based development. Your own components can be added to the `src/components` folder. Static assets such as JavaScript, CSS and images will be served out of the `build` folder, but can also be configured to your specific needs by editing the [fractal.js file](fractal.js). For more information, read the [fractal guide](http://fractal.build/guide).

To start the fractal development server:

`npm run fractal`

Referencing images from within your component twig templates:

```html
<img src="{{'/img/image.png'|path}}" alt="" />
```

### Watch mode

If you do not wish to use Fractal, or simply want to watch for changes without launching a development server, you can run the watch command:

`npm run watch`

### Webpack server

If you do not wish to use Fractal in development, you can use the webpack development server:

`npm run serve`

## Building for production

To build your code for production, run the following:

`npm run build`

This will generate `build` and `fractal` folders at the root of your project. The `build` folder contains all of your compiled assets (CSS, JavaScript etc.), while the `fractal` folder contains a static generated version of your Fractal component library, which can be used for previews and an online reference to your component library. See the [Clearleft Fractal Library](http://fractal.clearleft.com) as an example.

### Passing paramters to your npm scrips

It is possible to pass parameters to your build scripts, which will then be exposed in JS via `process.env`. Example:

`npm run build --apiBase=http://prod.com`

In your JS file:

`const apiBase = process.env.apiBase || 'http://localapi.com';`

## Overriding Bootstrap styles

Bootstrap 4 provides Sass variables out of the box to allow customization of component styles while writing very little code. To override these variables use `src/scss/_core/_variables.scss`. For a few components, custom variables have been provided and can also be overridden in that stylesheet.
