import React, {useReducer, useState} from 'react'

export default function UseReducer() {
    const [count, setCount] = useState(0)
    const [showText, setShowText] = useState(true)

    function onClick(){
        setCount(count + 1)
        setShowText(!showText)
    }
function ask(question){
    console.log(this.teacher, question)
}

function otherClass(){
    var myContext = {
        teacher: 'suzy'
    }

    //defines a 
    ask.call(myContext, myContext.teacher )
}

otherClass()
    return (
        <div>
            {count}
            <button onClick={onClick}>Click</button>
            {showText && 'This is text'}
        </div>
    )
}
