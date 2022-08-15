import { useState } from "react"

export const Kreis = (props) => {
    
    // states
const [radius, setRadius] = useState(undefined);
const [circumference, setCircumference] = useState(undefined);
const [area, setArea] = useState(undefined);

    // onclick
const onClick = () => {
    console.log({radius}, {circumference}, {area})
    if(radius !== undefined && radius !== ''){
        setCircumference((2*radius)*Math.PI);
        setArea(Math.PI*(radius*radius));
        return;
    }

    if(circumference !== undefined && circumference !== ''){
        console.log("circumference");
        setRadius((circumference/Math.PI)/2);
        setArea((((circumference/Math.PI)/2)*((circumference/Math.PI)/2))*Math.PI);
        return;
    }

    if(area !== undefined && area !== ''){
        const r = Math.tan((area/Math.PI))
        setRadius();
        setCircumference((2*r)*Math.PI);
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => props.navigate("main")}> Home </button>
                <div style={{ display: "flex" }}>
                    <img src="https://vorlagen-zum-ausdrucken.de/wp-content/uploads/2019/09/Kreis.jpg" alt="kreis" height={"50px"} width={"40px"} />
                    <p style={{}}>2D</p>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqr">r = </label>
                        <input 
                        id="nrinputqr" 
                        type="number" 
                        onChange={handleChangeR}
                        value={radius}/>
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAZAljcnxOsiZRWmFnsiVRyYdSlioNoZF63kD8rS0pMdGOahNzyAU-F2uCq8qdsfztnI&usqp=CAU" alt="kreisbeispiel" height={"300px"} width={"300px"} />
            </div>            
        </div>
    )
}