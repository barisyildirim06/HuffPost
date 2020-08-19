import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        const title = this.props.title
        return (
            <div >
                    <span style={{ color: "blue" }}>/ </span>
                            {title.toUpperCase()}
                            <span style={{ color: "blue" }}> /</span>
            </div>
        )
    }
}
