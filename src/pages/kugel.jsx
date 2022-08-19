import { useState } from "react"
import Inputfield from "../components/Inputfield";
import { ShapesHeader } from "../components/ShapesHeader";

export const Kugel = (props) => {
    
    // states
const [radius, setRadius] = useState(undefined);
const [surface, setSurface] = useState(undefined);
const [volume, setVolume] = useState(undefined);

    // onclick
const onClick = () => {
    console.log({radius}, {surface}, {volume})
    if(radius !== undefined && radius !== ''){
        setSurface(4*Math.PI*(radius*radius));
        setVolume((4/3)*Math.PI*(radius*radius*radius));
        return;
    }

    if(surface !== undefined && surface !== ''){
        console.log("surface");
        const r = Math.sqrt(surface/(4*Math.PI))
        setRadius(r);
        setVolume((4/3)*Math.PI*(r*r*r));
        return;
    }

    if(volume !== undefined && volume !== ''){
        const r = Math.cbrt(volume/((4/3)*Math.PI))
    
        setRadius(r);
        setSurface((4*Math.PI)*(r*r));
        return;
    }
}


const handleChangeR = (event) => {
    console.log(event.target.value)
    setRadius(event.target.value)
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
            imgsrc="https://www.mathespass.at/klasse4/bilder/kugel.jpg"
            alt="kugel"
            dimension="3D"
            navigate={props.navigate}
            />
            <CooleComponente>
                <Inputfield label="r = " key="quadratInputfields-0" id="nrinputqr" onChange={handleChangeR} value={radius} placeholder="" type="number"/>
                <Inputfield label="O = " key="quadratInputfields-0" id="nrinputqs" onChange={handleChangeS} value={surface} placeholder="" type="number"/>
                <Inputfield label="V = " key="quadratInputfields-0" id="nrinputqv" onChange={handleChangeV} value={volume} placeholder="" type="number"/>
                <button onClick={onClick}>Rechnen</button>
            </CooleComponente>
            
            
            
            
            
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                   
                    <Inputfield label="r = " key="quadratInputfields-0" id="nrinputqr" onChange={handleChangeR} value={radius} placeholder="" type="number"/>
                    <Inputfield label="O = " key="quadratInputfields-0" id="nrinputqs" onChange={handleChangeS} value={surface} placeholder="" type="number"/>
                    <Inputfield label="V = " key="quadratInputfields-0" id="nrinputqv" onChange={handleChangeV} value={volume} placeholder="" type="number"/>

                    <button onClick={onClick}>Rechnen</button>
                </div>
                <img src="https://www.online-rechner.net/assets/img/kugel.png" alt="kugelbeispiel" height={"300px"} width={"500px"} />
            </div>            
        </div>
    )
}