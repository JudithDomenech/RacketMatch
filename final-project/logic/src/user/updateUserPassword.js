const { models: { User } } = require("data")
const { validators: { validateId, validatePassword } } = require('commons')

function updateUserPassword(userId, currPassword, newPassword ) {

  validateId(userId)
  validatePassword(currPassword)
  validatePassword(newPassword)

  if (currPassword === newPassword) throw Error('old password and new password are the same')

  return User.findById(userId).lean()
    .then((user) => {
      if(!user) throw Error(`user with id ${userId} does not exist`)
      return User.updateOne({ _id: userId, password: currPassword }, {password: newPassword })
    })
    .then(result => {
      if(result.matchedCount === 0) throw Error("Wrong credentials")
    })
}

module.exports = updateUserPassword