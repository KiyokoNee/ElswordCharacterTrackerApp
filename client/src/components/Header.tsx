import {DropDownNav} from "./DropDownNav.tsx";

export const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark py-3">
                    <div className="d-flex">
                        <a className="navbar-brand mx-3" href="/">Elsword Tracker</a>
                        <DropDownNav />
                    </div>
                    <a className="navbar-brand mx-3" href="https://github.com/KiyokoNee/ElswordCharacterTrackerApp" target={"_blank"}>Check Out the Code!</a>
                </nav>
            </header>
        </div>
    )
}