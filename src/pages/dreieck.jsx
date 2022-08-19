import { useState } from "react";
import Inputfield from "../components/Inputfield";
import { ShapesHeader } from "../components/ShapesHeader";
import { ShapesBody } from "../components/ShapesBody";

export const Dreieck = (props) => {

      // states
const [side, setSide] = useState(undefined);
const [circumference, setCircumference] = useState(undefined);
const [area, setArea] = useState(undefined);
const [side2, setSide2] = useState(undefined);
const [side3, setSide3] = useState(undefined);
const [side4, setSide4] = useState(undefined);

    // onclick
const onClick = () => {
    const hasA = side !== undefined && side !== '';
    const hasB = side2 !== undefined && side2 !== '';
    const hasC = side3 !== undefined && side3 !== '';
    const hasH = side4 !== undefined && side4 !== '';
    const hasU = circumference !== undefined && circumference !== '';
    const hasArea = area !== undefined && area !== '';

    if (hasA && hasB && hasC && hasH){
        setCircumference(side+side2+side3);
        setArea((1/2)*side3*side4);
    }
   
    if (hasA && hasU){
        setSide2((circumference-2*side)/2);
        setArea(side*((circumference-2*side)/2));
    }
    if (hasB && hasU){
        setSide((circumference-2*side2)/2);
        setArea(side2*((circumference-2*side2)/2));
    }
    if (hasA && hasArea){
        setSide2(area/side);
        setCircumference((2*side)+(2*(area/side)));
    }
    if (hasB && hasArea){
        setSide(area/side2);
        setCircumference((2*side2)+(2*(area/side2)));
    }
    
    console.error("a oder b angeben");
    






    console.log({side}, {circumference}, {area})
    if(hasA || hasB){
        console.log("side");
        setCircumference((2*side)+(2*side2));
        setArea(side*side2);
        return;
    }

    if(circumference !== undefined && circumference !== '' && (side !== undefined || side2 !== undefined)){
        console.log("circumference");
        setSide((circumference/2)-side2);
        setArea((circumference/4)*(circumference/4));
        return;
    }

    if(area !== undefined && area !== ''){
        console.log("area");
        const s = Math.sqrt(area);
        setSide(s);
        setCircumference(s*4);
        return;
    }
}


const handleChangeA = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}
const handleChangeB = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}
const handleChangeC = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}
const handleChangeH = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}
const handleChangeU = (event) => {
    setCircumference(event.target.value)
}

const handleChangeF = (event) => {
    setArea(event.target.value)
}


    
        return (
            <div>
                <ShapesHeader
                    imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/220px-Regular_triangle.svg.png"
                    alt="dreieck"
                    dimension="2D"
                    navigate={props.navigate}
            />
                
                <ShapesBody imgsrc="https://www.biancahoegel.de/geometrie/ebene/bilder/Right_triangle_abchpq.svg.png" alt="dreieckbeispiel" >
                    <Inputfield label="a = " key="quadratInputfields-0" id="nrinputqa" onChange={handleChangeA} value={side} placeholder="" type="number"/>
                    <Inputfield label="b = " key="quadratInputfields-0" id="nrinputqb" onChange={handleChangeB} value={side2} placeholder="" type="number"/>
                    <Inputfield label="c = " key="quadratInputfields-0" id="nrinputqc" onChange={handleChangeC} value={side3} placeholder="" type="number"/>
                    <Inputfield label="h = " key="quadratInputfields-0" id="nrinputqh" onChange={handleChangeH} value={side4} placeholder="" type="number"/>
                    <Inputfield label="U = " key="quadratInputfields-0" id="nrinputqu" onChange={handleChangeU} value={circumference} placeholder="" type="number"/>
                    <Inputfield label="R = " key="quadratInputfields-0" id="nrinputqf" onChange={handleChangeF} value={area} placeholder="" type="number"/>
                    <button onClick={onClick}>Rechnen</button>
                </ShapesBody>      
            </div>
        
    )
}