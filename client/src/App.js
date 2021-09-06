import "./App.css";
import Home from "./pages/home/Home.jsx";
import DoctorAbout from "./pages/doctorAbout/DoctorAbout.jsx";

// On production, manage API keys to follow the site url

function App() {
  return (
    <div>
      <DoctorAbout />
    </div>
  );
}

export default App;
