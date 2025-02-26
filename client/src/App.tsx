
import './App.css'
import {DisplayAllCharacters} from "./components/DisplayAllCharacters.tsx";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Routes, Route} from "react-router-dom";
import {CharacterFormView} from "./views/CharacterFormView.tsx";
import {CharacterDetails} from "./components/CharacterDetails.tsx";
import {LoginRegistrationView} from "./views/LoginRegistrationView.tsx";
import {ProtectedRoute} from "./components/ProtectedRoute.tsx";

function App() {
    // Only for the routes and potential context data. NOTHING ELSE
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <Routes>
                <Route path="/login" element={<LoginRegistrationView />} />
                <Route path="/" element={<ProtectedRoute><DisplayAllCharacters /></ProtectedRoute>} />
                <Route path="/create-character" element={<ProtectedRoute><CharacterFormView /></ProtectedRoute>} />
                <Route path="/character/:id" element={<ProtectedRoute><CharacterDetails /></ProtectedRoute>} />
                <Route path="/character/:id/edit" element={<ProtectedRoute><CharacterFormView /></ProtectedRoute>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
