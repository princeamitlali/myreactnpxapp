import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Employee extends Component{

    constructor(props){
        super(props)

        this.state={
            name:this.props.name,
            id:this.props.id,
            salary:this.props.salary
        }
    }

    updateEmpRec=()=>{
        let name = this.state.name
        let id = this.state.id
        let salary = this.state.salary

        this.setState({
            name:"lali",
            id:"5",
            salary:"509090"
        })
    }


    render(){
        return <>
        <h1>hello</h1>
        <h1>Name:{this.state.name}</h1>
        <h1>of id:{this.state.id}</h1>
        <h1>get salary:{this.state.salary}</h1>
        <button onClick={this.updateEmpRec}>update info</button>
        
        </>
    }
}


ReactDOM.render(<Employee name="Amit" id="07" salary="925784"/>, document.getElementById("root"))