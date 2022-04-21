import { validators } from 'commons'

const { validateId } = validators

function listComments(racketId) {
    validateId(racketId)

    return fetch(`http://localhost:8080/api/comments/${racketId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
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

export default listComments