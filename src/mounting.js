import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Second from "./sec"
//order of accesing
/*
index.js:20 constructor calling
index.js:28 getDerivedStatesFromProps
index.js:34 render
sec.js:20 prince constructor calling
sec.js:28 prince getDerivedStatesFromProps
sec.js:34 prince render
sec.js:24 prince componentdid mount
index.js:24
*/
//there are four phase
//constructor
//get derived states from props -->must be static and return
//render
//componentDidMount()---> most important

//it follows same order of calling as mentioned above

class Employe extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"prince"
        }
        console.log("constructor calling")
    }

    componentDidMount(){
        console.log("componentdid mount")
    }

    static getDerivedStateFromProps(prop,state){
        console.log("getDerivedStatesFromProps")
        return null
    }


    render(){
        console.log("render")
        return<>

        <h1>hello</h1>
        <Second/>
        </>
    }
}

ReactDOM.render(<Employe/>, document.getElementById("root"))