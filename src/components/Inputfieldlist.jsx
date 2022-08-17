import Inputfield from "./Inputfield"

const Inputfieldlist = (props) => {
    return (
        props.list.map(({key,id,onChange,value,placeholder,type, label})=>{return <Inputfield label={label} key={key} id={id} onChange={onChange} value={value} placeholder={placeholder} type={type}/> })
       
    )
}

export default Inputfieldlist;