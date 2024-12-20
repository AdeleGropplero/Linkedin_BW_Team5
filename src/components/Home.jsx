import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row
} from "react-bootstrap";
import background from "../assets/images/background_image.jpeg";
import linkedin from "../assets/images/linkedin.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import { fetchAllPosts } from "../redux/actions/fetchAllPosts";
import prime from "../assets/prime.svg";
// import { newPost } from "../redux/actions/newPost";
import {
  BsArrowRight,
  BsBookmarkFill,
  BsCaretDownFill,
  BsChatRightDots,
  BsChatRightText,
  BsFileRichtext,
  BsHandThumbsUp,
  BsImageFill,
  BsPlusLg,
  BsRepeat,
  BsSendFill
} from "react-icons/bs";
import FormHomeComponent from "./FormHomeComponent";

const Home = () => {
  // Load data from Redux
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.data);
  const allPosts = useSelector((state) => state.posts.allPosts);

  console.log("allPosts", allPosts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = () => {
    setSelectedPost(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchAllPosts());
  }, [dispatch]);

  //
  return (
    <Container>
      <Row>
        <Col lg={3} className="d-none d-lg-block d-xl-block">
          <Container
            id="main-section-profile"
            className="mt-3 bg-white border border-2 rounded-3"
          >
            {/* immagine profilo e sfondo */}
            <img
              className="rounded-top-3"
              id="background_image"
              src={background}
              alt="background image"
            />
            {/* div completo */}
            <div>
              <div className="d-flex justify-content-center h-50">
                <Button
                  href="/profile"
                  className="bg-transparent border-0 border"
                >
                  <div>
                    <img
                      id="profile_image-home"
                      className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={
                        profileData?.image || "https://via.placeholder.com/35"
                      }
                      alt="profile image"
                    />
                  </div>
                </Button>
              </div>

              <div className="text-center">
                <h1 className="fs-5 mb-1">
                  {profileData?.name || "Me"} {profileData?.surname || "Me"}
                </h1>
                <h5 className="fs-6 lead fw-normal p-0 mb-1">
                  {profileData?.title || "Me"}
                </h5>
              </div>
            </div>
            <Row>
              <Col lg={10} className="text-secondary fw-medium">
                <p className="m-0 ps-2">Profile viewers</p>
                <p className="m-0 ps-2">View all analytics</p>
              </Col>
              <Col className="text-primary" lg={2}>
                3
              </Col>
            </Row>
            <div>
              <p className="m-0 ps-2 pt-4 fw-light text-secondary">
                Boost your career with exclusive tools
              </p>
              <p className="m-0 ps-2 fw-medium d-flex align-items-center ">
                <img
                  src={prime}
                  alt=""
                  style={{ width: "25px", height: "20px" }}
                  className="my-1 mb-1"
                />
                Try Premium for $0
              </p>
              <p className="m-0 ps-2 py-4 fw-medium d-flex align-items-center ">
                <BsBookmarkFill className="text-secondary fs-5" />
                <span className="ps-2 text-secondary-emphasis">
                  Saved items
                </span>
              </p>
            </div>
          </Container>
        </Col>
        <Col id="main-col-home" lg={6} md={12} className=" mt-3 p-0 ">
          <div className="border border-2 rounded-3 bg-white  py-3">
            <div className="d-flex mt-2 align-items-center">
              <div className="d-flex justify-content-start h-50">
                <Button
                  href="/profile"
                  className="bg-transparent py-0 border-0 border"
                >
                  <div>
                    <img
                      id="post_image-home-center"
                      className="align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={
                        profileData?.image || "https://via.placeholder.com/35"
                      }
                      alt="profile image"
                    />
                  </div>
                </Button>
              </div>
              <Form>
                <FormControl
                  type="search"
                  placeholder="Start a post, try writing with AI"
                  className="me-2 h-100m d-fklex rounded-pill border border-2"
                  aria-label="Search"
                  onClick={openModal}
                />
                <FormHomeComponent
                  isOpen={isModalOpen}
                  isClose={closeModal}
                  postData={selectedPost}
                />
              </Form>
            </div>
            <Row className="mt-3">
              <Col className="d-flex align-items-center ms-4 p-0">
                <BsImageFill className="text-primary fs-5" />
                <span className="ms-2">Media</span>
              </Col>
              <Col className="d-flex align-items-center p-0 m-0">
                <BsChatRightText className="fs-6 fw-semibold text-warning" />
                <span className="ms-2">Contribute expertise</span>
              </Col>
              <Col
                className="d-flex align-items-center ps-5"
                onClick={openModal}
              >
                <BsFileRichtext className="fs-5 fw-semibold text-danger-emphasis" />
                <span className="ms-2">Write article</span>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-between">
            <hr style={{ width: "65%" }} />
            <p className="mt-2" style={{ fontSize: "12px", fontWeight: "400" }}>
              Select feed view: <strong>Most relevand first</strong>
              <BsCaretDownFill className="text-black" />
            </p>
          </div>
          {/* ****************POST AREA **************************** */}

          {allPosts
            .slice(0, 5)
            // .filter((post) => post._id !== "6764272d9906100015b678ab")
            .map((post) => (
              <div
                key={post._id}
                className=" border border-2 rounded-3 bg-white mb-3"
              >
                <div className="d-flex align-items-center">
                  {/* immagine profilo utente che pubblica */}
                  <Button className="bg-transparent py-0 border-0 border mt-3">
                    <div>
                      <img
                        id="post_image-home-center"
                        className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                        src={
                          post.user?.image || "https://via.placeholder.com/35"
                        }
                        alt="profile image"
                      />
                    </div>
                  </Button>
                  {/* nome  e cognome dell'utente */}
                  <div>
                    <h1 className="fs-6 mb-1">{post.username}</h1>
                    <h5
                      className=" lead fw-normal text-secondary p-0 mb-1"
                      style={{ fontSize: "12px" }}
                    >
                      {post.user?.title || "title"}
                    </h5>
                  </div>
                </div>
                <p className="ms-3">{post.text}</p>
                <div
                  className="border border-2 justify-content-center"
                  style={{ width: "95%", marginInline: "auto" }}
                >
                  <div className="d-flex align-items-center">
                    <div>
                      <h1 className="fs-6 my-1 ms-2">
                        {post.user?.name || "name"}{" "}
                        {post.user?.surname || "surname"}
                      </h1>
                      <h5
                        className=" lead fw-normal text-secondary p-0 mb-1 ms-2"
                        style={{ fontSize: "12px" }}
                      >
                        {post.user?.title || "title"}
                      </h5>
                    </div>
                  </div>
                  <p className="ms-3">{post.user?.bio || "bio"}</p>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <BsHandThumbsUp className="ms-3" />
                  <span className="text-secondary">1</span>
                </div>
                <Row className="mt-2">
                  <Col className="d-flex align-items-center">
                    <BsHandThumbsUp className="ms-5" />
                    <span className="ms-2 me-0 pe-0">Like</span>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <BsChatRightDots className="ms-3" />
                    <span className="ms-2 me-0 pe-0">Comment</span>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <BsRepeat className="ms-3" />
                    <span className="ms-2 me-0 pe-0">Repost</span>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <BsSendFill className="ms-3" />
                    <span className="ms-2 me-5">Send</span>
                  </Col>
                </Row>
              </div>
            ))}
        </Col>
        <Col lg={3} className="mt-3 d-none d-lg-block d-xl-block p-0 ps-3">
          <Row className="border border-2 rounded-3 ps-2 pt-2 m-0 bg-white">
            <h5>Add to your feed</h5>
            <Row className="d-flex   py-2  mb-2">
              <Col
                lg={2}
                className="rounded-circle bg-black"
                style={{ height: "48px", width: "48px" }}
              ></Col>
              <Col lg={8}>
                <p className="ms-2 mb-0 fw-semibold">
                  <a
                    href="#"
                    className="text-decoration-none text-black Profile"
                  >
                    Festival de Cannes
                  </a>
                </p>
                <p className="ms-2 mb-1" style={{ fontSize: "95%" }}>
                  Company &#x2022; Movies and Sound Recording
                </p>
                <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                  <BsPlusLg className=" fw-bold text-black" />
                  <span className="fw-semibold">Follow</span>
                </Button>
              </Col>
            </Row>
            <Row className="d-flex  py-2 mb-2">
              <Col
                lg={2}
                className="rounded-circle bg-black"
                style={{ height: "48px", width: "48px" }}
              ></Col>
              <Col lg={8}>
                <p className="ms-2 mb-0 fw-semibold">
                  <a
                    href="#"
                    className="text-decoration-none text-black Profile"
                  >
                    Charles Icay
                  </a>
                </p>
                <p className="ms-2 mb-1" style={{ fontSize: "95%" }}>
                  Senior Animator
                </p>
                <Button className="ConnectButton bg-white text-secondary rounded-pill px-3 py-1">
                  <BsPlusLg className=" fw-bold text-black" />
                  <span className="fw-semibold">Follow</span>
                </Button>
              </Col>
            </Row>
            <Row className="d-flex  py-2 ">
              <Col
                lg={2}
                className="rounded-circle bg-black"
                style={{ height: "48px", width: "48px" }}
              ></Col>
              <Col lg={8}>
                <p className="ms-2 mb-0 fw-semibold">
                  <a
                    href="#"
                    className="text-decoration-none text-black Profile"
                  >
                    Hoorakhsh Studios
                  </a>
                </p>
                <p className="ms-2 mb-1" style={{ fontSize: "95%" }}>
                  Company &#x2022; Animation and Post
                </p>
                <Button className="ConnectButton bg-white text-secondary  rounded-pill px-3 py-1">
                  <BsPlusLg className=" fw-bold text-black" />
                  <span className="fw-semibold">Follow</span>
                </Button>
              </Col>
            </Row>
            <p>
              <span className="fw-medium me-2">View all reccomendations</span>
              <BsArrowRight />
            </p>
          </Row>
          <Row className="border border-2 rounded-3 mx-0 mt-3 bg-white">
            <p className="my-2 fw-medium text-secondary">
              Try LinkedIn on the Windows App
            </p>
          </Row>
          <div
            className="d-flex flex-wrap justify-content-center text-secondary mt-3"
            style={{ fontSize: "90%" }}
          >
            <a
              href="#"
              className="me-3 mb-1 text-decoration-none text-secondary"
            >
              About
            </a>
            <a
              href="#"
              className="me-3 mb-1 text-decoration-none text-secondary"
            >
              Accessibility
            </a>
            <a
              href="#"
              className="me-2 mb-1 text-decoration-none text-secondary"
            >
              Help Center
            </a>

            <a
              href="#"
              className="me-3 mb-1 text-decoration-none text-secondary"
            >
              Privacy &amp; Terms{" "}
              <BsCaretDownFill style={{ fontSize: "90%" }} />
            </a>
            <a
              href="#"
              className="me-4 mb-1 text-decoration-none text-secondary"
            >
              Ad Choices
            </a>

            <a
              href="#"
              className="me-2 mb-1 text-decoration-none text-secondary"
            >
              Advertising
            </a>
            <a
              href="#"
              className="me-2 mb-1 text-decoration-none text-secondary"
            >
              Business Services <BsCaretDownFill style={{ fontSize: "90%" }} />
            </a>

            <a
              href="#"
              className="me-3 mb-1 text-decoration-none text-secondary"
            >
              Get the LinkedIn app
            </a>
            <a
              href="#"
              className="me-2 mb-1 text-decoration-none text-secondary"
            >
              More
            </a>
            <a
              href="#"
              className=" d-flex mt-2 text-dark text-decoration-none justify-content-center align-items-center"
            >
              <img
                src={linkedin}
                alt="linkedin logo"
                style={{ width: "20%", height: "80%" }}
              />
              LinkedIn Corporation &copy; 2024
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
