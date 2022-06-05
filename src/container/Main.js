import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Disease from '../pages/Disease';
import SkinCancer from '../pages/SkinCancer';
import Covid from '../pages/CovidPred';
import BrainTumor from '../pages/BrainTumor';
import Doctors from '../pages/Doctors';
import AlexandraChatroom from '../pages/AlexandraChatroom/Chatroom';
import JasonChatroom from '../pages/JasonChatroom/Chatroom';
import AliyahChatroom from '../pages/AliyahChatroom/Chatroom';
import Footer from '../components/Footer';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/disease" element={<Disease />} />
                <Route path="/skinCancer" element={<SkinCancer />} />
                <Route path="/covid" element={<Covid />} />
                <Route path="/brainTumor" element={<BrainTumor />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/chat/alexandra" element={<AlexandraChatroom />} />
                <Route path="/chat/jason" element={<JasonChatroom />} />
                <Route path="/chat/aliyah" element={<AliyahChatroom />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
