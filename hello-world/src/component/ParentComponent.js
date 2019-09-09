import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    greet(childName)
    {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }
        this.greet = this.greet.bind(this)
    }
    
    render() {
        return (
            <div>
                <ChildComponent  greetHandler={this.greet}/>
            </div>
        )
    }
}

export default ParentComponent
