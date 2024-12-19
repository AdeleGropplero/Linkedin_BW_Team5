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
import Jobs from "./components/jobs";
import Company from "./components/Company";
import { Category } from "@mui/icons-material";

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
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:company" element={<Company />} />
          <Route path="/jobs/:category" element={<Category />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
