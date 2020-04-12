import React, {Component} from 'react';
import {$SocialNetwork, BLACK4} from "./style";
import posed from 'react-pose';
import {ConfigBoxPosed} from "./config";
import {IcBrandGithub, IcBrandInstagram, IcBrandFacebook, IcLightEnvelope} from "./react-icon-svg";
class Social extends Component {
    render() {
        const Box = posed.div(ConfigBoxPosed);
        const {data} = this.props;
        return (
            <div style={$SocialNetwork}>
                <a
                    style={{
                    margin: '2vw'
                }}
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Box><IcBrandGithub fill={BLACK4} height="8vh"/></Box>
                </a>
                <a
                    style={{
                    margin: '2vw'
                }}
                    href={data.instagram}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Box><IcBrandInstagram fill={BLACK4} height="8vh"/></Box>
                </a>
                <a
                    style={{
                    margin: '2vw'
                }}
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Box><IcBrandFacebook fill={BLACK4} height="8vh"/></Box>
                </a>
                <a
                    style={{
                    margin: '2vw'
                }}
                    href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + data.email + "&su=from%20Website"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Box><IcLightEnvelope fill={BLACK4} height="8vh"/></Box>
                </a>
            </div>
        )
    }
}
export default Social;