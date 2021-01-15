import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Second from "./sec"
//order or flow
//constructor(props)
//static getDerivedStateFromProps()
//ShouldComponentUpdate()
//render()
//getSnapShotBeforeUpdate()
//componentDidUpdate()
//for unmounting
/*log.js:24 [HMR] Waiting for update signal from WDS...
index.js:21 constructor calling
index.js:35 getDerivedStatesFromProps
index.js:41 render
sec.js:21 prince constructor calling
sec.js:29 prince getDerivedStatesFromProps
sec.js:35 prince render
sec.js:25 prince componentdid mount
index.js:35 getDerivedStatesFromProps
index.js:41 render
sec.js:29 prince getDerivedStatesFromProps
sec.js:35 prince render
index.js:35 getDerivedStatesFromProps
index.js:41 render
sec.js:29 prince getDerivedStatesFromProps
sec.js:35
*/

class Employe extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"amit",
            id:7
        }
        console.log("constructor calling")
    }
    componentWillUnmount(){
        console.log(" main component unmount")
    }


    UNSAFE_componentWillMount(){
        console.log("main comp will mount")
    }
    render(){
        console.log("render")
        return<>

        <h1>hello:{this.state.name}</h1>
        <h1>id:{this.state.id}</h1>
      
        </>
    }
}

ReactDOM.render(<Employe/>, document.getElementById("root"))
ReactDOM.render(<Second />, document.getElementById("secroot"))
ReactDOM.unmountComponentAtNode(document.getElementById("root"))