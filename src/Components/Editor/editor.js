import React, { Component } from "react"
import Education from './education.js'
import PersonalInformation from './personal-information.js'
import WorkExperience from './work-experience.js'

export default class editor extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Education title="education" />
                <PersonalInformation title="personal information" />
                <WorkExperience title="work experience" />
            </div>
        )
    }
}