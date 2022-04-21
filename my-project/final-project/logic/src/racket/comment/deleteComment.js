const { validators: { validateId } } = require('commons')
const { models: { Comment, User } } = require('data')
const { racket } = require('data/src/schemas')

function deleteComment(userId, commentId) {
    validateId(userId, 'user id')
    validateId(commentId, 'comment id')

    return User.findById(userId).lean()
    .then(user => {
        if (!user) throw new Error(`user with id ${userId} does not exist`)
        
        return Comment.deleteOne({ _id: commentId, user: userId })
    })
    .then(result => {
        if (result.deletedCount === 0) throw new Error(`comment with id ${commentId} and user id ${userId} does not exist`)
    })
}
    
module.exports = deleteComment