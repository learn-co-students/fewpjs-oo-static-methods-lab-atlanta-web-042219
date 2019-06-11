class Formatter {

	static capitalize(str) {
		return str[0].toUpperCase() + str.slice(1)
	}

	// \w = [^0-9a-zA-Z_]
	static sanitize(str) {
		return str.replace(/[^\w '-]/g, '')
	}

	static titleize(str) {
    const dont_change = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let title = [Formatter.capitalize(str.split(' ')[0])]
    str.split(' ').slice(1).forEach(word => {
    	dont_change.includes(word) ? title.push(word) : title.push(Formatter.capitalize(word))
    })
    return title.join(' ')
	}
}
