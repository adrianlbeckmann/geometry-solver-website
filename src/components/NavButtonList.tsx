import React from "react"
import { NavElement, Navigatable } from "../pages/Main"
import { NavButton } from "./NavButton"

export interface NavButtonListProps extends Navigatable {
    liste: NavElement[];
    labelname:  string;
}
export const NavButtonList: React.FC<NavButtonListProps> = (props) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <label style={{ margin: "20px" }}>{ props.labelname }</label>
            {
                props.liste.map(({ key, imgsrc }) => <NavButton url={imgsrc} name={key} navigate={props.navigate} />)
            }
        </div>
    )
}