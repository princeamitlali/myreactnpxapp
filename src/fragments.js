import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//fragmentation is used to remove the requirement of <div> for printing multiple html comp
/**
 class Employee extends Component{
    render(){
        return <div>
            <h1>hello</h1>
            <h1>how are you</h1>
            <h1>i am fine</h1>
        </div>
    }
}
*/
//1st
/** 
 class Employee extends Component{
    render(){
        return <React.Fragment>
            <h1>hello</h1>
            <h1>how are you</h1>
            <h1>i am fine</h1>
        </ReactFragment>
    }
}
*/
 
//2nd
/*import React, {Component, Fragment} from 'react'
class Employee extends Component{
    render(){
        return <Fragment>
            <h1>hello</h1>
            <h1>how are you</h1>
            <h1>i am fine</h1>
        </Fragment>
    }
}
*/

//3rd

class Employee extends Component{
    render(){
        return <>
            <h1>hello</h1>
            <h1>how are you</h1>
            <h1>i am fine</h1>
        </>
    }
}
ReactDOM.render(<Employee/>,
    document.getElementById("root"))