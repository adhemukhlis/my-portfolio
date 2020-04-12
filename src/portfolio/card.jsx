import React, {Component} from 'react';
import {Button} from "./btn";
import {GridItem, GridItemImage, GridItemTitle, GridItemDateTime, GridItemContent, GridItemButton} from './style'
import {IcLightAngleDown, IcLightAngleUp} from "./react-icon-svg";
class Card extends Component {
    state = {
        show: false
    };
    render() {
        const {show} = this.state;
        return (
            <div
                style={GridItem}>
                <div>
                    <img
                        style={GridItemImage}
                        src={this.props.data.imgUrl}
                        alt="#"/>
                    <div>
                        <h3
                            style={GridItemTitle}>{this.props.data.title}</h3>
                        <h5
                            style={GridItemDateTime}>{this.props.data.dateTime}</h5>{show
                            ? (
                                <p
                                    style={GridItemContent}>{this.props.data.caption}</p>
                            )
                            : null}</div>
                    <div
                        style={GridItemButton}>
                        <Button
                            btnClick={() => this.setState({
                            show: !this.state.show
                        })}
                            title={show
                            ? <IcLightAngleUp width='2vh' fill='#777'/>
                            : <IcLightAngleDown width='2vh' fill='#777'/>}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;