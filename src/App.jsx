import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes className="bg-yellow-800">
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default App;
