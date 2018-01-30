export interface LANG {
  JavaScript: string
  C: string
  'C++': string
  Python: string
  Java: string
  HTML: string
  CSS: string
  Ruby: string
  Go: string
  PHP: string
  Unknown: string
}

export function detect(snippet: string): string

export const languages: string[]

