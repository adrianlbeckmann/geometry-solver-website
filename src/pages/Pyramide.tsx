import React, { useState } from "react";
import { Inputfield } from "../components/Inputfield";
import { ShapesHeader } from "../components/ShapesHeader";
import { ShapesBody } from "../components/ShapesBody";
import { Navigatable } from "./Main";

export const Pyramide:React.FC<Navigatable> = (props) => {

    // states
    const [side, setSide] = useState<number | undefined>(undefined);
    const [surface, setSurface] = useState<number | undefined>(undefined);
    const [volume, setVolume] = useState<number | undefined>(undefined);
    const [side2, setSide2] = useState<number | undefined>(undefined);
    const [side3, setSide3] = useState<number | undefined>(undefined);


    // onclick
    const onClick = () => {
        const hasA = side !== undefined;
        const hasHA = side2 !== undefined;
        const hasH = side3 !== undefined;
        const hasS = surface !== undefined;
        const hasV = volume !== undefined;



        if (hasA && hasHA && hasH) {
            const a = side;
            const ha = side2;
            const h = side3;
            setSurface((a * a) + 2 * a * ha);
            setVolume((1 / 3) * (a * a) * h)
        }

        if (hasA && hasS) {
            const a = side;
            const ha = surface / ((a * a) + 2 * a)
            const h = Math.sqrt(ha * ha - (1 / 2 * a * a));
            setSide2(ha);
            setSide3(h);
            setVolume((1 / 3) * (a * a) * h);
        }
        if (hasA && hasV) {
            const a = side;
            const aa = a / 2;
            const h = volume / ((1 / 3) * a * a);
            const ha = Math.sqrt((h * h) + (aa * aa));
            setSide2(ha)
            setSide3(h);
            setSurface((a * a) + 2 * a * ha);
        }

    }


    const handleChangeA = (event) => {
        console.log(event.target.value)
        setSide(event.target.value)
    }
    const handleChangeHA = (event) => {
        console.log(event.target.value)
        setSide(event.target.value)
    }
    const handleChangeH = (event) => {
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
                imgsrc="https://schulgrafik.flgrafik.de/albums/userpics/10001/Pyramide_reg_4seit~0.jpg"
                alt="pyramide"
                dimension="3D"
                navigate={props.navigate}
            />

            <ShapesBody imgsrc="https://www.online-rechner.net/assets/img/pyramide.png" >
                <Inputfield label="a = " key="quadratInputfields-0" id="nrinputqa" onChange={handleChangeA} value={side} placeholder="" type="number" />
                <Inputfield label="ha = " key="quadratInputfields-0" id="nrinputqha" onChange={handleChangeHA} value={side2} placeholder="" type="number" />
                <Inputfield label="h = " key="quadratInputfields-0" id="nrinputqh" onChange={handleChangeH} value={side3} placeholder="" type="number" />
                <Inputfield label="O = " key="quadratInputfields-0" id="nrinputqs" onChange={handleChangeS} value={surface} placeholder="" type="number" />
                <Inputfield label="V = " key="quadratInputfields-0" id="nrinputqv" onChange={handleChangeV} value={volume} placeholder="" type="number" />
                <button onClick={onClick}>Rechnen</button>
            </ShapesBody>
        </div>

    )
}