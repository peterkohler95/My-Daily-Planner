import React, { Component } from 'react'
import Schedule from '../Schedule';
import Todos from '../Todos'
import Goals from '../Goals'
import Thoughts from '../Thoughts'


class Dashboard extends Component {
    render() {
        //console.log(this.props)
        return (

            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <Schedule />
                    </div>
                    <div className="col s12 m6">
                        <div className="row">
                            <Todos />
                        </div>
                        <div className="row">
                            <Goals />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Thoughts />
                </div>
            </div>

        )
    }
}

export default Dashboard