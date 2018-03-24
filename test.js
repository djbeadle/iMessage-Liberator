const contacts = require('os-x-contacts')

var contacts_stream = contacts()
	.on('data', console.log)
	.on('error', console.error)
