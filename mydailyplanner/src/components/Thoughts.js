import React, { Component } from 'react'

class Thoughts extends Component {
    state = {
        userInput: '',
        userThoughts: ''

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
            userThoughts: this.state.userInput
        })
    }

    render() {

        return (
            <div className="dashboard container">

                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Thoughts</h5>
                    <p>{this.state.userThoughts}</p>

                    <textarea
                        onChange={this.handleChange}
                        value={this.state.userInput}
                        placeholder="What's on your mind?" />



                    <div className="input-field">
                        <button className="btn pink lighten-1 depth-0">Add</button>
                    </div>
                </form>

            </div>
        )
    }
}







export default Thoughts

