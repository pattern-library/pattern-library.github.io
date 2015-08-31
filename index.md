---
layout: default
---

# Pattern Library

## What is this?

The pattern library system is a way to organize your html patterns with their supporting files (css/javascript), package them into categories, and include dummy data.

## Pattern Library Links

* [Base Pattern Library](https://github.com/pattern-library/pattern-library)
* [Pattern Library Yeoman Generator](https://github.com/scottnath/generator-pattern-library)

## Single-Pattern Folder Contents

These are the files which *may* be in a single HTML pattern's directory. This imaginary pattern is called *example-pattern*. 

The *only* required files are `pattern.yml` and a pattern file (in any templating language or plain html.)

* ![folder](/images/folder-open.gif) example-pattern/
  * ![file](/images/document.png) pattern.yml
  * ![file](/images/document.png) example-pattern.twig
  * ![file](/images/document.png) example-pattern.js
  * ![file](/images/document.png) README.md
  * ![file](/images/document.png) example-pattern.scss


## Pattern YAML File (`pattern.yml`, required)

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

## Template File (`example-pattern.twig`, required)

Each pattern folder *must* contain a `[pattern-name].[template-lang]` (example-pattern.twig) file. These files should *not* contain actual text, data, images, etc. Instead, patterns use curly-braces as data placeholders. Even if they are .html files.

## Other possible included files

### README.md

Should include usage examples

### PATTERN.js

A pattern's javascript file. Include in `pattern.yml` like this:

```
...
script: example-pattern.js
...
```

### PATTERN.css

A CSS file. Include in `pattern.yml` like this:

```
...
css: example-pattern.css
...
```

### PATTERN.scss

A SASS file. **NOTE:** do not prefix this file with an underscore or it will be ignored when import-conversion happens. Include in `pattern.yml` like this:

```
...
sass: example-pattern.scss
...
```
