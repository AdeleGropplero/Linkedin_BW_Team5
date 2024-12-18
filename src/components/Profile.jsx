import { Col, Row } from "react-bootstrap";
import ProfileSection from "./ProfileSection";
import SuggestedForYou from "./SuggestedForYou";
import Analytics from "./Analytics";
import Experience from "./Experience";
import FormComponent from "./FormComponent";
import SidebarComponent from "./SidebarComponent";

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
    </div>
  );
};
export default Profile;
