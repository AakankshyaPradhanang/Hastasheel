var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: String,
	password: String,
	createdDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('users',userSchema)