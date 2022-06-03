import './Feedback.sass'

export function Feedback({ message, level = 'info', version = 'default' }) {
    return <span className={`feedback feedback--${level} feedback--${version}`}>{message}</span>
}
 