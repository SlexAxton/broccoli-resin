# broccoli-resin [![Build Status](https://travis-ci.org/slexaxton/broccoli-resin.svg?branch=master)](https://travis-ci.org/slexaxton/broccoli-resin)

> Broccoli wrapped [Resin](https://github.com/topcoat/resin) - A CSS Preprocessor on top of Rework

## Install

```bash
$ npm install --save broccoli-resin
```

## Usage

```js
var resin = require('broccoli-resin');
// Feel free to pull in other rework plugins
var rework = require('rework')

tree = resin(tree, {
  // Tell it what browsers to prefix for
  browsers: ['last 1 version', 'ios', 'android 4'],

  // Add a namespace to your classes to avoid collisions
  namespace: 'myapp',

  // Add a license to the final output
  license: '// Copyright 2013 and stuff \n',

  // Generate sourecemaps for debugging
  debug: true
});
```

## API

### resin(tree, opts)

Initialize a new resin with the given string of regular CSS. Optionally supply
an object with options as the last argument.

## Options

### browsers

Type: `Array`
Default: `[]`

This is a list defined at [ai/autoprefixer#browsers](https://github.com/ai/autoprefixer#browsers).

### namespace

Type: `String`
Default: `''`

This namespace prefixes your classes on output so you can avoid collisions.

### license

Type: `String`
Default: `''`

This is just a string that gets concatenated at the top of your file.

### debug

Type: `Boolean`
Default: `False`

This enables sourcemap support.

## License

MIT © [Alex Sexton](https://github.com/slexaxton)

## Thanks

Heavily cargo-culted from [kevva/broccoli-rework](https://github.com/kevva/broccoli-rework)
