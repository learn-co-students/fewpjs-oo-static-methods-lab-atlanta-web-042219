class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/\W/g, '')
  }

  static titlized(str) {
    let noCap = ["a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = str.split(" ")
    
     return words.map(w => { 
      let nope = noCap.find(n => n === w) 
      if (nope === undefined || nope === null) {
        return this.capitalize(w)
      } else {
        return w
      }
    }).join(" ")
  }
}


