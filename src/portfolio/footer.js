import React from "react";
import {$Footer, $FooterContent, $FooterIcon} from "./style";
import {IcSolidCopyright, IcSolidHeart} from "./react-icon-svg";
export const Footer = props => (
    <div style={$Footer}>
        <div style={$FooterContent}>
            <IcSolidCopyright style={$FooterIcon} height="2vh" fill="rgba(50,50,50,1)"/>{" copyright "}{1900 + new Date().getYear()}{" | built with "}
            <IcSolidHeart style={$FooterIcon} height="2vh" fill="rgba(255, 99, 71,1)"/>{" by Mukhlis Adhe Purwanto"}</div>
    </div>
);