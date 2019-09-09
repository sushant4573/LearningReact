import React from 'react'

export default function FuncClick() {
    function clickHandler()
    {
        console.log("Fuction Button CLicked")
    }
    return (
        <div>
            <button onClick={ clickHandler}>Click</button>
        </div>
    )
}
