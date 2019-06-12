class Formatter {
  //add static methods here
  static capitalize(string){
    let firstLetter = string.slice(0,1).toUpperCase()
    return firstLetter + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[.*+!@#?^${}()|[\]\\]/g, '')
  }

  static titleize(string){
    let words = string.split(" ")
    let array = []
    let no = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < words.length; i++){
      if (i == 0){
        array.push(this.capitalize(words[i]))
      }else{
        if (no.includes(words[i])){
          array.push(words[i])
        }else{
          array.push(this.capitalize(words[i]))
        }
      }
    }
    return array.join(" ");
  }

}