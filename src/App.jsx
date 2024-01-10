import PiePages from "./pages/PiePages/piepages";
import LinePages from "./pages/LinePages/linepages";
import BarPages from "./pages/BarPages/barpages";
import BasicPages from "./pages/BasicPages/basicpages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicPages />} />
          <Route path="/line" element={<LinePages />} />
          <Route path="/bar" element={<BarPages />} />
          <Route path="/pie" element={<PiePages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;