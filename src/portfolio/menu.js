import React from "react";
import {float_menu, float_menu_icons, float_menu_button, float_menu_icon} from "./style"
import injectSheet from 'react-jss'
import {
    IcLightAngleDown,
    IcLightAngleUp,
    IcSolidIdBadge,
    IcSolidSwords,
    IcSolidLightbulbOn,
    IcLightPlus,
    IcLightMinus
} from "./react-icon-svg";
const CaretShow = props => (
    <div className={props.float_menu_button} onClick={() => props._show()}>
        <IcLightPlus className={props.float_menu_icon} height="4vh"/>
    </div >
);
const CaretHide = props => (
    <div
        className={props.float_menu_button}
        style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    }}
        onClick={() => props._hide()}>
        <IcLightMinus className={props.float_menu_icon} height="4vh"/>
    </div >
);
const MiddleOption = props => (
    <div>
        <div className={props.float_menu_button} onClick={() => props._totarget(1)}>
            <IcSolidIdBadge className={props.float_menu_icon} height="4vh"/>
        </div>
        <div className={props.float_menu_button} onClick={() => props._totarget(2)}>
            <IcSolidLightbulbOn className={props.float_menu_icon} height="4vh"/>
        </div>
        <div className={props.float_menu_button} onClick={() => props._totarget(3)}>
            <IcSolidSwords className={props.float_menu_icon} height="4vh"/>
        </div >
    </div>
);
const Menu = props => (
    <div style={float_menu}>
        <div style={float_menu_icons}>
            <div className={props.classes.float_menu_button} onClick={() => props._prev()}>
                <IcLightAngleUp className={props.classes.float_menu_icon}/>
            </div>{props._middleState === true
                ? <MiddleOption
                        float_menu_icon={props.classes.float_menu_icon}
                        float_menu_button={props.classes.float_menu_button}
                        _totarget={props._totarget}/>
                : null} {props._middleState === true
                ? <CaretHide
                        float_menu_icon={props.classes.float_menu_icon}
                        float_menu_button={props.classes.float_menu_button}
                        _hide={props._hide}/>
                : <CaretShow
                    float_menu_icon={props.classes.float_menu_icon}
                    float_menu_button={props.classes.float_menu_button}
                    _show={props._show}/>}
            <div
                className={props.classes.float_menu_button}
                onClick={() => props._next()}
                disabled={true}>
                <IcLightAngleDown className={props.classes.float_menu_icon}/>
            </div>
        </div>
    </div>
);
export default injectSheet({float_menu_button, float_menu_icon})(Menu)