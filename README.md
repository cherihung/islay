## Islay: A Ghost blog theme with Foundation 5

#### Theme uses Foundation 5.2.2. Support compilation using Mixture or Grunt.

See it at work on my blog [www.cyh.io](http://www.cyh.io)

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
* Google Analytics
* Google Font
* Control blog background image using Ghost's Blog Cover setting

#### Foundation Use:

* see js/foundation.mix.js for foundation JS compiled
* see scss/_foundation.scss for foundation scss complied

#### Scss Library:

* /foundation/ : includes all Foundation 5 components
* _foundation.scss : @import statements for F5 components included
* _foundation_setting.scss : controlling variables for F5 styles 
* _normalize.scss : by Nicolas Gallagher http://necolas.github.io/normalize.css/
* /functions/ : custom functions utilized by this theme
* _islay.scss : controlling variables and customized functions for this theme
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
* ga-tracking : my Google Analytics tracking code snippet
* tag-item : customized tag item template
* ~~ogtag : open graph meta tags~~ No longer needed with Ghost v0.5.0.

#### Build using Grunt:

The project is natively set up to work perfectly using Mixture. In addition, it now supports building using Grunt. The grunt tasks are set up to mimic the system Mixture uses. Theme development using either method should work just fine.

* See package.json for npm dependancies
* Run `grunt` to compile and distribute minified css and js for the live site to use
* Run `grunt debug` to compile nested css and unminified js for use during debugging or development
* Run `grunt js:debug` or `grunt css:debug` separate if you just want to compile either css or js for debugging or development
* Run `grunt watch` will trigger js:debug and css:bebug when either a scss or js file changes
* Remember to run `grunt` after development to get the proper production files compiled

#### IMPORTANT NOTES:

* To properly build using grunt, you need to have both Ruby and Sass installed on your machine. This is a requirement for grunt-contrib-sass.

* I chose to use grunt-contrib-sass over the faster grunt-sass because it supports all the Sass features fully. Grunt-sass does not. This is key to process the custom functions I wrote for the theme.

* Foundation 5 currently supports up to Sass 3.2. It will still compile fine if you have Sass 3.3 installed (like me). But it may not work past that version. See [this issue](https://github.com/zurb/foundation/pull/4392) for more information. I put a quite option in the grunt task to mute any deprecation warning. To see them, simply comment out that opton in grunt.js yourself.


**Theme author: Chienyi Cheri Hung @cyhung**

**Version: 0.1.7**

MIT License. See LICENSE for details.

#### LASTEST UPDATES:

**v0.1.7**

* Added optional background-image using Ghost's @blog.cover setting. If no blog cover, defaults to black.
* Removed hard-coded background-image in theme style.

**v0.1.6**

* Added Autuprefixer package and grunt task

**v0.1.5**

* To use Ghost 0.5.0 features: Added Cover Image displaying inside the post; Removes call to ogtag partial. 
* Link in post-excerpt now has the underline style as it should.
* Added in /functions/ folder, reorder the structure.
* Added in a Sass map to more semantically and easily organize color definitions (idea from http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/)
