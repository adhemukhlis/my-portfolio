import React, {Component} from 'react';
import {Element, scroller} from 'react-scroll';
import Menu from "./menu";
import {Footer} from "./footer";
// import Intro from "./intro";
import AboutPage from "./aboutme"
import CoverPage from "./coverpage"
import Skills from "./skills";
import Work from "./work";
class App extends Component {
    state = {
        section: 1,
        middleState: false
    };
    scrollToTarget = (target) => {
        scroller.scrollTo('section-' + target, {
            duration: 1500,
            delay: 0,
            smooth: 'easeInOutQuint'
        });
        this.setState({section: target})
    }
    scrollNext = () => {
        if (this.state.section !== 3) {
            this.scrollToTarget(this.state.section + 1)
        }
    }
    scrollPrev = () => {
        if (this.state.section !== 1) {
            this.scrollToTarget(this.state.section - 1)
        }
    }
    middleShow = () => {
        this.setState({middleState: true})
    }
    middleHide = () => {
        this.setState({middleState: false})
    }
    render() {
        const {middleState} = this.state;
        return (
            <div>
                <Menu
                    disabled
                    _middleState={middleState}
                    _prev={this.scrollPrev}
                    _next={this.scrollNext}
                    _show={this.middleShow}
                    _hide={this.middleHide}
                    _totarget={this.scrollToTarget}/>
                <Element name="section-1" className="element">
                    <CoverPage/>
                    <AboutPage/>
                </Element>
                <Element name="section-2" className="element">
                    <Work/>
                </Element>
                <Element name="section-3" className="element">
                    <Skills/>
                </Element>
                <Footer/>
            </div>
        )
    }
}
export default App;