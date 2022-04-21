import { validators } from 'commons'

const { validateToken, validatePassword } = validators

function updateUserPassword(token, currPassword, newPassword, comfirmPassword) {
    validateToken(token)
    validatePassword(currPassword, 'old password')
    validatePassword(newPassword, 'new Password')
    validatePassword(comfirmPassword, 'comfirm Password')

    if (newPassword !== comfirmPassword) throw new Error('retyped password doesn\'t match password')

    return fetch('http://localhost:8080/api/users/change-password', {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currPassword, newPassword })
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                
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

export default updateUserPassword