import { Button, Col, Container, Row } from "react-bootstrap";
import background from "../assets/images/background_image.jpeg";
import profile from "../assets/images/profile_image.svg";
import icona_lavoro from "../assets/images/icona_lavoro.svg";
import { BiCamera } from "react-icons/bi";
import { PiPlusCircle } from "react-icons/pi";
import { FaPencil } from "react-icons/fa6";

//
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import { useEffect } from "react";
//
const ProfileSection = () => {
  //
  // Load data from Redux
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  //
  return (
    <Container id="main-section-profile" className="position-relative">
      {/* immagine profilo e sfondo */}
      <img id="background_image" src={background} alt="background image" />
      <div className="">
        <img
          id="profile_image"
          className="bg-color mt-lg-5 mt-md-5 rounded-circle position-absolute border border-5 border-light"
          src={profileData?.image || "https://via.placeholder.com/35"}
          alt="profile image"
        />
      </div>
      <PiPlusCircle className="add mt-lg-5 mt-md-5 fs-1 text-primary bg-light rounded-circle position-absolute" />
      <Button id="cover-button" className="rounded-pill py-1 d-flex align-items-center text-dark fw-bolder border-none border position-absolute">
        <BiCamera className="me-lg-2" />
        <div className="d-none d-lg-block d-xl-block">Enhange cover image</div>
      </Button>

      <div>
        <p className=" text-end me-2 mt-2">
          <FaPencil className="fs-4" />
        </p>

        {/* le 2 colonne dei dettagli profilo */}
        <Row className="mt-4 ps-4">
          <Col lg={8}>
            <h1 className="fs-4 mb-1">
              {profileData?.name || "Me"} {profileData?.surname || "Me"}
            </h1>
            <h5 className="fs-5 fw-normal p-0 mb-1">{profileData?.title || "Me"}</h5>
          </Col>
          <Col lg={4} className="p-0">
            <div className="d-flex align-items-center">
              <img className="d-none d-lg-block d-xl-block" id="icons" src={icona_lavoro} alt="icona di default del lavoro dell'utente" />
              <h6 className="ms-1 ps-2 pt-2">Nucleode SRL</h6>
            </div>
          </Col>
        </Row>
        <Row className="ps-4">
          <div>
            <h5 className="fs-6 fw-normal text-secondary d-inline-block pe-2 ">{profileData?.area || "Me"}</h5>
            <span className="fs-6 text-secondary">&#183;</span>
            <a id="text-hover" className="fs-6 text-primary ms-2 text-decoration-none fw-medium">
              Contact info
            </a>
          </div>
        </Row>
      </div>
      <div className="ps-3 mt-3">
        {/* buttons */}
        <Button id="button-hover" className="rounded-pill me-2 px-4 py-1 fw-medium">
          Open to
        </Button>
        <Button id="text-hover" className="rounded-pill me-2 bg-transparent text-primary px-3 py-1 fw-semibold">
          Add profile section
        </Button>
        <Button id="text-hover" className="rounded-pill me-2 bg-transparent text-primary px-3 py-1 fw-semibold">
          Enhance profile
        </Button>
        <Button id="text-hover2" className="rounded-pill me-2 bg-transparent border-dark text-dark px-3 py-1 fw-semibold">
          Resources
        </Button>
      </div>
      <div id="edit-profile-area" className="w-50 ms-3 my-4 rounded-3">
        {/* some area to edit and upload things to your profile */}
        <Row className="ms-2 py-2 d-flex">
          <Col>
            <p className="m-0 fw-semibold">Open to work</p>
            <p className="m-0">Full Stack Engineer roles</p>
            <p id="text-hover" className="m-0 fw-semibold text-primary">
              Show details
            </p>
          </Col>
          <Col className="justify-content-end">
            <p className="text-end me-3 mt-1">
              <FaPencil />
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default ProfileSection;
