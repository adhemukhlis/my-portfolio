import React, {Component} from 'react'
import SocialNetwork from "./social";
import {Container_aboutme, Content_aboutme, TitleLight} from "./style"
import {initGlobalState, connectToState, getState} from "../global-state/global-state";
import {StringBuilder} from "../func"
initGlobalState();
class AboutPage extends Component {
    state = {
        userdata: getState("_globalUserData")
    }
    componentDidMount() {
        connectToState(["_globalUserData"], stream => this.setState({userdata: stream._globalUserData}))
    }
    render() {
        const {userdata} = this.state
        return (
            <div style={Container_aboutme}>
                <h1 style={TitleLight}>
                    Tentang saya
                </h1>
                <div style={Content_aboutme}>
                    {StringBuilder(userdata.about_me)}
                </div>
                <SocialNetwork social_data={userdata.contact}/>
            </div>
        )
    }
}
export default AboutPage;