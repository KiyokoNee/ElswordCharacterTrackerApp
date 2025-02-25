import {Dropdown} from "react-bootstrap";

export const DropDownNav = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown">
                Main Functions
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/">All Characters</Dropdown.Item>
                <Dropdown.Item href="/create-character">Create Character</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}