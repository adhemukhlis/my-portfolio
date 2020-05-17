import React, {Component} from 'react';
import CoverPage from "./coverpage"
import AboutPage from "./aboutme"
import Work from "./work";
import Skills from "./skills";
import {Footer} from "./footer";
import {rootRef} from "../_firebase/firebaseRef"
class Base extends Component {
    state = {
        loaded: false,
        userdata: null
    }
    setData = (data) => {
        this.setState({loaded: true, userdata: data})
    }
    componentDidMount() {
        rootRef
            .child("accesskey")
            .child(window.ClientID)
            .once('value', key => {
                if (key.exists()) {
                    rootRef
                        .child("user")
                        .child(key.val().username)
                        .once('value', user => {
                            if (user.exists() && window.location.href === user.val().website_url) {
                                rootRef
                                    .child("user_contact")
                                    .child(user.val().username)
                                    .once('value', contact => {
                                        this.setData({
                                            "fullname": user
                                                .val()
                                                .fullname,
                                            "job": user
                                                .val()
                                                .job,
                                            "bio": user
                                                .val()
                                                .bio,
                                            "contact": Object
                                                .values(contact.val())
                                                .map(e => {
                                                    return e
                                                })
                                        })
                                    })

                            } else {
                                console.log("denied")
                            }
                        })
                } else {
                    console.log("denied")
                }
            })
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
            : <div style={{display:'flex', width:'100vw', height:'100vh', alignItems:'center', justifyContent:'center'}}><h2>mohon tunggu..</h2></div>)
    }
}
export default Base;