import '../styles/QuestionForm.css'
import {useState} from 'react'



function QuestionForm(){
    const [ inputValue, setInputValue] = useState('Posez votre question ici')

    function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    } else { 

    }
}
    

    return(
        <div>
            <textarea value={inputValue}
            onChange={(e) => checkValue(e.target.value)}
            />
        </div>
        
    )
}

export default QuestionForm

// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

// function QuestionForm(){
//     return(   <form className="form" onSubmit={handleSubmit}>
//             <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//             <button type='submit'>Entrer</button>
//     </form>)
 

// }
// export default QuestionForm