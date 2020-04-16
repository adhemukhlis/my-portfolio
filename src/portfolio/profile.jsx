import React, {Component} from 'react';
import {Element, scroller} from 'react-scroll';
import DeviceDetector from "device-detector-js";
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
    componentDidMount() {
        // console.log("sending");
        const accountSid = 'AC0de56292223981ed5bbead8484390abb';
        const authToken = '73cbf5ca4598bc8def8692992493e539';
        const client = require('twilio')(accountSid, authToken);
        const mydate = new Date();
        const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ][mydate.getMonth()];
        const str = mydate.getDay()+' '+month + ' ' + mydate.getFullYear();
        const clientDevice = new DeviceDetector().parse(navigator.userAgent)
        const contentBody = "🌐 adhemukhlis.netlify.com"+"\ndate\t\t\t: "+str+"\ndevice\t\t: " + clientDevice.device.type + "\nbrand\t\t: " + clientDevice.device.brand + "\nOS\t\t\t\t: " + clientDevice.os.name + "\nbrowser\t: " + clientDevice.client.name
        client.messages.create({body: '🌐‎\n\n\n\n〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️\n'+contentBody, from: '+17067444276', to: '+6285900498969'}).then(message => console.log(message.sid)).done();
    }
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