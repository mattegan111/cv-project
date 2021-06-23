import React, { Component } from "react"
import Editor from './Editor/editor.js'
import Preview from './Preview/preview.js'

export default class main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Editor title="Editor" />
                <Preview title="Preview" />
            </div>
        )
    }
}