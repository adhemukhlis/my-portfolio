import React, {Component} from 'react'
import SocialNetwork from "./social";
import {Container_aboutme, Content_aboutme, TitleLight} from "./style"
class AboutPage extends Component {
    getOld = () => {
        return 1900 + new Date().getYear() - 1998
    }
    render() {
        const {userdata} = this.props
        return (
            <div style={Container_aboutme}>
                <h1 style={TitleLight}>
                    Tentang saya
                </h1>
                <div style={Content_aboutme}>
                    {"Hai, nama saya Mukhlis Adhe Purwanto, saya berumur "}
                    {this.getOld()}
                    {" tahun. saya mahasiswa Institut Teknologi Telkom Purwokerto. saya tertarik dengan dunia Software Engineering yang memiliki motivasi dan semangat di bidang teknologi kreatif dan inovasi. saya sangat suka membangun software indah yang sederhana, ramah serta memiliki performa yang optimal, senang jika dapat bertemu dengan kamu dilain waktu."}
                </div>
                <SocialNetwork social_data={userdata.contact}/>
            </div>
        )
    }
}
export default AboutPage;