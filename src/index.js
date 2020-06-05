/**
 *  Modified from https://github.com/ts95/lang-detector
 *  Copyright (c) 2015 Toni Sučić, The MIT License (MIT)
 */

function getLanguages() {
  return {
    JavaScript: [
      // undefined keyword
      { pattern: /undefined/g, points: 2 },
      // console.log('ayy lmao')
      { pattern: /console\.log( )*\(/, points: 2 },
      // Variable declaration
      { pattern: /(var|const|let)( )+\w+( )*=?/, points: 2 },
      // Array/Object declaration
      { pattern: /(('|").+('|")( )*|\w+):( )*[{\[]/, points: 2 },
      // === operator
      { pattern: /\===/g, points: 1 },
      // !== operator
      { pattern: /!==/g, points: 1 },
      // Function definition
      { pattern: /function\*?(( )+[\$\w]+( )*\(.*\)|( )*\(.*\))/g, points: 1 },
      // null keyword
      { pattern: /null/g, points: 1 },
      // lambda expression
      { pattern: /\(.*\)( )*=>( )*.+/, points: 1 },
      // (else )if statement
      { pattern: /(else )?if( )+\(.+\)/, points: 1 },
      // while loop
      { pattern: /while( )+\(.+\)/, points: 1 },
      // C style variable declaration.
      { pattern: /(^|\s)(char|long|int|float|double)( )+\w+( )*=?/, points: -1 },
      // pointer
      { pattern: /(\w+)( )*\*( )*\w+/, points: -1 },
      // HTML <script> tag
      { pattern: /<(\/)?script( type=('|")text\/javascript('|"))?>/, points: -50 },
      // ES6 import / export
      { pattern: /(import|export(\s+)default)\s+({\s+[\w\s,]+\s+}|\w+)\s+from\s/, points: 2 },
      // ES6 arrow function
      { pattern: /\([^\(\)]{0,}\)\s+=>(\s+{)?/, points: 3 }
      // () => {}
      // (a) => {}
      // (a, b) => {}
      // ({ a, b}) => {}
      // ([ a, b ]) => {}
    ],

    C: [
      // Primitive variable declaration.
      { pattern: /(char|long|int|float|double)( )+\w+( )*=?/, points: 2 },
      // malloc function call
      { pattern: /malloc\(.+\)/, points: 2 },
      // #include <whatever.h>
      { pattern: /#include (<|")\w+\.h(>|")/, points: 2, nearTop: true },
      // pointer
      { pattern: /(\w+)( )*\*( )*\w+/, points: 2 },
      // Variable declaration and/or initialisation.
      { pattern: /(\w+)( )+\w+(;|( )*=)/, points: 1 },
      // Array declaration.
      { pattern: /(\w+)( )+\w+\[.+\]/, points: 1 },
      // #define macro
      { pattern: /#define( )+.+/, points: 1 },
      // NULL constant
      { pattern: /NULL/, points: 1 },
      // void keyword
      { pattern: /void/g, points: 1 },
      // (else )if statement
      { pattern: /(else )?if( )*\(.+\)/, points: 1 },
      // while loop
      { pattern: /while( )+\(.+\)/, points: 1 },
      // printf function
      { pattern: /(printf|puts)( )*\(.+\)/, points: 1 },
      // new Keyword from C++
      { pattern: /new \w+/, points: -1 },
      // Single quote multicharacter string
      { pattern: /'.{2,}'/, points: -1 },
      // JS variable declaration
      { pattern: /var( )+\w+( )*=?/, points: -1 }
    ],

    'C++': [
      // Primitive variable declaration.
      { pattern: /(char|long|int|float|double)( )+\w+( )*=?/, points: 2 },
      // #include <whatever.h>
      { pattern: /#include( )*(<|")\w+(\.h)?(>|")/, points: 2, nearTop: true },
      // using namespace something
      { pattern: /using( )+namespace( )+.+( )*;/, points: 2 },
      // template declaration
      { pattern: /template( )*<.*>/, points: 2 },
      // std
      { pattern: /std::\w+/g, points: 2 },
      // cout/cin/endl
      { pattern: /(cout|cin|endl)/g, points: 2 },
      // Visibility specifiers
      { pattern: /(public|protected|private):/, points: 2 },
      // nullptr
      { pattern: /nullptr/, points: 2 },
      // new Keyword
      { pattern: /new \w+(\(.*\))?/, points: 1 },
      // #define macro
      { pattern: /#define( )+.+/, points: 1 },
      // template usage
      { pattern: /\w+<\w+>/, points: 1 },
      // class keyword
      { pattern: /class( )+\w+/, points: 1 },
      // void keyword
      { pattern: /void/g, points: 1 },
      // (else )if statement
      { pattern: /(else )?if( )*\(.+\)/, points: 1 },
      // while loop
      { pattern: /while( )+\(.+\)/, points: 1 },
      // Scope operator
      { pattern: /\w*::\w+/, points: 1 },
      // Single quote multicharacter string
      { pattern: /'.{2,}'/, points: -1 },
      // Java List/ArrayList
      { pattern: /(List<\w+>|ArrayList<\w*>( )*\(.*\))(( )+[\w]+|;)/, points: -1 }
    ],

    Python: [
      // Function definition
      { pattern: /def( )+\w+\(.*\)( )*:/, points: 2 },
      // while loop
      { pattern: /while (.+):/, points: 2 },
      // from library import something
      { pattern: /from [\w\.]+ import (\w+|\*)/, points: 2 },
      // class keyword
      { pattern: /class( )*\w+(\(( )*\w+( )*\))?( )*:/, points: 2 },
      // if keyword
      { pattern: /if( )+(.+)( )*:/, points: 2 },
      // elif keyword
      { pattern: /elif( )+(.+)( )*:/, points: 2 },
      // else keyword
      { pattern: /else:/, points: 2 },
      // for loop
      { pattern: /for (\w+|\(?\w+,( )*\w+\)?) in (.+):/, points: 2 },
      // Python variable declaration.
      { pattern: /\w+( )*=( )*\w+(?!;)(\n|$)/, points: 1 },
      // import something
      { pattern: /import ([[^\.]\w])+/, points: 1, nearTop: true },
      // print statement/function
      { pattern: /print((( )*\(.+\))|( )+.+)/, points: 1 },
      // &&/|| operators
      { pattern: /(&{2}|\|{2})/, points: -1 }
    ],

    Java: [
      // System.out.println() etc.
      { pattern: /System\.(in|out)\.\w+/, points: 2 },
      // Class variable declarations
      { pattern: /(private|protected|public)( )*\w+( )*\w+(( )*=( )*[\w])?/, points: 2 },
      // Method
      { pattern: /(private|protected|public)( )*\w+( )*[\w]+\(.+\)/, points: 2 },
      // String class
      { pattern: /(^|\s)(String)( )+[\w]+( )*=?/, points: 2 },
      // List/ArrayList
      { pattern: /(List<\w+>|ArrayList<\w*>( )*\(.*\))(( )+[\w]+|;)/, points: 2 },
      // class keyword
      { pattern: /(public( )*)?class( )*\w+/, points: 2 },
      // Array declaration.
      { pattern: /(\w+)(\[( )*\])+( )+\w+/, points: 2 },
      // final keyword
      { pattern: /final( )*\w+/, points: 2 },
      // getter & setter
      { pattern: /\w+\.(get|set)\(.+\)/, points: 2 },
      // new Keyword (Java)
      { pattern: /new [A-Z]\w*( )*\(.+\)/, points: 2 },
      // C style variable declaration.
      { pattern: /(^|\s)(char|long|int|float|double)( )+[\w]+( )*=?/, points: 1 },
      // extends/implements keywords
      { pattern: /(extends|implements)/, points: 2, nearTop: true },
      // null keyword
      { pattern: /null/g, points: 1 },
      // (else )if statement
      { pattern: /(else )?if( )*\(.+\)/, points: 1 },
      // while loop
      { pattern: /while( )+\(.+\)/, points: 1 },
      // void keyword
      { pattern: /void/g, points: 1 },
      // const
      { pattern: /const( )*\w+/, points: -1 },
      // pointer
      { pattern: /(\w+)( )*\*( )*\w+/, points: -1 },
      // Single quote multicharacter string
      { pattern: /'.{2,}'/, points: -1 },
      // C style include
      { pattern: /#include( )*(<|")\w+(\.h)?(>|")/, points: -1, nearTop: true }
    ],

    HTML: [
      { pattern: /<!DOCTYPE (html|HTML PUBLIC .+)>/, points: 2, nearTop: true },
      // Tags
      { pattern: /<[a-z0-9]+(( )*[\w]+=('|").+('|")( )*)?>.*<\/[a-z0-9]+>/g, points: 2 },
      // Properties
      { pattern: /[a-z\-]+=("|').+("|')/g, points: 2 },
      // PHP tag
      { pattern: /<\?php/, points: -50 }
    ],

    CSS: [
      // Properties
      { pattern: /[a-z\-]+:(?!:).+;/, points: 2 },
      // <style> tag from HTML
      { pattern: /<(\/)?style>/, points: -50 }
    ],

    Ruby: [
      // require/include
      { pattern: /(require|include)( )+'\w+(\.rb)?'/, points: 2, nearTop: true },
      // Function definition
      { pattern: /def( )+\w+( )*(\(.+\))?( )*\n/, points: 2 },
      // Instance variables
      { pattern: /@\w+/, points: 2 },
      // Boolean property
      { pattern: /\.\w+\?/, points: 2 },
      // puts (Ruby print)
      { pattern: /puts( )+("|').+("|')/, points: 2 },
      // Inheriting class
      { pattern: /class [A-Z]\w*( )*<( )*([A-Z]\w*(::)?)+/, points: 2 },
      // attr_accessor
      { pattern: /attr_accessor( )+(:\w+(,( )*)?)+/, points: 2 },
      // new
      { pattern: /\w+\.new( )+/, points: 2 },
      // elsif keyword
      { pattern: /elsif/, points: 2 },
      // do
      { pattern: /do( )*\|(\w+(,( )*\w+)?)+\|/, points: 2 },
      // for loop
      { pattern: /for (\w+|\(?\w+,( )*\w+\)?) in (.+)/, points: 1 },
      // nil keyword
      { pattern: /nil/, points: 1 },
      // Scope operator
      { pattern: /[A-Z]\w*::[A-Z]\w*/, points: 1 }
    ],

    Go: [
      // package something
      { pattern: /package( )+[a-z]+\n/, points: 2, nearTop: true },
      // import
      { pattern: /(import( )*\(( )*\n)|(import( )+"[a-z0-9\/\.]+")/, points: 2, nearTop: true },
      // error check
      { pattern: /if.+err( )*!=( )*nil.+{/, points: 2 },
      // Go print
      { pattern: /fmt\.Print(f|ln)?\(.*\)/, points: 2 },
      // function
      { pattern: /func(( )+\w+( )*)?\(.*\).*{/, points: 2 },
      // variable initialisation
      { pattern: /\w+( )*:=( )*.+[^;\n]/, points: 2 },
      // if/else if
      { pattern: /(}( )*else( )*)?if[^\(\)]+{/, points: 2 },
      // var/const declaration
      { pattern: /(var|const)( )+\w+( )+[\w\*]+(\n|( )*=|$)/, points: 2 },
      // public access on package
      { pattern: /[a-z]+\.[A-Z]\w*/, points: 1 },
      // nil keyword
      { pattern: /nil/, points: 1 },
      // Single quote multicharacter string
      { pattern: /'.{2,}'/, points: -1 }
    ],

    PHP: [
      // PHP tag
      { pattern: /<\?php/, points: 2 },
      // PHP style variables.
      { pattern: /\$\w+/, points: 2 },
      // use Something\Something;
      { pattern: /use( )+\w+(\\\w+)+( )*;/, points: 2, nearTop: true },
      // arrow
      { pattern: /\$\w+\->\w+/, points: 2 },
      // require/include
      { pattern: /(require|include)(_once)?( )*\(?( )*('|").+\.php('|")( )*\)?( )*;/, points: 2 },
      // echo 'something';
      { pattern: /echo( )+('|").+('|")( )*;/, points: 1 },
      // NULL constant
      { pattern: /NULL/, points: 1 },
      // new keyword
      { pattern: /new( )+((\\\w+)+|\w+)(\(.*\))?/, points: 1 },
      // Function definition
      { pattern: /function(( )+[\$\w]+\(.*\)|( )*\(.*\))/g, points: 1 },
      // (else)if statement
      { pattern: /(else)?if( )+\(.+\)/, points: 1 },
      // scope operator
      { pattern: /\w+::\w+/, points: 1 },
      // === operator
      { pattern: /\===/g, points: 1 },
      // !== operator
      { pattern: /!==/g, points: 1 },
      // C/JS style variable declaration.
      { pattern: /(^|\s)(var|char|long|int|float|double)( )+\w+( )*=?/, points: -1 }
    ],

    Unknown: []
  }
}

function getPoints(language, lineOfCode, checkers) {
  return checkers
    .map(checker => {
      if (checker.pattern.test(lineOfCode)) {
        return checker.points
      }
      return 0
    })
    .reduce((memo, num) => memo + num, 0)
}

function detect(snippet, options) {
  const LANGUAGES = getLanguages()
  const opts = Object.assign({
    heuristic: true,
    statistics: false
  }, options || {})

  let linesOfCode = snippet
    .replace(/\r\n?/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .split('\n')

  function nearTop(index) {
    if (linesOfCode.length <= 10) {
      return true
    }
    return index < linesOfCode.length / 10
  }

  if (opts.heuristic && linesOfCode.length > 500) {
    linesOfCode = linesOfCode.filter((lineOfCode, index) => {
      if (nearTop(index)) {
        return true
      }
      return index % Math.ceil(linesOfCode.length / 500) === 0
    })
  }

  const pairs = Object.keys(LANGUAGES).map(key => {
    return { language: key, checkers: LANGUAGES[key] }
  })

  const results = pairs.map(pairs => {
    const language = pairs.language
    const checkers = pairs.checkers

    if (language === 'Unknown') {
      return { language: 'Unknown', points: 1 }
    }

    const pointsList = linesOfCode.map((lineOfCode, index) => {
      if (!nearTop(index)) {
        return getPoints(language, lineOfCode, checkers.filter(checker => !checker.nearTop))
      }
      return getPoints(language, lineOfCode, checkers)
    })

    const points = pointsList.reduce((memo, num) => memo + num)

    return { language, points }
  })

  const sortedResult = results.sort((prev, next) => prev.points - next.points)
  const bestResult = sortedResult[sortedResult.length - 1]

  if (opts.statistics) {
    const statistics = {}
    results.forEach(result => {
      statistics[result.language] = result.points
    })
    return { detected: bestResult.language, statistics }
  }

  return bestResult.language
}

const languages = Object.keys(getLanguages())
const LANG = {}

languages.forEach(language => {
  LANG[language] = language
})

export { detect, languages, LANG }
