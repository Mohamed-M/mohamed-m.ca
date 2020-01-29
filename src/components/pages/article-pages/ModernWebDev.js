import React, { Component } from "react";
import "./article-pages.scss";

class ModernWebDev extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="article-content">
          <article class="article-entry">
            <div class="article-title">
              <h1>Modern Web Development Workflow Walkthrough</h1>
            </div>
            <div class="article-body">
              <ol>
                <li>Type out the HTML markup first and foremost.</li>
                <li>
                  Use semantic CSS/HTML naming conventions (e.g. .people >
                  .people-cards > .card-info > h3.card-name + .card-title)
                </li>
                <li>Build the Base & Variables styles first. Make mixins.</li>
                <li>
                  Base font size (on the body tag in the _base.scss file) should
                  be in REM (relative scalable units) instead of pixels.
                </li>
                <li>
                  Set the font-size in REM on the body tag, not the HTML tag.
                </li>
                <li>
                  Set font-size to 62.5% on the HTML tag, for easier conversions
                  of pixels to REM (e.g. 18px -> 1.8rem)
                </li>
                <li>Use REM in media queries.</li>
                <li>
                  <strong>
                    USE REM EVERYWHERE! I cannot stress this enough.
                  </strong>
                </li>
                <li>
                  Set the img tag to max-width: 100% and height to auto so it
                  doesn't overflow on the parent element. These declarations
                  should be in the _base.scss file.
                </li>
                <li>
                  Use a container with 80% width and 0 auto margins for
                  breathing room. Don't use a container on the full width
                  sections (e.g. full viewport header)
                </li>
                <li>
                  Whenever declaring :hover state, also declare :focus state.
                </li>
                <li>
                  Create a Modules folder for different page sections (e.g.
                  header, footer, navigation)
                </li>
                <li>
                  Type out the mobile version first with a pane of the
                  LiveReload (i.e. Mobile First Approach) or create the desktop
                  version first and then extract the display and margin/padding
                  properties out and into the media screens for larger screens.
                </li>
                <li>Don't go more than 3 nesting levels deep.</li>
                <li>
                  Don't use tag names, instead use class names (e.g. footer ->
                  .footer, header -> .header)
                </li>
                <li>
                  Create a shared generalized section.scss file for .section
                  class in the modules folder. In there also style the section
                  titles (e.g. h1.headline)
                </li>
                <li>
                  Create a sections folder, with a file for each page or for
                  each section in a one page style.
                </li>
                <li>
                  Utilize the color functions that comes with PostCSS
                  (postcss-color-function plugin). It doesn't need to be piped
                  but included in the dependencies of the PACKAGE.json file.
                </li>
                <li>
                  Make use of the calc() function instead of manually doing
                  calculations.
                </li>
                <li>Add hover transitions on the navigation menu.</li>
                <li>
                  Incorporate transforms (e.g. scale) + transitions on section
                  items when hovered over.
                </li>
                <li>
                  The postcss-animation plugin easily and automatically adds
                  keyframe functions from animate.css plugin.
                </li>
                <li>
                  Add HTML comments before sections and after closing tags.
                </li>
                <li>
                  Set box-sizing to border-box on the HTML selector, then use
                  the inherit value on box-sizing with *, *:before, and *:after.
                </li>
              </ol>
            </div>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

export default ModernWebDev;
