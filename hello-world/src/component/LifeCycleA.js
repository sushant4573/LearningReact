import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    changeProps()
    {
        this.setState({
            name:`Bye Bye SUSHANT`
        })
    }
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'SUSHANT'
        }
        console.log('LifeCycleA Constructor')
        this.changeProps = this.changeProps.bind(this)
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
            console.log('LifeCycleA ComponentDidmount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return false
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null

    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeProps}>Click To Change Props Stage</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
