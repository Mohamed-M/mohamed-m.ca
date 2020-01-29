import React, { Component } from "react";
import "./article-pages.scss";

class BEMMethodology extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="article-content">
          <article class="article-entry">
            <div class="article-title">
              <h1>BEM Methodology Explained</h1>
              <p>October 5th 2017 </p>
            </div>
            <div class="article-body">
              <p>
                The B.E.M (Block, Element, Modifier) Methodology is a CSS
                structuring paradigm that encourages decoupling, and using
                pre-defined naming conventions with CSS selectors. I use to
                utilize BEM in all my work, but now I use Sass partials and
                meticulously plan the structure of my code beforehand, so there
                is no conflict. BEM is still implemented in large enterprise
                Websites (e.g. Shopify, Facebook, etc) and Web Applications
                (e.g. Instagram) and useful to know even if working in a small
                startup or as a sole developer.
              </p>

              <h4>Key Concepts of BEM</h4>
              <ul>
                <li>
                  A Block is an independent entity. It can be simple or compound
                  when it contains other blocks.
                </li>
                <li>
                  An Element is part of a block with a specific function and
                  only makes sense in the context of the block they belong to.
                </li>
                <li>
                  Modifiers are a property of a block or element that changes
                  the look or behaviour of a block or element. Several modifiers
                  can be usd on one block.
                </li>
                <li>
                  To implement a Block we must describe its appearance and
                  behaviour in all technologies being used - HTML, CSS, and JS
                  (if the block has dynamic behaviour).
                </li>
                <li>
                  If a Block has several identical elements, such as in the case
                  of menu items, all of them will have the same name:
                  menu__item.
                </li>
                <li>
                  In BEM, everything is a class and nothing is nested. That
                  makes the CSS specificity very flat and low.
                </li>
                <li>
                  Block names must be unique (like an ID). Only instances of the
                  same block can have the same name (e.g. Twitter blocks).
                </li>
                <li>Element names must be unique within a Block.</li>
                <li>Blocks can be nested forming a "BEM" tree.</li>
                <li>HTML element selectors (h1, img) must not be used.</li>
                <li>
                  Avoid cascading selectors (i.e. .wrapper > .wrapper__head >
                  wrapper__head__logo)
                </li>
                <li>
                  Don't use #ID selectors, only the class selector due to
                  possibility of repeating instances of the same block.
                </li>
                <li>
                  Individual words within names are separated by a hyphen (e.g.
                  top-nav__logo).
                </li>
              </ul>
            </div>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

export default BEMMethodology;
