import { useState, useEffect } from 'react'
import './Password.sass'
import Feedback from './Feedback'

export function Password( {name, feedback, onFocus, placeholder = '' }) {
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState('🐵')

    const [feedbackMessage, setFeedbackMessage] = useState()
    const [feedbackLevel, setFeedbackLevel] = useState('error')

    useEffect(() => {
        setFeedbackMessage(feedback)
        setFeedbackLevel('error')
    }, [feedback])

    const toggleVisibility = () => {
        if (type === 'password') {
            setType('text')
            setIcon('🙈')
        } else {
            setType('password')
            setIcon('🐵')
        }
    }

    const  onKeyUp = event =>{
        if (event.getModifierState('CapsLock')) {
            setFeedbackMessage('capslock is on')
            setFeedbackLevel('warn')
        } else {
            setFeedbackMessage()
            setFeedbackLevel('error')
        }
    }

    const onChange = event =>{
        const { target: {value} } = event

        if(value.length === 0) {
            setFeedbackMessage()
            setFeedbackLevel('error')
        }
    }

        return (
            <div className="password">
                <>
                </>
                <div className={`password__body ${feedbackMessage && 'password__body--error'}`}>
                    <input className="password__input" type={type} name={name} onFocus={onFocus} onKeyUp={onKeyUp} onChange={onChange} placeholder={placeholder} />
                    <span className="password__icon" onClick={toggleVisibility}>{icon}</span>
                </div>

                {feedbackMessage && <Feedback message={feedbackMessage} level={feedbackLevel} version="mini" />}
        </div>
    )
}
