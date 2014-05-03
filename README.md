## Islay: A Ghost blog theme  

#### Theme uses Foundation 5 framework. Compiled using Mixture.

#### Completed Features:

* Index, Post, Page and Tag archive templates
* Customized pagination
* Jump to top anchor link
* Smooth scrolling with links
* Customized social icons
* AddThis smart overlay sharing
* Customized favicon
* Author info displayed outside of main loop
* Offcanvas menu for social links on mobile
* Disqus comment on each post

#### TODOs:

* Integrate use of Bourbon
* Create Grunt version for future builds

#### Foundation Use:

* see js/foundation.mix.js for foundation JS compiled
* see scss/_foundation.scss for foundation scss complied

#### Scss Library:

* /foundation/ : includes all Foundation 5 components
* _foundation.scss : @import statements for F5 components included
* _foundation_setting.scss : controlling variables for F5 styles 
* _islay.scss : controlling variables and customized functions for this theme
* _normalize.scss : by Nicolas Gallagher http://necolas.github.io/normalize.css/
* styles.scss : main stylesheet for this theme

#### Partials:

* addthis : my AddThis embed code
* author : hard-coded author info. Author info saved in setting can only be retrieved in main loop. doesn't work for my purpose.
* footer : the footer
* pagination : overwrite Ghost's default pagination
* post-item : the post used to display on index pages
* post-meta : timestamp and tag labels of a post, included in post-item
* sidebar : column to display blog title, blog description and social links
* disqus-thread : my Disqus comment embed code
* offcanvas-menu : offcanvas menu containing social links

Theme author: Chienyi Cheri Hung @cyhung

Version: 1.0.0

MIT License. See LICENSE for details.


