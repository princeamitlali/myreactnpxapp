import React from 'react'

import ReactDOM from 'react-dom'

import Header from './header'

import Footer from './footer'

import "./index.css"

//there are two types of components
//class component
//functional component

//work in form of function reurn the component element

//in class component it extend react component and use render
/*
function Header(){
    return <h1>Header</h1>
}
*/

/* 
ReactDOM.render(
  <div>
  <header>Prince Amit</header>
  
  <h1>Hello World</h1>
  <footer>CoptRight@knfgv</footer></div>,
  document.getElementById('root')
)
*/
/*
const Header = ()=>{
  return <h1> rHeader</h1>
}
/*
class Header extends React.Component{
  render(){
    return <h1>Header</h1>
  }
}
*/
//you can only give one value to show in render thus bind together to form a single show
//const elm = ("h1",{className:"title"},"amitabh")
/*const name ="tufgals websitr"

function display() 
{return "pradeep"
}
//anything under {} is dynamic

var title ='title'

const student={
  name:"amit"
}
const el = <h1 class={title}> {student.name}</h1>
/*
const Content = ()=>{
  return <div>
    <Header/>
    <Footer/>
  </div>
}

ReactDOM.render(
  <Content/>,
  document.getElementById('root')
)

*/
/*
function Employee (props){
  return <div>
    <h1>hello</h1>
    <h1>name:{props.name}</h1>
    <h1>number:{props.num}</h1>
  </div>
}

*/
//nesting of component

class Parent extends React.Component{

  render(){
    return <div>

       <h1>i am parent</h1>
       <h1>name:{this.props.name}</h1>
    <h1>number:{this.props.num}</h1>
       <Child/>
    </div>
  }

}

class Child extends React.Component{

  render(){
    return <div>
      <h1>i am the boss baby</h1>
    </div>
  }
}
//you can set default props value
Parent.defaultProps={
  name:"amit",
  num:"4353"
}


ReactDOM.render(
  <  Parent />,
  document.getElementById('root')
)

