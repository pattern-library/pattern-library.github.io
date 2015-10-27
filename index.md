---
layout: default
---

# Pattern Library

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [What is a pattern?](#what-is-a-pattern)
- [What is a pattern library?](#what-is-a-pattern-library)
  - [√ Organizes your patterns](#%E2%88%9A-organizes-your-patterns)
  - [√ Publishes your work online to GitHub Pages](#%E2%88%9A-publishes-your-work-online-to-github-pages)
  - [√ Includes tools for *designing in browser*](#%E2%88%9A-includes-tools-for-designing-in-browser)
- [GitHub Repositories](#github-repositories)
  - [Pattern Libraray Generator](#pattern-libraray-generator)
  - [Pattern Library](#pattern-library)
  - [Pattern Library Utilities](#pattern-library-utilities)
- [How to create a pattern library](#how-to-create-a-pattern-library)
- [List of Gulp tasks](#list-of-gulp-tasks)
- [Parts of a Pattern](#parts-of-a-pattern)
  - [Contents and Directory Structure](#contents-and-directory-structure)
  - [Pattern YAML File](#pattern-yaml-file)
  - [Template File](#template-file)
  - [Other Optional Included Files](#other-optional-included-files)
    - [README.md](#readmemd)
    - [PATTERN.js](#patternjs)
    - [PATTERN.css](#patterncss)
    - [PATTERN.scss](#patternscss)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## What is a pattern?

**A pattern is a reusable, functional, html-based component.**

Each pattern is packaged with:

* an HTML file (in your templating languge-of-choice)
* dummy data
* javascript
* css (in your css compiler-of-choice)

![Pattern Folder Contents](/images/folder-pattern-contents.png)

*see: [What makes up a pattern?](#what-makes-up-a-pattern)*

## What is a pattern library?

**A NodeJS storage-and-sharing solution for your *functioning* UX patterns.**

Each pattern library:

### √ Organizes your patterns

![Pattern Storage](/images/folders-patterns.png)

### √ Publishes your work online to GitHub Pages

![GitHub Pages](/images/github-pages-logo.svg)

* [What is GitHub Pages?](https://pages.github.com/)

### √ Includes tools for *designing in browser*

![Pattern Lab](/images/pattern-lab-interface.png){: .patternlab__screenshot}

* [What is Pattern Lab?](http://patternlab.io/)


## GitHub Repositories

### Pattern Libraray Generator

**Scaffolds a new pattern library**

[github.com/pattern-library/generator-pattern-library](https://github.com/pattern-library/generator-pattern-library)

  * Creates a new pattern library
  * Build using [Yeoman](http://yeoman.io)
  * Optionally creates a new html component which includes:
    * YAML-based data file
    * A pattern's markup, in html or twig
    * Optional SASS file
    * Optional JS file
    * Detailed README file

### Pattern Library

**A complete pattern library containing base html elements for styling**

[github.com/pattern-library/pattern-library](https://github.com/pattern-library/pattern-library)

  * Contains base html elements
    * [Atomic Design](http://patternlab.io/about.html) atoms/molecule levels
    * Base patterns are used to style basic html elements
  * Has full gulp functionality
  * Built with the [Pattern Library Generator](https://github.com/pattern-library/generator-pattern-library)

### Pattern Library Utilities

[github.com/pattern-library/pattern-library-utilities](https://github.com/pattern-library/pattern-library-utilities)

  * Adds gulp functionality to your pattern libraries, such as:
    * Watching files
    * Creating a server
    * Installing Pattern Lab
  * Contains javascript modules that:
    * Import patterns into Pattern Lab and other systems
    * Convert twig include paths inside twig templates
    * Convert YAML data into JSON
    * Get options for gulp tasks
  * Contains gulp tasks that can be imported into a project's gulpfile.js and used by adding configuration (see the [List of Gulp tasks](#list-of-gulp-tasks))

## How to create a pattern library

1. Install the [pattern library generator](https://github.com/pattern-library/generator-pattern-library)

    ```npm install -g generator-pattern-library```

2. Run the generator in an empty repository

    ```yo pattern-library```

    a. Ccaffolds out the pattern library structure
    b. Installs NPM dependencies
    c. Scaffolds out a global assets directory

3. Install Pattern Lab for prototyping

    ```gulp build```
  
    a. Installs Pattern Lab using composer
    b. Copies patterns and javascript into Pattern Lab ./source
    c. Copies global assets into Pattern Lab

4. Serve files and begin development

    ```gulp serve```
  
    a. Creates `<script>` tags for javascript files
    b. Creates `@import` statements for scss files
    c. Compiles scss
    d. Triggers a PHP Pattern Lab build
    e. Uses browsersync to create a server for Pattern Lab
    f. Maintains a watch on files
    g. Refreshes browser on file changes
  
## List of Gulp tasks

**note:** You can always type `gulp help` to see a list of available gulp tasks.

Notable tasks:

* `gulp build`
  * Installs Pattern Lab
  * Imports your pattern library into Pattern Lab
  * Imports from other pattern libraries
* `gulp serve`
  * Development server
  * Browser refresh on file changes

* `gulp hPages`
  * Deploys Pattern Lab's *public* directory to GitHub Pages
* `gulp glob-inject-js-all`
  * Globs all javascript files
  * Writes `<script>` tags into your html
* `gulp glob-inject-sass-all`
  * Globs all sass files
  * Writes `@import` statements into your scss
* `gulp help`
  * Lists available gulp tasks
* `gulp patternlab-build-public`
  * Triggers Pattern Lab's build system
* `gulp patternlab-clean`
  * Prepares Pattern Lab's source folder for the pattern library
* `gulp patternlab-install`
  * Installs Pattern Lab
* `gulp patterns-import-all`
  * Imports patterns from local and npm into Pattern Lab
* `gulp sass`
  * SASS file compilation
* `gulp global-assets-import-all`
  * All global asset imported into Pattern Lab
* `gulp watch`
  * watch tasks for all different types of files


## Parts of a Pattern

### Contents and Directory Structure

These are the files which *may* be in a single HTML pattern's directory. This imaginary pattern is called *example-pattern*. 

The *only* required files are `pattern.yml` and a pattern file (in any templating language or plain html.)

* ![folder](/images/folder-open.gif) example-pattern/
  * ![file](/images/document.png) pattern.yml
  * ![file](/images/document.png) example-pattern.twig
  * ![file](/images/document.png) example-pattern.js
  * ![file](/images/document.png) README.md
  * ![file](/images/document.png) example-pattern.scss


### Pattern YAML File

**`pattern.yml`, required**

Each single pattern folder *must* contain a `pattern.yml` file. 

This file contains paths to find supporting files, meta data, and dummy data to populate the pattern for testing purposes.

This example is from the [Figure Image pattern](https://github.com/pattern-library/pattern-library/tree/master/patterns/molecules/media/figure-image), which is included in the base [pattern library](https://github.com/pattern-library/pattern-library).

```
name: Figure Image
description: A `figure` element with `figcaption` and an included `img` element from /atoms/images/img/img.twig.
twig: figure-image.twig
category: molecules
subcategory: media
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

### Template File

**`example-pattern.twig`, required**

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

Can optionally be an array:

```
...
script: 
  - example-pattern.js
  - example-pattern-file2.js  
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

Can optionally be an array:

```
...
sass: 
  - example-pattern.scss
  - example-pattern-file2.scss
...
```
