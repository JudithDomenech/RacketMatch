import './Select.sass'

export function Select ({type = '', name= '', options = [], placeholder = 'Selecciona una opción', required= false, defaultValue, label}) {

    return <>
        {label && <label htmlFor={name}>{label}</label>}    
        <select type={type} name={name} required={required}>
            <option hidden defaultValue = {!defaultValue? true : false}>{placeholder}</option>
            {options.map(option => <option key={option} value={option} defaultValue = {option === defaultValue? true : false}>{option}</option>)}
        </select>
    
    </>
}


