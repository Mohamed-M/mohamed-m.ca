import React, { Component } from "react";
import "./article-pages.scss";

class CSSLayoutTechniques extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="article-content">
          <article class="article-entry">
            <div class="article-title">
              <h1>CSS Layout Techniques</h1>
            </div>
            <div class="article-body">
              <ul>
                <li>
                  All layout specifications should be done with REM units.
                </li>
                <li>
                  REM: stands for “root em”. The em unit is relative to the font
                  size of the parent, which causes the compounding issue. The
                  rem unit is relative to the root - or the HTML - element.
                  Define a single font size on the HTML elements and then define
                  all rem units to be a percentage of that.
                </li>
                <li>
                  For an element to fill its parent container width but not
                  overflow or get to big, set the width in percent then the
                  max-width in rem. Usually set on .wrapper class.
                </li>
                <li>
                  Set a min-height on div, so it doesn’t disappear when it’s
                  empty, while also having the ability to expand in size if it
                  needs to.
                </li>
                <li>
                  Set a max-width: 100% on all images (through the img selector)
                  to ensure they don’t overflow on the container/section they
                  are within. Also set the height to auto (should be in
                  _base.scss)
                </li>
                <li>
                  To create a 2-column layout with floats, set a width on both
                  elements (e.g. 62.5% and 37.5%) then float one to the left and
                  the other to the right.
                </li>
                <li>
                  Every time you use the float property, you need to clearing
                  immediately after the last floated element.
                </li>
                <li>
                  Method #1 (older version): Create a new CSS selector called
                  .clear with the property of clear set to both. Then place an
                  empty div with the clear class after the last floated item.
                </li>
                <li>
                  Method #2 (clearfix hack): A better alternative because it
                  doesn’t require extra markup in the HTML file.
                </li>
                <li>
                  To apply it, place the .clearfix class on the floated elements
                  parent.
                </li>
                <li>
                  To override float behaviour (i.e. collapse columns into one
                  column on a small screen) set the float to none for all the
                  columns.
                </li>
                <li>
                  To center block elements (div, section, etc) by placing auto
                  margins on the left and right.
                </li>
                <li>
                  To center inline elements (p, img, etc.) use the property
                  text-align and the value center.
                </li>
                <li>
                  Use the universal box-sizing with inheritance technique for
                  flexibility and support for pseudo elements.
                </li>
                <li>
                  On every HTML document, the browser adds 8px of margin around
                  the body element; override it if it need be.
                </li>
                <li>
                  Place media queries in the order of largest viewport to the
                  smallest viewport for cascading purposes if using max-width,
                  or smallest viewport to largest viewport if using min-width.
                </li>
                <li>Remember to set the meta viewport tag.</li>
                <li>
                  On smaller screens, set headings sizes relative to the
                  viewport width.
                </li>
              </ul>
            </div>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

export default CSSLayoutTechniques;
