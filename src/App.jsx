import "bootstrap/dist/css/bootstrap.min.css";
/* import "bootstrap-icons/font/bootstrap-icons.css"; */
import "./App.css";
import Experience from "./components/Experience";
import SidebarComponent from "./components/SidebarComponent";
import SuggestedForYou from "./components/SuggestedForYou";
import Analytics from "./components/Analytics";
import NavBar from "./components/NavBar";
/* import ProfilesList from "./components/ProfileList"; */
import ProfileSection from "./components/ProfileSection";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <ProfileSection />
      <Experience />
      <SidebarComponent />
      <SuggestedForYou />
      <Analytics />
=======
      <Container fluid className="px-0">
        <NavBar />
        <div className="container-lg">
          <Row className="mx-auto mx-0 ">
            <Col className="mx-md-4 px-0">
              <ProfileSection />
              <SuggestedForYou />
              <Analytics />
              <Experience />
              <FormComponent />
            </Col>
            <Col lg={3} md={0}>
              <SidebarComponent />
            </Col>
          </Row>
        </div>
      </Container>
>>>>>>> 4d331284b3573ae67d6d1ef5d0fb0991b7244404
    </>
  );
}

export default App;
