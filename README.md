# About UMD Terp Theme

UMD Terp is the base theme for all UMD drupal 8 projects. It combines UMD approved elements and functionality, into a modified bootstrap theme. It is best used alongside the [UMD Terp Base Module](https://github.com/UMD-Digital/umd_terp_base), which provides a suite of modules, and configuration to make this theme work as designed.

This theme can be used on its own, or as a base theme for further customizations via a custom sub-theme.

 - [UMD Terp Theme](https://github.com/UMD-Digital/umd_terp)
 - [UMD Terp Base Module](https://github.com/UMD-Digital/umd_terp_base)

## Installation
Install as you normally would any drupal 8 theme.

### Via Composer:

 - `composer require umd_digital/umd_terp`
 - `drush en umd_terp` or enable via admin UI

### Manually: 

 - Download this repo into /themes/contrib/umd_terp
 - `drush en umd_terp` or enable via admin UI

## Configuration

 - Ensure the [UMD Terp Base Module](https://github.com/UMD-Digital/umd_terp_base) is installed, and submodules enabled.

### Theme options: 

#### UMD Terp Header Settings

 - Light header style: Defaults to dark header/nav area. This option switches it to a light header/nav area.

#### UMD Terp Footer Settings

 - Address: The address of the department/institution/etc.
 - Phone Number: The phone number of the department/institution/etc.
 - Email: The email address of the department/institution/etc.

#### UMD Terp Social Media Accounts

 - Twitter Link: The address of the department/institution/etc.
 - Facebook Link: The address of the department/institution/etc.
 - Youtube Link: The address of the department/institution/etc.
 - Instagram Link: The address of the department/institution/etc.
 - LinkedIn Link: The address of the department/institution/etc.

#### UMD Terp Admin Settings

 - Assets Path: Dev use only. The assets path for any static images/etc in the theme, to be used in twig theming.

## Development

### Core (base) theme issues, patches, etc:
All edits, requests, etc should be submitted to the github repo for the [UMD Terp Theme](https://github.com/UMD-Digital/umd_terp). Please add issues to the [issues queue](https://github.com/UMD-Digital/umd_terp/issues). Patches will be reviewed on a merit and resources available basis.

### Frontend
All CSS, JS, etc are based in the static folder. This project provides a development experience that mirrors the idfive Component Library but instead uses Bootstrap 4 as the underlying frontend library.

The UMD component library includes [Fractal](http://fractal.build) for component based development. Your own components can be added to the `src/components` folder. Static assets such as JavaScript, CSS and images will be served out of the `build` folder, but can also be configured to your specific needs by editing the [fractal.js file](fractal.js). For more information, read the [fractal guide](http://fractal.build/guide).

See /static/README.md for more information on the frontend configuration.

### Customization
THIS THEME SHOULD NEVER BE MODIFIED DIRECTLY. Instead, create a sub-theme so that you may still benefit from future releases of this base theme. Once you've done that, you can override CSS, templates, and theme processing from within that sub-theme. See [Sub-themes](https://www.drupal.org/docs/8/theming-drupal-8/creating-a-drupal-8-sub-theme-or-sub-theme-of-sub-theme) for more information.
