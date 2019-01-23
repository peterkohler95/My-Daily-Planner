import React, { Component } from 'react'

class Schedule extends Component {
    state = {
        userInput: '',
        toDoList: []

    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userInput: '',
            toDoList: [...this.state.toDoList, this.state.userInput]
        })
    }

    render() {
        const items = this.state.toDoList.map(i => <li key={Math.random()}>{i}</li>);
        return (
            <div className="dashboard container">

                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Schedule</h5>
                    <ul>
                        {items}
                    </ul>
                    <div className="input-field">
                        <label htmlFor="scheduleID">Add to Schedule</label>
                        <input type="text" id="scheduleID" value={this.state.userInput} onChange={this.handleChange} />
                    </div>


                </form>

            </div>
        )
    }
}







export default Schedule

