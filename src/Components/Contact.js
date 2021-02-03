import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="card card-body mb-3 text-center">
                <h4><i className="fas fa-sort-down"></i></h4>

                <ul className="card card-body mb-3">
                    <li className="list-group-item">
                        Email:
                    </li>
                    <li className="list-group-item">
                        Tél:
                    </li>
                </ul>
            </div>
        )
    }
}
