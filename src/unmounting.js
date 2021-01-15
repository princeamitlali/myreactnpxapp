import React, {Component} from 'react'
//import ReactDOM from 'react-dom'

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

    componentDidMount(){
        console.log("prince componentdid mount")
    }

    static getDerivedStateFromProps(prop,state){
        console.log("prince getDerivedStatesFromProps")
        console.log(prop,state)
        if(prop.id !== state.id){
            return {id:prop.id}
        }
        //console.log(prop,state)
        return null
    }

    shouldComponentUpdate(nextProp,nextState){
        console.log("secondary shold comp update calling")
        console.log(nextProp,nextState)
        //if we return false render will not call
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("secondary getSnapshotBeforeUpdate ")
        console.log(prevProps,prevState)
        return prevProps
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("component did update")
        console.log(snapShot)

    }

    render(){
        console.log("prince render")
        return<>

        <h1>hello:{this.state.name}</h1>
        <h1>id2:{this.state.id}</h1>
        </>
    }
}

//ReactDOM.render(<Sec/>, document.getElementById("root"))

export default Sec;