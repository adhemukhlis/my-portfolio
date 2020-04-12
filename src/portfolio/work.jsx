import React, {Component} from 'react';
import Card from "./card";
import {
    Container_workpage,
    $Title,
 
    TitleDark,
    BLACK4,
    GridContainer
} from "./style";
import {IcSolidLightbulbOn} from "./react-icon-svg";
class Work extends Component {
    render() {
        const portfolio = [
            {
                imgUrl: require('./img/goniki.png'),
                dateTime: '08 Agustus 2018',
                title: 'Goniki: Fasilitas Umum Map Based',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam laudantiu' +
                        'm, cumque sed eius alias sint veritatis corporis necessitatibus, esse modi dolor' +
                        'em vero et? Quis ad, corporis totam ullam culpa!'
            }, {
                imgUrl: require('./img/cubar.png'),
                dateTime: '05 February 2019',
                title: 'Cubar: Bermain Game Bareng Temen',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam laudantiu' +
                        'm, cumque sed eius alias sint veritatis corporis necessitatibus, esse modi dolor' +
                        'em vero et? Quis ad, corporis totam ullam culpa!'
            }, {
                imgUrl: require('./img/goniki.png'),
                dateTime: '08 Agustus 2018',
                title: 'Goniki: Fasilitas Umum Map Based',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam laudantiu' +
                        'm, cumque sed eius alias sint veritatis corporis necessitatibus, esse modi dolor' +
                        'em vero et? Quis ad, corporis totam ullam culpa!'
            }, {
                imgUrl: require('./img/cubar.png'),
                dateTime: '05 February 2019',
                title: 'Cubar: Bermain Game Bareng Temen',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam laudantiu' +
                        'm, cumque sed eius alias sint veritatis corporis necessitatibus, esse modi dolor' +
                        'em vero et? Quis ad, corporis totam ullam culpa!'
            }, {
                imgUrl: require('./img/goniki.png'),
                dateTime: '08 Agustus 2018',
                title: 'Goniki: Fasilitas Umum Map Based',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam laudantiu' +
                        'm, cumque sed eius alias sint veritatis corporis necessitatibus, esse modi dolor' +
                        'em vero et? Quis ad, corporis totam ullam culpa!'
            }, {
                imgUrl: require('./img/cubar.png'),
                dateTime: '05 February 2019',
                title: 'Cubar: Bermain Game Bareng Temen',
                caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam laudantiu' +
                        'm, cumque sed eius alias sint veritatis corporis necessitatibus, esse modi dolor' +
                        'em vero et? Quis ad, corporis totam ullam culpa!'
            }
        ];
        return (
            <div style={Container_workpage}>
                <div style={$Title}><IcSolidLightbulbOn
                    style={{
                marginRight: '2vw'
            }}
                    height="6vh"
                    fill={BLACK4}/>
                    <h1 style={TitleDark}>Karya</h1>
                </div>
                <div style={GridContainer}>{portfolio.length !== 0 && portfolio.map((data, i) => (<Card key={i} data={data}/>))}</div>
            </div>
        )
    }
}
export default Work;