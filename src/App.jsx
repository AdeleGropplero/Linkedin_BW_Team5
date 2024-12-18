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
      <Container fluid className="px-0">
        <NavBar />
        <div className="container-xl mx-md-auto p-0">
          <Row className="ms-lg-auto mx-md-5">
            <Col
              lg={8}
              md={12}
              sm={11}
              xs={12}
              className="ms-md-auto ms-lg-auto ms-sm-4 ms-xs-3 px-0"
            >
              <ProfileSection />
              <SuggestedForYou />
              <Analytics />
              <Experience />
              <FormComponent />
            </Col>
            <Col lg={3} md={12} sm={12} xs={12}>
              <SidebarComponent />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default App;
