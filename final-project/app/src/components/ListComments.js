import './ListComments.sass'
import { useEffect, useState } from 'react'
import { CommentCard, CreateComment } from '.'
import { listComments } from '../logic'

export function ListComments({ racketId }) {
    const [comments, setComments] = useState([])

    useEffect(async () => {
        try {
          const comments = await listComments(racketId)
            setComments(comments.reverse())
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateCommentList = async () => {
        try {
          const comments = await listComments(racketId)
            setComments(comments.reverse())
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='list-comments__container'>
       <CreateComment racketId={racketId} onCreated={updateCommentList}/>
        {!!comments.length &&
            <ul>
                {comments.map(comment =>
                    <li key={comment.id}>
                        <CommentCard comment={comment} onDeleted={updateCommentList}/>
                    </li>)}
            </ul>
        }
    </div>
}
