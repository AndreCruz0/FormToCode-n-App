import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sadas" element={<div>Home</div>} />
        <Route path="/" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
