import React, {Component} from 'react';
import CoverPage from "./coverpage"
import AboutPage from "./aboutme"
import Work from "./work";
import Skills from "./skills";
import {Footer} from "./footer";
class Base extends Component {
    render() {
        return (
            <div>
                <CoverPage/>
                <AboutPage/>
                <Work/>
                <Skills/>
                <Footer/>
            </div>
        )
    }
}
export default Base;