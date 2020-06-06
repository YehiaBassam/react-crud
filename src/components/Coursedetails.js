import React , {Component , Fragment } from 'react'


class CourseDetails extends Component
{
    state ={
        isEdit :false
    }

    // render Course 
    renderCourses = () => {
        return (
            <li>
                <span>{this.props.courseData.name}</span>
                <button onClick={ () => this.toggleEdit()}>Edit Course</button>
                <button onClick={ () => {this.props.deleteCourse(this.props.index)} }>Delete Course</button>
            </li>
        )
    }

    // toogle Edit
    toggleEdit = () => {
        let {isEdit} = this.state;
        this.setState({isEdit : !isEdit});
    }

    //Update Course
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.input.value == '' )
        alert ('you should enter name of edit course')
        else{
        this.props.editCourse(this.props.index , this.input.value )
        this.toggleEdit()
        }
    }


    //Form Update
    updateCourse = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref={(newValue) => {this.input = newValue}} defaultValue={this.props.courseData.name}></input>
                <button id='updateButton'>Update Course</button>
            </form>
        )
    }

    render(){
        return (
            <Fragment>
                {this.state.isEdit ? this.updateCourse() : this.renderCourses()}
            </Fragment>
        )
    }
}

export default CourseDetails;