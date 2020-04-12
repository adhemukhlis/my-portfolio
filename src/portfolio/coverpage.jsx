import React, {Component} from 'react'
import {
    Container_coverpage,
    Container_card,
    Image_card,
    Image_card_img,
    Header_card,
    Profile_card,
    Profile_card_img,
    Body_card,
    Name_card,
    Job_card,
    Bio_card
} from './style'
import injectSheet from 'react-jss'
class CoverPage extends Component {
    render() {
        const {
            Container_card,
            Image_card_img,
            Profile_card_img,
            Name_card,
            Job_card,
            Bio_card
        } = this.props.classes
        return (
            <section style={Container_coverpage}>
                <div className={Container_card}>
                    <figure style={Image_card}>
                        <img className={Image_card_img} src={require('./img/landscape.jpg')} alt="#"/>
                    </figure>
                    <div style={Header_card}>
                        <figure style={Profile_card}>
                            <img className={Profile_card_img} src={require('./img/pot.jpg')} alt="#"/>
                        </figure>
                    </div>
                    <div style={Body_card}>
                        <h3 className={Name_card}>Mukhlis Adhe Purwanto</h3>
                        <p className={Job_card}>front-end developer</p>
                        <p className={Bio_card}>
                            saya membuat antarmuka indah yang sederhana, ramah, serta memiliki performa yang
                            optimal!</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default injectSheet({
    Container_card,
    Image_card_img,
    Profile_card_img,
    Name_card,
    Job_card,
    Bio_card
})(CoverPage)