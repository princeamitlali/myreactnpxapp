import React, {Component} from 'react'
//import ReactDOM from 'react-dom'
//method life cycle only works on class component
//there are four phase
//constructor
//get derived states from props -->must be static and return
//render
//componentDidMount()---> most important

//it follows same order of calling as mentioned above

class Sec extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"prince",
            id:this.props.id
        }
        console.log("prince constructor calling")
    }
    UNSAFE_componentWillMount(){
        console.log("sec comp will mount")
    }
    componentWillUnmount(){
        console.log(" sec component unmount")
    }
    render(){
        console.log("prince render")
        return<>

        <h1>hello:{this.state.name}</h1>
        
        </>
    }
}

//ReactDOM.render(<Sec/>, document.getElementById("root"))

export default Sec;