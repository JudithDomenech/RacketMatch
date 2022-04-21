import './Button.sass'

export function Button({ type = 'button', className='', onClick, children = 'Enviar' }) {
    

    return <>
        <button onClick={onClick} className={className} type={type}>{children}</button>
    </>
}
