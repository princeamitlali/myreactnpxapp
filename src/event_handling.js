//event is the activities on which js can respond
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//using function
/*
function Employee(){
    return<>
    <h1>hello </h1>
    <button onClick={clickMe}>click Me</button>
    </>
}

function clickMe(){
    alert('Hello world')
}
*/
//using class

class Employee extends Component{

    render(){
        return<>
    <h1>hello </h1>
    <button onClick={this.clickMe}>click Me</button>
    <a href="https://stackoverflow.com/questions/47928735/react-scripts-is-not-recognized-as-an-internal-or-external-command" onClick={this.clickMe}>stack overflow</a>
    </>
    }
    clickMe(e){
        //by using prevent default redirect will not happens
        e.preventDefault()
        alert('redirecting you')
    }
}





ReactDOM.render(<Employee name="billa" count="0"/>,
    document.getElementById("root"))

ReactDOM.render(<Employee/>,
    document.getElementById("root"))