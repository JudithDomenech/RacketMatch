const { models: { User } } = require('data')
const { validators: { validateId, validateEmail, validateString } } = require('commons')


function updateUser(userId, name, email) {

	validateId(userId, 'userId')
	validateString(name, 'name')
	validateEmail(email)

	return User.updateOne({ _id: userId }, { name, email })
	.then(result => {
		
		if (result.matchedCount === 0) throw new Error(`user with id ${userId} does not exist`)
		if (result.modifiedCount === 0) throw new Error(`user not modified`)
	})
}

module.exports = updateUser