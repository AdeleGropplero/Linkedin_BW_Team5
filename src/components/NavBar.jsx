import React, { useEffect } from "react";
import { Navbar, Container, Nav, Form, FormControl, Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import prime from "../assets/prime.svg";

const NavBar = () => {
  const dispatch = useDispatch();

  //Loading from Redux
  const profile = useSelector((state) => state.profile.data);
  const loading = useSelector((state) => state.profile.loading);
  if (!profile?.image) {
    console.warn("Image URL is missing in the fetched data:", profile);
  }

  // Fetch
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <Navbar bg="white" expand="lg" className="border-bottom px-3 px-md-5">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Logo" style={{ width: "35px", height: "35px" }} />
        </Navbar.Brand>

        {/* Searchbar*/}
        <Form className="d-flex ms-3">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" style={{ width: "280px" }} />
        </Form>

        {/* Nav Links */}
        <Nav className="ms-auto mb-2 mb-lg-0">
          <Nav.Link href="/home" className="text-center mx-2">
            <i className="bi bi-house-fill"></i>
            <div className="small">Home</div>
          </Nav.Link>
          <Nav.Link href="/network" className="text-center mx-2">
            <i className="bi bi-people-fill"></i>
            <div className="small">My Network</div>
          </Nav.Link>
          <Nav.Link href="/jobs" className="text-center mx-2">
            <i className="bi bi-briefcase-fill"></i>
            <div className="small">Jobs</div>
          </Nav.Link>
          <Nav.Link href="/messaging" className="text-center mx-2">
            <i className="bi bi-chat-dots-fill"></i>
            <div className="small">Messaging</div>
          </Nav.Link>
          <Nav.Link href="/notifications" className="text-center mx-2 position-relative">
            <i className="bi bi-bell-fill"></i>
            {/* <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle">
              19
            </Badge> */}
            <div className="small">Notifications</div>
          </Nav.Link>
          <Nav.Link href="/profile" className="text-center mx-2">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <img
                  src={profile?.image || "https://via.placeholder.com/35"}
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: "35px", height: "35px", objectFit: "cover" }}
                />
                <div className="small">{profile?.name || "Me"}</div>
              </>
            )}
          </Nav.Link>
        </Nav>

        {/* RightSide Buttons*/}
        <div className="d-flex align-items-center ms-3 border-start px-1">
          <div className="d-flex flex-column align-items-center">
            <Nav.Link href="/" className="text-center mx-2">
              <i className="bi bi-grid-3x3-gap-fill" style={{ color: "rgb(144, 141, 141)", fontSize: "2rem" }}></i>
            </Nav.Link>
            <Nav.Link href="/business" className="text-dark">
              For Business
            </Nav.Link>
          </div>
          <div className="d-flex flex-column align-items-center mx-2 my-0">
            <img src={prime} alt="" style={{ width: "30px", height: "25px" }} className="my-1 mb-2 pb-0" />
            <Nav.Link href="" className="text-decoration-none mt-2">
              Try Premium for €0
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
