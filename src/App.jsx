import "bootstrap/dist/css/bootstrap.min.css";
/* import "bootstrap-icons/font/bootstrap-icons.css"; */
import "./App.css";
// import Experience from "./components/Experience";
// import SidebarComponent from "./components/SidebarComponent";
// import SuggestedForYou from "./components/SuggestedForYou";
// import Analytics from "./components/Analytics";
import NavBar from "./components/NavBar";
/* import ProfilesList from "./components/ProfileList"; */
// import ProfileSection from "./components/ProfileSection";
import { Container } from "react-bootstrap";
// import FormComponent from "./components/FormComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
      <Container fluid className="px-0">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
