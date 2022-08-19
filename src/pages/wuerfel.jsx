import { useState } from "react"
import Inputfield from "../components/Inputfield";
import { ShapesHeader } from "../components/ShapesHeader";
import { ShapesBody } from "../components/ShapesBody";

export const Wuerfel = (props) => {
    
    // states
const [side, setSide] = useState(undefined);
const [surface, setSurface] = useState(undefined);
const [volume, setVolume] = useState(undefined);

    // onclick
const onClick = () => {
    console.log({side}, {surface}, {volume})
    if(side !== undefined && side !== ''){
        console.log("side");
        setSurface((side*side)*6);
        setVolume(side*side*side);
        return;
    }

    if(surface !== undefined && surface !== ''){
        console.log("surface");
        setSide((surface/6)/2);
        setVolume(((surface/4)/2)*((surface/4)/2)*((surface/4)/2));
        return;
    }

    if(volume !== undefined && volume !== ''){
        console.log("volume");
        const s = Math.cbrt(volume);
        setSide(s);
        setSurface((s*s)*6);
        return;
    }
}


const handleChangeA = (event) => {
    console.log(event.target.value)
    setSide(event.target.value)
}

const handleChangeS = (event) => {
    setSurface(event.target.value)
}

const handleChangeV = (event) => {
    setVolume(event.target.value)
}

    return (
        <div>
             <ShapesHeader
            imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Simpele_kubus.svg/1200px-Simpele_kubus.svg.png"
            alt="würfel"
            dimension="3D"
            navigate={props.navigate}
            />
            <ShapesBody imgsrc="https://www.mathespass.at/klasse1/bilder/wuerfel.jpg" alt="würfelbeispiel">
                <Inputfield label="a = " key="quadratInputfields-0" id="nrinputqa" onChange={handleChangeA} value={side} placeholder="" type="number"/>
                <Inputfield label="O = " key="quadratInputfields-0" id="nrinputqm" onChange={handleChangeS} value={surface} placeholder="" type="number"/>
                <Inputfield label="V = " key="quadratInputfields-0" id="nrinputqv" onChange={handleChangeV} value={volume} placeholder="" type="number"/>
                <button onClick={onClick}>Rechnen</button>
            </ShapesBody>
        </div>
    )
}