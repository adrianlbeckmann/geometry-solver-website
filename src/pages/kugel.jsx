import { useState } from "react"

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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => props.navigate("main")}> Home </button>
                <div style={{ display: "flex" }}>
                    <img src="https://www.mathespass.at/klasse4/bilder/kugel.jpg" alt="kugel" height={"50px"} width={"40px"} />
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
                        onChange={handleChangeS}
                        value={surface}/>
                    </div>
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqf">A = </label>
                        <input 
                        id="nrinputqf" 
                        type="number" 
                        onChange={handleChangeV}
                        value={volume}/>
                    </div>
                    <button onClick={onClick}>Rechnen</button>
                </div>
                <img src="https://www.online-rechner.net/assets/img/kugel.png" alt="kugelbeispiel" height={"300px"} width={"500px"} />
            </div>            
        </div>
    )
}