
import './App.css'
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";
import {Routes, Route} from "react-router-dom";
import {CharacterFormView} from "./views/CharacterFormView.tsx";
import {CharacterDetailsView} from "./views/CharacterDetailsView.tsx";
import {LoginRegistrationView} from "./views/LoginRegistrationView.tsx";
import {ProtectedRoute} from "./components/ProtectedRoute.tsx";
import {DisplayCharacterView} from "./views/DisplayCharacterView.tsx";

function App() {
    // Only for the routes and potential context data. NOTHING ELSE
    return (
        <div className='d-flex flex-column min-vh-100 body-bg bg-dark'>
            <Header />
            <Routes>
                <Route path="/login" element={<LoginRegistrationView />} />
                <Route path="/" element={<ProtectedRoute><DisplayCharacterView /></ProtectedRoute>} />
                <Route path="/all-characters" element={<ProtectedRoute><DisplayCharacterView /></ProtectedRoute>} />
                <Route path="/create-character" element={<ProtectedRoute><CharacterFormView /></ProtectedRoute>} />
                <Route path="/character/:id" element={<ProtectedRoute><CharacterDetailsView /></ProtectedRoute>} />
                <Route path="/character/:id/edit" element={<ProtectedRoute><CharacterFormView /></ProtectedRoute>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
