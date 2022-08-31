import React from "react";
import { NavButtonList } from "../components/NavButtonList";

export interface Navigatable {
    navigate: (to: string) => void;
}

export interface NavElement {
    key: string;
    imgsrc: string;
}
const nav2d: NavElement[] = [
    { key: "quadrat", imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/800px-Regular_quadrilateral.svg.png" },
    { key: "rechteck", imgsrc: "https://d1g9li960vagp7.cloudfront.net/wp-content/uploads/2020/12/Rechteck-Herleitung-1-1024x637.png" },
    { key: "kreis", imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLl-ZBYtiyWHL99pGVMzOdiqVqRADjdFLzPBWlJLM3V0Tm_23VkoZy5HIDZthvzohnOsU&usqp=CAU" },
    { key: "dreieck", imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png" },
]

const nav3d: NavElement[] = [
    { key: "wuerfel", imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Simpele_kubus.svg/220px-Simpele_kubus.svg.png" },
    { key: "quader", imgsrc: "http://dasprisma.weebly.com/uploads/2/7/0/0/27002005/192413_orig.png" },
    { key: "kugel", imgsrc: "https://www.mathespass.at/klasse4/bilder/kugel.jpg" },
    { key: "pyramide", imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFN1vmdu1tb9gFjz57hO5NFO4mgjqlEYRTM75K2luhMSR_0sq7hT3uvWRdW83HMHpeeFM&usqp=CAU" }
]

export interface MainProps extends Navigatable {}

export const Main: React.FC<MainProps> = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>GEOMETRY SOLVER</h1>
            <NavButtonList liste={nav2d} labelname="2D" navigate={props.navigate}/>
            <NavButtonList liste={nav3d} labelname="3D" navigate={props.navigate}/> 
        </div>
    )
}