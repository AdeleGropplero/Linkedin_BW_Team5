import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import icona_lavoro from "../assets/images/icona_lavoro.svg";
import { BiCamera } from "react-icons/bi";
import { PiPlusCircle } from "react-icons/pi";
import { FaPencil } from "react-icons/fa6";
import placeholder from "../assets/images/placeholder.jpg";
// import React from "react";
import Slider from "react-slick";

//
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import { useEffect, useState } from "react";
import { uploadProfileImage } from "../redux/actions/uploadProfileImage";
import { deleteProfileImage } from "../redux/actions/deleteProfileImage";
//
const ProfileSection = () => {
  ///Modal Upload Image
  const [show, setShow] = useState(false);
  const loading = useSelector((state) => state.profile.loading);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Upload Image
  const [file, setFile] = useState(null);
  const userId = useSelector((state) => state.profile.data?._id);
  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file && userId) {
      console.log("UserId: ", userId);
      dispatch(uploadProfileImage(file, userId));
      dispatch(fetchProfile);
    }
    handleClose();
  };

  const handleDelete = () => {
    if (userId) {
      dispatch(deleteProfileImage(userId));
      handleClose();
      dispatch(fetchProfile());
    }
  };

  // Load data from Redux
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  //
  const [cityImage, setCityImage] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=Milano&client_id=fmNv3PVFbgIhDFDqo98i_B6c6XtE9sS1VUa-Cl1cxm0&per_page=1&orientation=landscape`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setCityImage(data.results[0].urls.regular);
        }
        console.log("cityimageeee", cityImage);
      });
  }, []);

  return (
    <Container
      id="main-section-profile"
      className="position-relative border border-2 mt-3 bg-white"
    >
      {/* immagine profilo e sfondo */}
      {cityImage ? (
        <img id="background_image" src={cityImage} alt="background image" />
      ) : (
        <p>Loading image...</p>
      )}
      {/* div completo */}
      <div>
        <div className="d-flex justify-content-between h-50">
          {/* <Button className="bg-transparent border-0 border">
            <div>
              <img
                id="profile_image"
                className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                src={profileData?.image || "https://via.placeholder.com/35"}
                alt="profile image"
              />
              <PiPlusCircle className="fs-1 plus-circle-icon text-primary bg-light rounded-circle" onClick={handleShow} />
            </div>
          </Button> */}
          <div className="">
            <img
              id="profile_image"
              className="w-100 h-100 align-bottom z-10 shadow object-fit-contain  rounded-circle"
              src={profileData?.image || placeholder}
              alt="profile image"
            />

            <PiPlusCircle
              className="fs-1 plus-circle-icon text-primary bg-light rounded-circle btn p-0"
              onClick={handleShow}
            />
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Profile Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container mt-3">
                <Form>
                  {/* Input field */}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="form-control"
                    />
                  </Form.Group>
                </Form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={handleDelete}
                className="ms-2"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete Image"}
              </Button>
              <Button variant="primary" onClick={handleUpload} disabled={!file}>
                Modify
              </Button>
            </Modal.Footer>
          </Modal>
          <div>
            <Button className="bg-transparent border-transparent border border-0 text-end me-2 mt-2">
              <FaPencil className="fs-4 text-black" />
            </Button>
          </div>
        </div>

        <Button
          id="cover-button"
          className="rounded-pill rounded-md-circle py-1 d-flex align-items-center text-dark fw-bolder border-none border position-absolute"
        >
          <BiCamera className="me-lg-2" />
          <div className="d-none d-lg-block d-xl-block">
            Enhange cover image
          </div>
        </Button>

        {/* le 2 colonne dei dettagli profilo */}
        <Row className="mt-4 ps-4">
          <Col lg={8}>
            <h1 className="fs-4 mb-1">
              {profileData?.name || "Me"} {profileData?.surname || "Me"}
            </h1>
            <h5 className="fs-5 fw-normal p-0 mb-1">
              {profileData?.title || "Me"}
            </h5>
          </Col>
          <Col lg={4} className="p-0">
            <div className="d-flex align-items-center">
              <img
                className="d-none d-lg-block d-xl-block"
                id="icons"
                src={icona_lavoro}
                alt="icona di default del lavoro dell'utente"
              />
              <h6 className="ms-1 ps-2 pt-2">Nucleode SRL</h6>
            </div>
          </Col>
        </Row>
        <Row className="ps-4">
          <div>
            <h5 className="fs-6 fw-normal text-secondary d-inline-block pe-2 ">
              {profileData?.area || "Me"}
            </h5>
            <span className="fs-6 text-secondary">&#183;</span>
            <a
              id="text-hover"
              className="fs-6 text-primary ms-2 text-decoration-none fw-medium"
            >
              Contact info
            </a>
          </div>
        </Row>
      </div>
      <div className="ps-3 mt-3">
        {/* buttons */}
        <Button className="rounded-pill me-2 px-4 py-1 fw-medium">
          Open to
        </Button>
        <Button
          id="button-hover"
          className="text-hover rounded-pill me-2 bg-transparent text-primary px-3 py-1 fw-semibold"
        >
          Add profile section
        </Button>
        <Button
          id="button-hover"
          className="text-hover rounded-pill me-2 bg-transparent text-primary px-3 py-1 fw-semibold"
        >
          Enhance profile
        </Button>
        <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
          <span className="fw-semibold">Resources</span>
        </Button>
      </div>

      {/* some area to edit and upload things to your profile */}
      <div className="slider-container my-3 mb-4 mx-auto">
        <Slider {...settings}>
          <Row
            id="edit-profile-area"
            className="rounded-3 ms-2 py-2 d-flex justify-content-between "
          >
            <Col xl={9} lg={9} md={9} sm={9} xs={9}>
              <p className="m-0 fw-semibold">Open to work</p>
              <p className="m-0">Full Stack Engineer roles</p>
              <p id="text-hover" className="m-0 fw-semibold text-primary">
                Show details
              </p>
            </Col>
            <Col xl={2} lg={2} md={2} sm={2} xs={2}>
              <Button className="bg-transparent border-transparent border border-0 text-end">
                <FaPencil className=" text-black" />
              </Button>
            </Col>
          </Row>

          <Row id="edit-profile-area" className="rounded-3 mx-2 py-2 d-flex">
            <Col xl={9} lg={9} md={9} sm={9} xs={9}>
              <p className="m-0 text-truncate">
                Share that you re hiring
                <br /> and attract qualified candidates.
              </p>
              <p id="text-hover" className="m-0 fw-semibold text-primary">
                Get started
              </p>
            </Col>
            <Col xl={1} lg={1} md={1} sm={1} xs={2} className="ps-4">
              <Button className="bg-transparent border-transparent border border-0 text-end">
                <FaPencil className=" text-black" />
              </Button>
            </Col>
          </Row>

          <Row id="edit-profile-area" className="rounded-3 mx-2 py-2 d-flex">
            <Col xl={9} lg={9} md={9} sm={9} xs={9}>
              <p className="m-0 fw-semibold">Open to work</p>
              <p className="m-0">Full Stack Engineer roles</p>
              <p id="text-hover" className="m-0 fw-semibold text-primary">
                Show details
              </p>
            </Col>
            <Col xl={2} lg={2} md={2} sm={2} xs={2} className="ps-lg-2 ps-5">
              <Button className="bg-transparent border-transparent border border-0 ">
                <FaPencil className=" text-black" />
              </Button>
            </Col>
          </Row>

          <Row
            id="edit-profile-area"
            className="rounded-3 mx-2 py-2 d-flex justify-content-between"
          >
            <Col xl={9} lg={9} md={9} sm={7} xs={9}>
              <p className="m-0 fw-semibold ">Open to work</p>
              <p className="m-0">Full Stack Engineer roles</p>
              <p id="text-hover" className="m-0 fw-semibold text-primary">
                Show details
              </p>
            </Col>
            <Col xl={2} lg={1} md={2} sm={2} xs={2} className="ps-lg-1">
              <Button className="bg-transparent border-transparent border border-0 ">
                <FaPencil className="text-black" />
              </Button>
            </Col>
          </Row>
        </Slider>
      </div>
    </Container>
  );
};
export default ProfileSection;
