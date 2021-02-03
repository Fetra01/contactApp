import React, { Component, Fragment } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="display-4 my-4">Nos Contacts : </h1>
                <Contact />
            </Fragment>
        )
    }
}
