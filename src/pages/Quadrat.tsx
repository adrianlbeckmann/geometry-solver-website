import React, { useState } from "react"
import { Inputfieldlist }  from '../components/Inputfieldlist'
import { ShapesHeader } from "../components/ShapesHeader";
import { ShapesBody } from "../components/ShapesBody";


export const Quadrat = (props) => {
    // states
    const [side, setSide] = useState<number | undefined>(undefined);
    const [circumference, setCircumference] = useState<number | undefined>(undefined);
    const [area, setArea] = useState<number | undefined>(undefined);


    // onclick
    const onClick = () => {
        console.log({ side }, { circumference }, { area })
        if (side !== undefined) {
            console.log("side");
            setCircumference(side * 4);
            setArea(side * side);
            return;
        }

        if (circumference !== undefined) {
            console.log("circumference");
            setSide(circumference / 4);
            setArea((circumference / 4) * (circumference / 4));
            return;
        }

        if (area !== undefined) {
            console.log("area");
            const s = Math.sqrt(area);
            setSide(s);
            setCircumference(s * 4);
            return;
        }
    }


    const handleChangeA = (event) => {
        console.log(event.target.value)
        setSide(event.target.value)
    }

    const handleChangeU = (event) => {
        setCircumference(event.target.value)
    }

    const handleChangeF = (event) => {
        setArea(event.target.value)
    }

    const quadratInputfields = [
        { key: "quadratInputfields-0", id: "nrinputqa", onChange: handleChangeA, value: side, placeholder: "", type: "number", label: "a = " },
        { key: "quadratInputfields-0", id: "nrinputqu", onChange: handleChangeU, value: circumference, placeholder: "", type: "number", label: "U = " },
        { key: "quadratInputfields-0", id: "nrinputqf", onChange: handleChangeF, value: area, placeholder: "", type: "number", label: "A = " },
    ]

    return (
        <div>
            <ShapesHeader
                imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/800px-Regular_quadrilateral.svg.png"
                alt="quadrat"
                dimension="2D"
                navigate={props.navigate}
            />
            <ShapesBody imgsrc="http://dasprisma.weebly.com/uploads/2/7/0/0/27002005/7562718.png?457" alt="quadratbeispiel" >
                <Inputfieldlist list={quadratInputfields} />
                <button onClick={onClick}>Rechnen</button>
            </ShapesBody>
        </div>
    )
}