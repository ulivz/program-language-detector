# program-language-detector

[![NPM version](https://img.shields.io/npm/v/program-language-detector.svg?style=flat)](https://npmjs.com/package/program-language-detector) [![NPM downloads](https://img.shields.io/npm/dm/program-language-detector.svg?style=flat)](https://npmjs.com/package/program-language-detector) [![CircleCI](https://circleci.com/gh/ULIVZ/program-language-detector/tree/master.svg?style=shield)](https://circleci.com/gh/ULIVZ/program-language-detector/tree/master)  [![codecov](https://codecov.io/gh/ULIVZ/program-language-detector/branch/master/graph/badge.svg)](https://codecov.io/gh/ULIVZ/program-language-detector)
 [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/ULIVZ/donate)

<p align="center">

__*A cross-platform lightweight programming language detector.*__ (🚀 Gzip < 2KB 🚀)

</p>

## Install

```bash
npm i program-language-detector
# or
yarn add program-language-detector
```

## Usage

```js
const { detect, languages, LANG } = require('program-language-detector')

detect('const egoist = new Object();')             // => 'JavaScript'
detect('#app { font-size: 20px; }')                // => 'CSS'
detect('<div id="app"></div>')                     // => 'Html'
detect('List<String> things = new ArrayList<>();') // => 'Java'
// ...

languages // => A list of detectable languages
LANG // => A map of detectable languages, whose key and value are both lang name
```

## Detectable languages

- JavaScript
- C
- C++
- Python
- Java
- HTML
- CSS
- Ruby
- Go
- PHP


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**program-language-detector** © [ulivz](https://github.com/ULIVZ), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by ulivz with help from contributors ([list](https://github.com/ULIVZ/program-language-detector/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ulivz](https://github.com/ULIVZ)
