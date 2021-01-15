//event is the activities on which js can respond
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Employee extends Component{

    state={
        name:"prince",
        id:"007"
    }
//using arrow function
    clickMe=(id,e)=>{
        //by using prevent default redirect will not happens

        alert(id)
        alert(e)
    }
    //using bind
    clickMe2=(name)=>{
        //by using prevent default redirect will not happens

        alert(name)
    }


    render(){
        return<>
    <h1>hello </h1>
    <h1>Name :{this.state.name}</h1>
    <h1>id :{this.state.id}</h1>
    <button onClick={(e)=>{this.clickMe(this.state.id,e)}}>click Mearrow</button>
    <button onClick={this.clickMe2.bind(this,this.state.name)}>click Mebind</button>
    </>
    }
   
}





ReactDOM.render(<Employee name="billa" count="0"/>,
    document.getElementById("root"))

ReactDOM.render(<Employee/>,
    document.getElementById("root"))