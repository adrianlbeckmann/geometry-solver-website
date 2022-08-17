import { useState } from "react"
import Inputfieldlist from '../components/Inputfieldlist';


export const Quadrat = (props) => {
    // states
    const [side, setSide] = useState(undefined);
    const [circumference, setCircumference] = useState(undefined);
    const [area, setArea] = useState(undefined);


    // onclick
    const onClick = () => {
        console.log({ side }, { circumference }, { area })
        if (side !== undefined && side !== '') {
            console.log("side");
            setCircumference(side * 4);
            setArea(side * side);
            return;
        }

        if (circumference !== undefined && circumference !== '') {
            console.log("circumference");
            setSide(circumference / 4);
            setArea((circumference / 4) * (circumference / 4));
            return;
        }

        if (area !== undefined && area !== '') {
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => props.navigate("main")}> Home </button>
                <div style={{ display: "flex" }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/800px-Regular_quadrilateral.svg.png" alt="quadrat" height={"50px"} width={"50px"} />
                    <p style={{}}>2D</p>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Inputfieldlist list={quadratInputfields} />

                    <button onClick={onClick}>Rechnen</button>
                </div>
                <img src="http://dasprisma.weebly.com/uploads/2/7/0/0/27002005/7562718.png?457" alt="quadratbeispiel" height={"250px"} width={"450px"} />
            </div>
        </div>
    )
}