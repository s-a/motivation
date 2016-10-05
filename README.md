# motivation [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Famous Quotes for Motivation

I use this lib to output cool mativations to console in my console apps.

## Installation

```sh
$ npm i --save motivation
```

## Usage

```js
"use strict";

var motivation = require("../lib");
var m = motivation.get(); // returns a random quote
console.log(m);

/*
    yields => {
        text: 'Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.',
        author: 'Dr. APJ Kalam '
    }
*/


```
## Global installation
```sh
$ npm i -g motivation
```
## Global usage
```sh
$ marvin;
```  
![Demo][demo-image]

## License

MIT © [s-a](https://github.com/s-a)


[npm-image]: https://badge.fury.io/js/motivation.svg
[npm-url]: https://npmjs.org/package/motivation
[travis-image]: https://travis-ci.org/s-a/motivation.svg?branch=master
[travis-url]: https://travis-ci.org/s-a/motivation
[daviddm-image]: https://david-dm.org/s-a/motivation.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/s-a/motivation
[coveralls-image]: https://coveralls.io/repos/github/s-a/motivation/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/s-a/motivation
[demo-image]: /demo.png
