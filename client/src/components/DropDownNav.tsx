import {Dropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const DropDownNav = () => {
    const navigate = useNavigate()

    const logoutUser = () => {
        sessionStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="main-dropdown">
                Main Functions
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/">My Characters</Dropdown.Item>
                <Dropdown.Item href="/all-characters">All Characters</Dropdown.Item>
                <Dropdown.Item href="/create-character">Create Character</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => logoutUser()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}