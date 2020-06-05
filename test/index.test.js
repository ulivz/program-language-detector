import { detect, LANG } from '../src/index'

test('main', () => {
  expect(detect('const egoist = new Object();')).toBe(LANG.JavaScript)

  expect(detect('#app { font-size: 20px; }')).toBe(LANG.CSS)

  expect(detect('<div id="app"></div>')).toBe(LANG.HTML)

  expect(detect('List<String> things = new ArrayList<>();')).toBe(LANG.Java)
})

test('repeating call', () => {
  expect(detect('<div id="app"></div>')).toBe(LANG.HTML)
  expect(detect('<div id="app"></div>')).toBe(LANG.HTML)
})
