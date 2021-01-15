import React, {Component} from 'react'
import ReactDOM from 'react-dom'


//in jsx expression anything bw opening and closing tag is special props
//and caan be accesed using props.children

class Employee extends Component{

    render(){
        return <>
                <h1>hello</h1>
                <h1>name:{this.props.name}</h1>
                <p>{this.props.children}</p>
        </>
    }
}

ReactDOM.render(<Employee name="prince">Stay away from me</Employee>, document.getElementById("root"))