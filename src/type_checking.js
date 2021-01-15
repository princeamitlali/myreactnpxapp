import React ,{Component} from 'react'

import ReactDOM from 'react-dom'

import Header from './header'

import Footer from './footer'

import "./index.css"

import PropTypes from 'prop-types'

//for typechecking using props
//install npm install --save prop-types

class Employee extends Component{

  render(){
    return <div>
       <h1>name:{this.props.name}</h1>
    <h1>number:{this.props.num}</h1>
    </div>
  }

}
 Employee.propTypes={
     
    name:PropTypes.string.isRequired,
     num:PropTypes.number.isRequired
 }



ReactDOM.render(
  <  Employee name="amit" num={9*7} />,
  document.getElementById('root')
)

