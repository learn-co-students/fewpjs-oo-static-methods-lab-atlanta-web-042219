class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(' ')
    let arr1 = arr.map((word, index) => {
      console.log('word, index :', word, index);
      if (exceptions.includes(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase()
      } else { return Formatter.capitalize(word) }
    })
    return arr1.join(' ')
  }
}