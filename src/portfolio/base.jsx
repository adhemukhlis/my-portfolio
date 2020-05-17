import React, {Component} from 'react';
import CoverPage from "./coverpage"
import AboutPage from "./aboutme"
import Work from "./work";
import Skills from "./skills";
import {Footer} from "./footer";
const url = "https://raw.githubusercontent.com/adhemukhlis/my-portfolio/master/properties.json"
class Base extends Component {
    componentDidMount(){  
        fetch(url)
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return
            }
            response
                .json()
                .then(function (data) {
                    console.log(data.name)
                })
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err)
        })
    }
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