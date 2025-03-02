import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const hintsDirectory = path.join(process.cwd(), 'data/hints')

export function getHintsData() {
  // Get file names under /hints
  const fileNames = fs.readdirSync(hintsDirectory)
  const allHintsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(hintsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  return allHintsData
  // // Sort hints by date
  // return allHintsData.sort(({ date: a }, { date: b }) => {
  //   if (a < b) {
  //     return 1
  //   } else if (a > b) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // })
}
