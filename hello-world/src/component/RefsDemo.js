import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
            this.inputRef = React.createRef()
            this.cbRef = null
            this.setCBRef = (element)=>{
                this.cbRef = element
            }
         
     }
     clickHandler = () => {
         alert(this.cbRef.value)
     }
     componentDidMount()
     {
         if(this.cbRef)
         {
             this.cbRef.focus()
         }
        //  this.inputRef.current.focus()
        //  console.log(this.inputRef)
     }
    render() {
        return (
            <div>
                <input type='text' placeholder='Enter the Username' ref = {this.inputRef}/>
                <input type='text' placeholder='Enter whatever you want' ref={this.setCBRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
