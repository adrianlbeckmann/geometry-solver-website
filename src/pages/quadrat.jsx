import { useState } from "react"

export const Quadrat = (props) => {
    // states
const [side, setSide] = useState(undefined);
const [circumference, setCircumference] = useState(undefined);
const [area, setArea] = useState(undefined);

    // onclick
const onClick = () => {
    console.log({side}, {circumference}, {area})
    if(side !== undefined && side !== ''){
        console.log("side");
        setCircumference(side*4);
        setArea(side*side);
        return;
    }

    if(circumference !== undefined && circumference !== ''){
        console.log("circumference");
        setSide(circumference/4);
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

const handleChangeU = (event) => {
    setCircumference(event.target.value)
}

const handleChangeF = (event) => {
    setArea(event.target.value)
}

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
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqa">a = </label>
                        <input 
                        id="nrinputqa" 
                        type="number" 
                        onChange={handleChangeA}
                        value={side}/>
                    </div>
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqu">U = </label>
                        <input 
                        id="nrinputqu" 
                        type="number" 
                        onChange={handleChangeU}
                        value={circumference}/>
                    </div>
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqf">A = </label>
                        <input 
                        id="nrinputqf" 
                        type="number" 
                        onChange={handleChangeF}
                        value={area}/>
                    </div>
                    <button onClick={onClick}>Rechnen</button>
                </div>
                <img src="http://dasprisma.weebly.com/uploads/2/7/0/0/27002005/7562718.png?457" alt="quadratbeispiel" height={"250px"} width={"450px"} />
            </div>            
        </div>
    )
}