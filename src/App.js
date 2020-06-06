import React, { Component } from 'react';
import './App.css';
import AddCourse from './components/Addcourse';
import CourseDetails from './components/Coursedetails';


class App extends Component {
  state = {
    courses : [
    {name : 'React.js'},
    {name : 'Angular'},
    {name : 'Dart'}
  ]}

  //Add Course
  addCourse = (newCourse) => {
    let {courses} = this.state;
    courses.push(newCourse);
    this.setState({name : newCourse.name});
  }

  //Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1)
    this.setState({courses})
  }

  //Edit Course
  editCourse = (index , new_value) => {
    let courses = this.state.courses;
    let editCourse = courses[index];
    editCourse.name = new_value;
    this.setState({
      courses
    })
  }

  render(){
    let {courses} = this.state
    let coursesNumber = courses.length 
    let courseName = coursesNumber ? courses.map((course,index) => {
      return ( <CourseDetails courseData={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>)
    }) : <center><h2>Please Add your Course </h2></center>
    

  return (
    <div className="App">
      <h1>Add Course</h1>
      <AddCourse addCourse={this.addCourse}/>
      <ul>{courseName}</ul>
    </div>
  );
}}

export default App;
