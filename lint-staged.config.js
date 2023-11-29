module.exports = {
  '*.{js,jsx,ts,tsx}': [
    (filenames) => {
      const filenamesInDirectory = filenames.filter((filename) => filename.startsWith(__dirname))
      if (!filenamesInDirectory.length) return ''
      return `yarn format:js ${filenamesInDirectory.join(' ')}`
    },
  ],
}
