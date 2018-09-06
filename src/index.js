crel = require('crel')

var page = crel('div',
			   crel('h1', 'Title'),
			   crel('p', 'some text'))

document.body.appendChild(page)