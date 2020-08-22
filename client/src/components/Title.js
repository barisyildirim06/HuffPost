import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        const title = this.props.title
        const color = this.props.color || "blue";
        return (
            <div >
                    <span style={{ color: color }}>/ </span>
                            {title.toUpperCase()}
                            <span style={{ color: color }}> /</span>
            </div>
        )
    }
}
