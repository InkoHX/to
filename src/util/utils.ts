import { URL } from 'url'

export function isValidURL (urlStr: string): boolean {
  try {
    const url = new URL(urlStr)
    const allowProtocol = ['http', 'https']

    return allowProtocol.map(p => `${p.toLowerCase()}:`).includes(url.protocol)
  } catch (_error) {
    return false
  }
}
