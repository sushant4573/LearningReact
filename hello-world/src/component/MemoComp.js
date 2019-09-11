import React from 'react'

function MemoComp({name}) {
    console.log('Rendering MemoCopmonent')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
