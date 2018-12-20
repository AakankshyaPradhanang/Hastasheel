var mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
	title: String,
	content: String,
	createdDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Notes',noteSchema)