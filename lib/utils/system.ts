import { readFileSync } from 'fs'
import path from 'path'

export function getFileContent(relativePath: string, fileName: string) {
  const file = path.join(process.cwd(), relativePath, fileName)
  return readFileSync(file, 'utf8')
}
