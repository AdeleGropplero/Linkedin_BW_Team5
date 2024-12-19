import { Col, Row } from "react-bootstrap";
import linkedin from "../assets/images/linkedin.png";
import ProfileSection from "./ProfileSection";
import SuggestedForYou from "./SuggestedForYou";
import Analytics from "./Analytics";
import Experience from "./Experience";
import FormComponent from "./FormComponent";
import SidebarComponent from "./SidebarComponent";
import { BsCaretDownFill } from "react-icons/bs";

const Profile = () => {
  return (
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
      <div className="justify-content-center ms-4 mb-3">
        <a
          href="#"
          className="  mt-2 text-black fw-normal text-decoration-none justify-content-center align-items-center"
          style={{ fontSize: "12px" }}
        >
          <img
            src={linkedin}
            alt="linkedin logo"
            style={{ width: "5%", height: "50%" }}
          />
          LinkedIn Corporation &copy; 2024
        </a>
        <a
          href="#"
          className="mx-3 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          About
        </a>
        <a
          href="#"
          className="me-3 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Accessibility
        </a>
        <a
          href="#"
          className="me-2 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Help Center
        </a>

        <a
          href="#"
          className="me-3 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Privacy &amp; Terms <BsCaretDownFill style={{ fontSize: "90%" }} />
        </a>
        <a
          href="#"
          className="me-4 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Ad Choices
        </a>

        <a
          href="#"
          className="me-2 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Advertising
        </a>
        <a
          href="#"
          className="me-2 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Business Services <BsCaretDownFill style={{ fontSize: "90%" }} />
        </a>

        <a
          href="#"
          className="me-3 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          Get the LinkedIn app
        </a>
        <a
          href="#"
          className="me-2 mb-1 text-black text-decoration-none text-secondary"
          style={{ fontSize: "12px" }}
        >
          More
        </a>
      </div>
    </div>
  );
};
export default Profile;
