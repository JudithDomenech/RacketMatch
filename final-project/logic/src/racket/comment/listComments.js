const { models: { Comment } } = require('data')
const { validators: { validateId } } = require('commons')

function listComments(racketId) {
    validateId(racketId)

    return Comment.find({ racket: racketId }).lean().populate('user')
        .then(comments => {
            if (!comments) throw new Error(`comments with id ${comments} does exist`)

            comments.forEach(comment => {
                comment.id = comment._id.toString()

                delete comment._id
                delete comment.__v
                delete comment.racket

                comment.userId = comment.user._id.toString()
                comment.user = comment.user.name
            })

            return comments
        })
}

module.exports = listComments