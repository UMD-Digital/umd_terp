8.1.53
======
- Fixing bug where styled blockquote components were inheriting WYSIWYG blockquote styles inside of tab panels

8.1.52
======
- https://trello.com/c/JnQa0K4Z/93-menu-issues
- https://trello.com/c/QhjBTOT0/87-link-style-buttons-are-aligned-top-and-double-underlined
- https://trello.com/c/ugHI4JqD/99-logo-in-header-proportions
- https://trello.com/c/f5hfzsxK/98-inline-links-in-some-widgets-break-contrast-and-lose-interactive-effects
- https://trello.com/c/HrHc6ly8/96-inline-images-do-not-align-center-if-a-caption-is-included
- https://trello.com/c/PELk7BW1/95-text-field-blockquote-has-no-styles
- https://trello.com/c/1ykgYPrw/101-update-profile-card-styles

8.1.51
======
- Update contact information template (https://trello.com/c/NhP8SnvK/57-hide-contact-label-when-value-is-null)

8.1.50
======
- Fixing divider component SCSS file extension

8.1.49
======
- Set version number

8.1.48
======
- Add dark mode theme options (https://trello.com/c/Iaha9lUh/1-set-up-theme)

8.1.47
======
- Features Colors (https://trello.com/c/AUofi1dE/26-add-option-to-include-additional-text-in-features)

8.1.46
======
- Issues for features (https://trello.com/c/AUofi1dE/26-add-option-to-include-additional-text-in-features)

8.1.45
======
- Padding for alerts on mobile (https://trello.com/c/ynlUU9hf/29-add-an-alert-module-to-the-available-sections-list)

8.1.44
======
- Updating button styles in feature component (https://trello.com/c/AUofi1dE/26-add-option-to-include-additional-text-in-features)
- Adding styles for red and light gray variants of alerts component (https://trello.com/c/ynlUU9hf/29-add-an-alert-module-to-the-available-sections-list)

8.1.43
======
- Adding alerts component styles (https://trello.com/c/ynlUU9hf/29-add-an-alert-module-to-the-available-sections-list)

8.1.42
======
- Add version to theme .info file

8.1.41
======
- https://github.com/UMD-Digital/umd_terp/issues/7
- https://trello.com/c/6Y4OEJcT/62-d8-template-stat-cards-bug

8.1.40
======
- Strip tags on teaser (https://trello.com/c/52JR1klb/70-check-link-style-on-site).
- Add dependencies to .info, per https://www.drupal.org/node/2937955 (https://trello.com/c/p8ErUtaj/73-update-theme-dependency-modules)
- Add aria label to phone number in footer (https://github.com/UMD-Digital/umd_terp/issues/6)

8.1.39
======
- build css.

8.1.38
======
- button/link centered adjustments.

8.1.37
======
- Global spacing adjustments (https://trello.com/c/zIpw2RwL/50-global-spacing-adjustments).
- npm switch to use npm version of bootstrap, and minor css edits to enable.
- Adjust link set to be able to inherit parent text align classes.

8.1.36
======
- Adjust node templates to use attributes and render all so quickedit/etc works.

8.1.35
======
- Updating mobile sizing of h1 and h2 elements (https://trello.com/c/0mux8ApZ/48-update-page-titles-in-responsive-view)

8.1.34
======
- Adjusting font-size and weight of h1's (https://trello.com/c/kSnCLerF)
- Adjusting vertical spacing between widgets (https://trello.com/c/68NctW1L)
- Adjusting sizing of text version of site header logo (https://trello.com/c/8shFo8JG)
- Adjusting aspect ratio of blockquote portrait (https://trello.com/c/2ssh1Cft)
- Removing horizontal padding from card group and news cards page-sections on mobile (https://trello.com/c/FbkqxXM6)
- Updating font case in footer, removing bullet in front of phone (https://trello.com/c/ObfV2eRV)

8.1.33
======
- Adjust person template and functions to remove department links

8.1.32
======
- Adding indentation to subnav child pages (https://trello.com/c/gLfDpwcg)
- Adding link button styles (https://trello.com/c/8vdrXiu0)

8.1.31
======
- Removing carousel functionality on mobile for card group component
- Adding styles to table section wrapper to prevent x-overflow on smaller screens

8.1.30
======
- Minor adjustments to readme and theme settings

8.1.29
======
- Add ability to adjust back to people text

8.1.28
======
- Fix footer logo uploading

8.1.27
======
- Updating link set component's styles to have links stack to avoid word cloud (https://trello.com/c/bXJV7F3N/22-links-group-becomes-word-cloud-when-link-titles-are-long)
- Updating card group component to only become a carousel on mobile when more than one card is in the group (https://trello.com/c/dQRemDWl/21-consider-removing-carousel-effect-on-card-group-section)

8.1.26
======
- Updating UL styles to position bullet icons inline instead of absolutely to avoid issue when floating an image next to a list (https://trello.com/b/ODpjs7Dr/umd-d8-template)
- Updating UL and OL styles to increase specificity of LI styling to prevent collisions when nesting OL's inside UL's and vice versa (https://trello.com/c/MgwCxfxE/18-adjust-styles-with-mixed-ordered-and-unordered-lists)
- Fixing styling bug with tab panel tabs
- Fixing bug where default card hover state was cascading into profile cards (https://trello.com/c/HNNT4cDx/15-remove-border-on-hover-of-person-cards)

8.1.25
======
- Adjust subnav mobile text from "In this section" to "Navigation" at client request

8.1.24
======
- Updating column widths of sidebar and content area, adding hyphenation to sidebar nav links to prevent lengthy words from extending out past the boundaries of the nav itself (https://trello.com/c/knle7DCl/4-estimate-time-requirements-for-transitioning-sidebar-navigation-from-bootstrap-grid-to-flexbox)

8.1.23
======
- Adding text-only option for logo in main nav when an image isn't available

8.1.22
======
- Reverting button set styles to be full width under 600px and then sized by content width on wider viewports (https://trello.com/c/FQrHJPWE/1-set-button-width-to-100)
- Fixing bug with no padding at the bottom of the page content area on mobile (https://trello.com/c/DwR7nJIz/7-evaluate-padding-at-the-bottom-of-html-text-areas)

8.1.21
======
- Fixing bug with vertical alignment of unordered list item bullets

8.1.20
======
- Updating button set styles to keep button text vertically aligned inside buttons when sibling buttons are different heights, allowing buttons to fill entire width when less than the number of columns at each breakpoint

8.1.19
======
- Updating btn-set styles to use a column-based layout (https://trello.com/c/FQrHJPWE/1-set-button-width-to-100)
- Vertically centering unordered list item bullet icons (https://trello.com/c/NamGfzdK/2-vertically-center-bullet-points-for-unordered-lists)
- Adding border-top on hover to cards with no image (https://trello.com/c/DER4cUcW/3-add-border-top-for-hover-on-cards-that-dont-have-images)
- Updating textarea styles (https://trello.com/c/DwR7nJIz/7-evaluate-padding-at-the-bottom-of-html-text-areas)
- Updating mobile footer nav link styles (https://trello.com/c/4Qxfh0Xx/9-remove-red-borders-and-center-links-in-mobile-footer-view)
- Adding source parameter to blockquote component (https://trello.com/c/l87JI6oY/8-update-testimonial-widget-to-include-a-url-associated-with-source)

8.1.18
======
- Include File class for footer logo.

8.1.17
======
- Updating card group component to be left-aligned, allow last two cards to be 50% width on desktop if they're the only cards in their row

8.1.16
======
- Fixing bug where numbers in ol's were displaying above text when a paragraph is a direct child of ol li's

8.1.15
======
- Updating home hero image variant to stack at 1200 instead of 800, fixing color of button in dark or bg variants
- Adding height to header logo under 800px to prevent distortion on mobile
- Adding footer logo theme setting
- Fixing bug where incorrect field name was being used in homepage hero for CTA field

8.1.14
======
- Adding google fonts

8.1.13
======
- Adding `height: auto` to general img element to prevent distortion of images in WYSIWYG.

8.1.11
======
- Adding styles for center-aligned images in the WYSIWYG.

8.1.10
======
- Adding object-fit/object-position polyfill.

8.1.9
=====
- Add default social share image.

8.1.8
=====
- Increasing contrast of table headers (https://bugify.idfive.com/issues/23374)
- Increasing contrast of event block time/location strings (https://bugify.idfive.com/issues/23373)
- Increasing contrast of inactive tabs in tab panel component (https://bugify.idfive.com/issues/23375)

8.1.7
=====
- Remove un-needed string concat in alter.inc
- Update composer.json and documentation to confirm twig_tweak is required (https://github.com/UMD-Digital/umd_terp/issues/1)
- Remove un-needed require/use from umd_terp.theme (https://github.com/UMD-Digital/umd_terp/issues/2)

8.1.6
=====
- Fixing AA contrast bug with bullets in footer (http://bugify.idfive.com/issues/23164)
- Adding aria label to site footer to fix non-distinguishable landmarks issue (http://bugify.idfive.com/issues/23167)
- Fixing bug where flickity draggable element didn't have visible focus state (http://bugify.idfive.com/issues/23168)
- Adding updated mobile style of sidebar nav (http://bugify.idfive.com/issues/23007)

8.1.5
=====
- Updating default font-weight of button text to be bold (http://bugify.idfive.com/issues/23112)

8.1.4
=====
- Fixing contrast issue with yellow secondary button style (http://bugify.idfive.com/issues/23112)

8.1.3
=====
- Removing admin tabs from page templates

8.1.2
=====
- Adding RELEASES.md
- Moving styles from scss/components into respective component directory stylesheets to simplify component styling
- Updating mobile styles for tabs (http://bugify.idfive.com/issues/23046)

8.1.1
=====
- Fixes JS Menu/etc for sub-themes

8.1.0
=====
- Initial DEV Release
