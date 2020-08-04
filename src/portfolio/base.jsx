import React, {Component} from 'react';
import Cover from "./cover"
import About from "./aboutme"
import Work from "./work";
import Skills from "./skills";
import {Footer} from "./footer";
import {DisableReactDevTools} from "../lib/devtool-killer"
import {accessValidation} from "../global-state/controller"
import {loading_container} from './style'
class Base extends Component {
    state = {
        loaded: false
    }
    componentDidMount() {
        DisableReactDevTools(true)
        accessValidation((valid) => {
            this.setState({loaded: valid})
        })
    }
    render() {
        const {loaded} = this.state
        return (loaded
            ? <div>
                    <Cover/>
                    <About/>
                    <Work/>
                    <Skills/>
                    <Footer/>
                </div>
            : <div
                style={loading_container}>
                <h2 style={{letterSpacing:'0.4vw'}}>Loading..</h2>
            </div>)
    }
}
export default Base;