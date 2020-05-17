import React, {Component} from 'react';
import CoverPage from "./coverpage"
import AboutPage from "./aboutme"
import Work from "./work";
import Skills from "./skills";
import {Footer} from "./footer";
import {getData} from "../func"
class Base extends Component {
    state = {
        loaded: false,
        userdata: null
    }

    setData = (data) => {
        this.setState({loaded: true, userdata: data})
    }
    componentDidMount() {
        console.log(window.ClientID)
        console.log(window.location)
        getData((data) => this.setData(data))
    }
    render() {
        const {loaded, userdata} = this.state
        return (loaded
            ? <div>
                    <CoverPage userdata={userdata}/>
                    <AboutPage userdata={userdata}/>
                    <Work/>
                    <Skills/>
                    <Footer/>
                </div>
            : null)
    }
}
export default Base;