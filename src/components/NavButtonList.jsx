import { NavButton } from "./NavButton"

export const NavButtonList = (props) => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <label style={{ margin: "20px" }}>{ props.labelname }</label>
            {
                props.liste.map(({ key, imgsrc }) => <NavButton url={imgsrc} name={key} navigate={props.navigate} />)
            }
        </div>
    )
}