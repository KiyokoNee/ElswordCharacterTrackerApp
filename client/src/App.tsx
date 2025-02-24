
import './App.css'
import {DisplayAllCharacters} from "./components/DisplayAllCharacters.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Routes, Route, Navigate} from "react-router-dom";
import {CreateCharacter} from "./components/CreateCharacter.tsx";
import {getLoggedInUserId, isUserLoggedIn} from "./services/AuthService"

function App() {
    const activeUserId = getLoggedInUserId();

    const AuthRoute = ({children}) => {
        if(isUserLoggedIn()) {
            return children;
        }
        return <Navigate to="/" />
    }
    // Only for the routes and potential context data. NOTHING ELSE
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<DisplayAllCharacters />} />
                <Route path="/characters" element={<AuthRoute><DisplayAllCharacters /></AuthRoute>} />
                <Route path="/create-character" element={<AuthRoute><CreateCharacter /></AuthRoute>} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
