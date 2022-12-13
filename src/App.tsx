import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <script src="https://docs.opencv.org/4.5.4/opencv.js"></script> */}
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
