import { validators } from 'commons'

const { validateString, validateId, validateToken } = validators

function createComment(token, racketId, text) {
    validateToken(token, 'token')
    validateId(racketId, 'racketId')
    validateString(text, 'text')

    return fetch(`http://localhost:8080/api/comments/${racketId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
        .then(res => {
            const { status } = res

            if (status === 201) {
                return
            } else if (status >= 400 && status < 500) {
                return res.json()
                    .then(payload => {
                        const { error } = payload

                        throw new Error(error)
                    })
            } else if (status >= 500) {
                throw new Error('server error')
            } else {
                throw new Error('unknown error')
            }
        })
}

export default createComment