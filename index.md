---
layout: default
---

# Pattern Library

## What is a Pattern?

**A pattern is a reusable, functional, html-based component.**

Each pattern is packaged with:

* an HTML file (in your templating languge-of-choice)
* dummy data
* javascript
* css (in your css compiler-of-choice)

![test](/images/folder-pattern-contents.png)

*see: [What makes up a pattern?](#what-makes-up-a-pattern)*

## What is a pattern library?

**A storage-and-sharing standard for your *functioning* UX patterns.**

Each pattern library:
	
* is built on Node.js
* organizes your patterns
* includes [Pattern Lab](http://patternlab.io/), a web development prototyping tool
* is built for *design-in-browser* development:
  * creates a file server
  * has instant browser refresh after saving files
  * performs template and css compilation
* can publish your work online to [GitHub Pages](https://pages.github.com/)

## Table of Contents for this page:

* [Relevant Repositories](#relevant-repositories)
* [How to create a pattern library](#how-to-create-a-pattern-library)
* [Gulp Tasks Available](#gulp-tasks-available)
* [What makes up a Pattern?](#what-makes-up-a-pattern)
	* [Single-Pattern Folder Contents](#single-pattern-folder-contents)
	* [Pattern YAML File](#pattern-yaml-file-patternyml-required)
	* [Template File](#template-file-example-patterntwig-required)
	* [Other Optional Included Files](#other-optional-included-files)


## HISTORY

## Relevant Repositories

* [pattern library](https://github.com/pattern-library/pattern-library)
  * contains base (atoms/molecule level) html elements
  * has full gulp functionality
  * built with the [pattern library generator](https://github.com/pattern-library/generator-pattern-library)
* [pattern library generator](https://github.com/pattern-library/generator-pattern-library)
  * [Yeoman](http://yeoman.io) generator that scaffolds out a new pattern library
  * creates a new pattern library
  * creates a new html component which includes:
    * yaml-based data file
    * a pattern's markup, in html or twig
    * optional SASS file
    * optional JS file
    * a README
* [pattern library utilities](https://github.com/pattern-library/pattern-library-utilities)
  * adds gulp functions to pattern libraries, like:
    * watching files
    * creating a server
    * installing Pattern Lab
  * contains javascript modules that:
    * import patterns into Pattern Lab (and other systems)
    * convert twig include paths inside twig templates
    * convert YAML data into JSON
    * get options for gulp tasks
  * contains gulp tasks that can be imported into a project's gulpfile.js and used by adding configuration
  * gulp tasks available:
    * doxx: creates documentation site from code, [example: pattern-library-utilities docs](http://pattern-library.github.io/pattern-library-utilities/)
    * ghPages: publishes code to GitHub Pages; defaults to publish Pattern Lab's public directory
    * patterns-import: imports patterns and supporting files into Pattern Lab and other systems
    * file globbing: reads through directories, globs specific files, injects references to those files into other files (SCRIPT tags for js, @import for scss, etc)
  * contains compiling scripts for scss and twig

## How to create a pattern library

1. Install the [pattern library generator](https://github.com/pattern-library/generator-pattern-library)

    ```npm install -g generator-pattern-library```

2. Run the generator in an empty repository

    ```yo pattern-library```

    a. scaffolds out the pattern library structure
    b. installs NPM dependencies
    c. scaffolds out a global assets directory

3. Install Pattern Lab for prototyping

    ```gulp build```
  
    a. installs Pattern Lab using composer
    b. copies patterns and javascript into Pattern Lab ./source
    c. copies global assets into Pattern Lab

4. Serve files and begin development

    ```gulp serve```
  
    a. creates `<script>` tags for javascript files
    b. creates `@import` statements for scss files
    c. compiles scss
    d. triggers a PHP Pattern Lab build
    e. uses browsersync to create a server for Pattern Lab
    f. maintains a watch on files
    g. refreshes browser on file changes
  
## Gulp Tasks available

**note:** you can always type `gulp help` to see a list of available gulp tasks

notable tasks:

* `gulp build`
  * installs Pattern Lab
  * imports your pattern library into Pattern Lab
  * imports from other pattern libraries
* `gulp serve`
  * development server
  * browser refresh on file changes

* ghPages
  * deploys Pattern Lab's *public* directory to GitHub Pages
* glob-inject-js-all
  * globs all javascript files
  * (other JS glob tasks available)
* glob-inject-sass-all
  * globs all sass files
  * (other sass glob tasks available)
* help
  * lists available gulp tasks
* patternlab-build-public
  * triggers Pattern Lab's build system
* patternlab-clean
  * prepares Pattern Lab's source folder for the pattern library
* patternlab-install
  * installs Pattern Lab
* patterns-import-all
  * imports patterns from local and npm into Pattern Lab
* sass
  * sass file compilation
* global-assets-import-all
  * all global asset imported into Pattern Lab
  * (other global assets import tasks avail)
* watch
  * watch tasks for all different types of files


## What makes up a Pattern?

### Single-Pattern Folder Contents

These are the files which *may* be in a single HTML pattern's directory. This imaginary pattern is called *example-pattern*. 

The *only* required files are `pattern.yml` and a pattern file (in any templating language or plain html.)

* ![folder](/images/folder-open.gif) example-pattern/
  * ![file](/images/document.png) pattern.yml
  * ![file](/images/document.png) example-pattern.twig
  * ![file](/images/document.png) example-pattern.js
  * ![file](/images/document.png) README.md
  * ![file](/images/document.png) example-pattern.scss


### Pattern YAML File (`pattern.yml`, required)

Each single pattern folder *must* contain a `pattern.yml` file. 

This file contains paths to find supporting files, meta data, and dummy data to populate the pattern for testing purposes.

This example is from the [Figure Image pattern](https://github.com/pattern-library/pattern-library/tree/master/patterns/molecules/media/figure-image), which is included in the base [pattern library](https://github.com/pattern-library/pattern-library).

```
name: Figure Image
description: A `figure` element with `figcaption` and an included `img` element from /atoms/images/img/img.twig.
twig: ./figure-image.twig
category: molecules
subcategory: media
options:
  foo: bar
data:
  figure:
    img:
      src: http://placehold.it/350x150&text=figure__image
      alt: Aenean commodo ligula eget dolor. Aenean massa.
      class: figure__image
    caption:
      text: Aenean commodo ligula eget dolor. Aenean massa. Cumo sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    class: base__figure-image
```

### Template File (`example-pattern.twig`, required)

Each pattern folder *must* contain a `[pattern-name].[template-lang]` (example-pattern.twig) file. These files should *not* contain actual text, data, images, etc. Instead, patterns use curly-braces as data placeholders. Even if they are .html files.

### Other Optional Included Files

#### README.md

Should include usage examples

#### PATTERN.js

A pattern's javascript file. Include in `pattern.yml` like this:

```
...
script: example-pattern.js
...
```

#### PATTERN.css

A CSS file. Include in `pattern.yml` like this:

```
...
css: example-pattern.css
...
```

#### PATTERN.scss

A SASS file. **NOTE:** do not prefix this file with an underscore or it will be ignored when import-conversion happens. Include in `pattern.yml` like this:

```
...
sass: example-pattern.scss
...
```
