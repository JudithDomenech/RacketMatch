import './CommentCard.sass'
import { Button, CancelIcon } from '.'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import { DeleteCommentButton } from './elements/buttons/DeleteCommentButton'

export function CommentCard({ comment, onDeleted }) {
    const [owned, setOwned] = useState(false)

    useEffect(async () => {
        try {
            const user = await retrieveUser(sessionStorage.token)
            setOwned(user.id === comment.userId)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div className='comment-card'>
        <div className='comment-card__info'>
            <h3>{comment.user}</h3>
            <p>{comment.text}</p>
            <p>{new Date(comment.date).toLocaleDateString()}</p>
        </div>
        <div className='comment-card__delete'>
            {owned && <DeleteCommentButton commentId={comment.id} onDeleted={onDeleted} />}
        </div>

    </div>
}

