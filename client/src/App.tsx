
import './App.css'
import {DisplayAllCharacters} from "./components/DisplayAllCharacters.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Routes, Route} from "react-router-dom";
import {CreateCharacter} from "./components/CreateCharacter.tsx";
import {CharacterFormView} from "./views/CharacterFormView.tsx";

function App() {
    // Only for the routes and potential context data. NOTHING ELSE
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<DisplayAllCharacters />} />
                <Route path="/create-character" element={<CharacterFormView />} />
                <Route path="/character/:id" element={<CharacterFormView />} />
                <Route path="/character/:id/edit" element={<CreateCharacter />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
