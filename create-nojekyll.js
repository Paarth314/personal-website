import fs from 'fs'
import path from 'path'

const nojekyllFilePath = path.join('./build', '.nojekyll')

fs.writeFileSync(nojekyllFilePath, '', 'utf-8')

console.log('.nojekyll file created successfully.')
