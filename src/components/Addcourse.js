import React , {Component} from 'react'


class AddCourse extends Component
{
    state = {name:''}

    handelChange = (e) => {
        this.setState(
            {name : e.target.value}
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name === '')
        alert('please add your course')
        else{
            this.props.addCourse(this.state);
            this.setState({name : ''});
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='your Course ...' onChange={this.handelChange} value={this.state.name} />
                    <button type='submit'>Add Course</button>
                </form>
            </div>
        )
    }
}

export default AddCourse;