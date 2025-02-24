
import './App.css'
import {DisplayAllCharacters} from "./components/DisplayAllCharacters.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Routes, Route} from "react-router-dom";
import {CreateCharacter} from "./components/CreateCharacter.tsx";

function App() {
    // Only for the routes and potential context data. NOTHING ELSE
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<DisplayAllCharacters />} />
                <Route path="/create-character" element={<CreateCharacter />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
