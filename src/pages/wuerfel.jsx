import { useState } from "react"

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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button onClick={() => props.navigate("main")}> Home </button>
                <div style={{ display: "flex" }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Simpele_kubus.svg/1200px-Simpele_kubus.svg.png" alt="würfel" height={"50px"} width={"70px"} />
                    <p style={{}}>3D</p>
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
                        <label htmlFor="nrinputqm">U = </label>
                        <input 
                        id="nrinputqm" 
                        type="number" 
                        onChange={handleChangeS}
                        value={surface}/>
                    </div>
                    <div style={{ display: "flex", margin: "20px" }}>
                        <label htmlFor="nrinputqv">A = </label>
                        <input 
                        id="nrinputqv" 
                        type="number" 
                        onChange={handleChangeV}
                        value={volume}/>
                    </div>
                    <button onClick={onClick}>Rechnen</button>
                </div>
                <img src="https://www.mathespass.at/klasse1/bilder/wuerfel.jpg" alt="würfelbeispiel" height={"300px"} width={"300px"} />
            </div>            
        </div>
    )
}