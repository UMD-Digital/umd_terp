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
