import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//dynamic props value

/*
class Employee extends Component{

    state={
        name:this.props.name
    }
    render(){
        return <>
            <h1>hello</h1>
            <h1>how are you {this.state.name}</h1>
            <h1>i am fine</h1>
        </>
    }
}
*/
//with constructor

/*
class Employee extends Component{
    constructor(props){
//super is a must defined in parent constructor
        super(props);
        this.state={
            name:this.props.name,
            count:this.props.count
        }//bind is use as the output will be changed not append 
        this.clickme=this.clickme.bind(this)
    }
clickme(){
    let count = this.state.count
    this.setState({count: ++count})
}
    render(){
        return <>
            <h1>hello</h1>
            <h1>how are you {this.state.name}</h1>
            <h1>total click: {this.state.count}</h1>
            <button onClick={this.clickme}>clickme</button>
        </>
    }
}
*/
// without binding


class Employee extends Component{
    constructor(props){
//super is a must defined in parent constructor
        super(props);
        this.state={
            name:this.props.name,
            count:this.props.count
        }//bind is use as the output will be changed not append 
        //this.clickme=this.clickme.bind(this)
    }// arrow function automatically bind
clickme=()=>{
    let count = this.state.count
    this.setState({count: ++count})
}

    render(){
        return <>
            <h1>hello</h1>
            <h1>how are you {this.state.name}</h1>
            <h1>total click: {this.state.count}</h1>
            <button onClick={this.clickme}>clickme</button>
        </>
    }
}


ReactDOM.render(<Employee name="billa" count="0"/>,
    document.getElementById("root"))