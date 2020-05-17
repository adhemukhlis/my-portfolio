import React, {Component} from 'react';
import {
    IcBrandReact,
    IcBrandPhp,
    IcBrandHtml5,
    IcBrandCss3Alt,
    IcBrandJsSquare,
    IcBrandAndroid,
    IcBrandJava,

    IcSolidShapes
} from "./react-icon-svg";
import {
    TitleDark,

    Title,
    $SkillLists,
    $ListItems,
    $SkillItemText,
    Container_skillpage
} from './style';
class Skills extends Component {
    render() {
        return (
            <div style={Container_skillpage}>
                <div style={Title}>
                    <IcSolidShapes
                        style={{
                        marginRight: '2vw'
                    }}
                        height="6vh"
                        fill="#444"/>
                    <h1 style={TitleDark}>Keahlian</h1>
                </div>

                <div style={$SkillLists}>
                    <div style={$ListItems}>
                        <IcBrandReact height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>ReactJS</p>
                    </div>
                    <div style={$ListItems}>
                        <IcBrandJsSquare height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>JavaScript</p>
                    </div>
                    <div style={$ListItems}>
                        <IcBrandAndroid height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>Android Studio</p>
                    </div>
                    <div style={$ListItems}>
                        <IcBrandPhp height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>PHP</p>
                    </div>
                    <div style={$ListItems}>
                        <IcBrandJava height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>Java</p>
                    </div>
                    <div style={$ListItems}>
                        <IcBrandHtml5 height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>HTML</p>
                    </div>
                    <div style={$ListItems}>
                        <IcBrandCss3Alt height="10vh" fill="rgba(245,245,245,1)"/>
                        <p style={$SkillItemText}>CSS</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills;