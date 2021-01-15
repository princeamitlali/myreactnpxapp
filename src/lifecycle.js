//this diffrent phases through which the application goes
// there are mainly four stages
//   ^---------->  initialization --->----v
// unmounting                           mounting
//   ^-----<-----    updating     <-------v

//Mounting
// creating and inserting into DOM tree
// two function included
//componentWillMount()  invoked once before rect insert into dom
//componentDidMpount()  invoked once after rect insert into do

//Updating
//if any dynamic change comes firstly it detect the change, update change in the virtual dom load to live
//1. when recive new props froom parent
//2. via set state


//Error handling
//if any error happens during updation


//Unmounting
// process of removing component from DOM
