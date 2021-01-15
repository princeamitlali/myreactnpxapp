import React, {Component} from 'react'
import ReactDOM from 'react-dom'


//mapping is used at the place of loops

class Employee extends Component{

    constructor(props){
        super(props)
        this.state={
            count : 0,
            users:["prince","amit","lali"]
        }
    }

    incrementCount=()=>{
        this.setState({
            count:this.state.count +1
        })

    }

    render(){
        return<>
        <h1>hello</h1>
        <h1>click:{this.state.count}</h1>
        <ul>
            {this.state.users.map((user,index)=>(
                <li key={index}>{user}</li>
            ))}
        </ul>
        <button onClick={this.incrementCount}>Clickme</button>

        </>
    }
}


ReactDOM.render(<Employee/>, document.getElementById("root"))