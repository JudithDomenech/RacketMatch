import './DeleteCommentButton.sass'
import { deleteComment } from '../../../logic'
import { CancelIcon } from '../..'
import { Button } from '.'

export function DeleteCommentButton({ commentId, onDeleted }) {


    const handlerDeleteComment = async () => {
        try {
            await deleteComment(sessionStorage.token, commentId) 
            alert('Comentario Eliminado')  
            onDeleted()          
        } catch (error) {
            alert(error.message)
        }
    }

    return <>
       <Button onClick={handlerDeleteComment}>
            <CancelIcon />
       </Button> 
        
    </>
}
