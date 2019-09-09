import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    incCount()
    {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }
    incFive(){
        this.incCount()
        this.incCount()
        this.incCount()
        this.incCount()
        this.incCount()
    }
    render() {
        return (
            <div>
                <h1>Count {this.state.count}</h1>
                <button onClick={()=>this.incFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
