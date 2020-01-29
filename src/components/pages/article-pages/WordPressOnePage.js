import React, { Component } from "react";
import "./article-pages.scss";

class WordPressOnePage extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="article-content">
          <article class="article-entry">
            <div class="article-title">
              <h1>Creating a WordPress One Page Theme Walkthrough</h1>
            </div>
            <div class="article-body">
              <ol>
                <li>Download and use the <a href="https://underscores.me">Underscores starter theme</a> as the boilerplate.</li>
                <li>Edit the style.css by adding custom CSS at the bottom of it (e.g. .site-branding ).</li>
                <li>In theme-customizer, set the Front Page to a static page (i.e. Front Page -> Home).</li>
                <li>Edit page.php and rename it one-page-site.php and change the template name comment code to “One Page Style”. Then edit the page and set template to “One Page Style”.</li>
                <li>Use the WP Query code to select all the pages.</li>
                <li>For the navigation, add an ID tag to each article section. Then use internal links in the nav to jump through the pages.</li>
                <li>In the template-parts/content-page.php set the $post to global. Then change the article ID to the post name (i.e. slug) instead of the_ID().</li>
                <li>Delete the automatically created menu items. Then use custom links instead of pages to set the links.</li>
                <li>Utilize jQuery Scroll-To snippet for smarter scrolling.</li>
                <li>Duplicate customer.js (part of underscores framework) and rename it as theme.js.</li>
                <li>Make sure to test and use media queries for smaller screen sizes.</li>
              </ol>          
            </div>
          </article>
        </main>
    </React.Fragment>
    );
  }
}
export default WordPressOnePage;
