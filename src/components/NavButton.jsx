export const NavButton = (props) => {
    return (
        <button onClick={() => props.navigate(props.name)} style={{margin:"20px"}}>
            <img 
                src={props.url}
                alt={props.name}
                width={"100px"}
                height= {"100px"}
            />
        </button>
    )
}