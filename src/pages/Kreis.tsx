import React, { useState } from "react"
import { Inputfield } from "../components/Inputfield";
import { ShapesHeader } from "../components/ShapesHeader";
import { ShapesBody } from "../components/ShapesBody";

export const Kreis = (props) => {

    // states
    const [radius, setRadius] = useState(undefined);
    const [circumference, setCircumference] = useState(undefined);
    const [area, setArea] = useState(undefined);

    // onclick
    const onClick = () => {
        console.log({ radius }, { circumference }, { area })
        if (radius !== undefined && radius !== '') {
            setCircumference((2 * radius) * Math.PI);
            setArea(Math.PI * (radius * radius));
            return;
        }

        if (circumference !== undefined && circumference !== '') {
            console.log("circumference");
            setRadius((circumference / Math.PI) / 2);
            setArea((((circumference / Math.PI) / 2) * ((circumference / Math.PI) / 2)) * Math.PI);
            return;
        }

        if (area !== undefined && area !== '') {
            const r = Math.tan((area / Math.PI))
            setRadius(r);
            setCircumference((2 * r) * Math.PI);
            return;
        }
    }


    const handleChangeR = (event) => {
        console.log(event.target.value)
        setRadius(event.target.value)
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
                imgsrc="https://vorlagen-zum-ausdrucken.de/wp-content/uploads/2019/09/Kreis.jpg"
                alt="kreis"
                dimension="2D"
                navigate={props.navigate}
            />

            <ShapesBody imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAZAljcnxOsiZRWmFnsiVRyYdSlioNoZF63kD8rS0pMdGOahNzyAU-F2uCq8qdsfztnI&usqp=CAU" alt="kreisbeispiel" >
                <Inputfield label="r = " key="quadratInputfields-0" id="nrinputqr" onChange={handleChangeR} value={radius} placeholder="" type="number" />
                <Inputfield label="U = " key="quadratInputfields-0" id="nrinputqu" onChange={handleChangeU} value={circumference} placeholder="" type="number" />
                <Inputfield label="A = " key="quadratInputfields-0" id="nrinputqf" onChange={handleChangeF} value={area} placeholder="" type="number" />
                <button onClick={onClick}>Rechnen</button>
            </ShapesBody>
        </div>
    )
}