import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Room from "./pages/Room";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/room/:roomId" element={<Room />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
