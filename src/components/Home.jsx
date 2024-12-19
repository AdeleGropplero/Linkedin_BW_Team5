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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import { fetchAllPosts } from "../redux/actions/fetchAllPosts";
import prime from "../assets/prime.svg";
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
const Home = () => {
  // Load data from Redux
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.data);
  const allPosts = useSelector((state) => state.posts.allPosts);

  console.log("allPosts", allPosts);

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchAllPosts());
  }, [dispatch]);
  //
  return (
    <Container>
      <Row>
        <Col lg={3}>
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
                <Button className="bg-transparent border-0 border">
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
        <Col lg={6} className="mt-3 bg-white">
          <div className="border border-2 rounded-3  py-3">
            <div className="d-flex mt-2  align-content-center">
              <div className="d-flex justify-content-start h-50">
                <Button className="bg-transparent py-0 border-0 border">
                  <div>
                    <img
                      id="post_image-home-center"
                      className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={
                        profileData?.image || "https://via.placeholder.com/35"
                      }
                      alt="profile image"
                    />
                  </div>
                </Button>
              </div>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Start a post, try writing with AI"
                  className="me-2 h-100 rounded-pill border border-2"
                  aria-label="Search"
                  style={{ width: "520px" }}
                />
              </Form>
            </div>
            <Row className="mt-3">
              <Col className="d-flex align-items-center ms-4 p-0">
                <BsImageFill className="text-primary fs-5" />
                <span className="ms-2">Media</span>
              </Col>
              <Col className="d-flex align-items-center p-0  pe-5 m-0">
                <BsChatRightText className="fs-5 fw-semibold text-warning" />
                <span className="ms-2">Contribute expertise</span>
              </Col>
              <Col className="d-flex align-items-center ps-5">
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

          {allPosts.map((post) => (
            <div key={post._id} className=" border border-2 rounded-3">
              <div className="d-flex align-items-center">
                {/* immagine profilo utente che pubblica */}
                <Button className="bg-transparent py-0 border-0 border mt-3">
                  <div>
                    <img
                      id="post_image-home-center"
                      className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={post.user?.image || "https://via.placeholder.com/35"}
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
                  <Button className="bg-transparent py-0 border-0 border mt-3">
                    <div>
                      <img
                        id="allPosts_image-home-center"
                        className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                        src={
                          post.user?.image || "https://via.placeholder.com/35"
                        }
                        alt="profile image"
                      />
                    </div>
                  </Button>
                  <div>
                    <h1 className="fs-6 mb-1">
                      {post.user?.name || "name"}{" "}
                      {post.user?.surname || "surname"}
                    </h1>
                    <h5
                      className=" lead fw-normal text-secondary p-0 mb-1"
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
        <Col lg={3} className="mt-3">
          <Row className="border border-2 rounded-3 ps-2 pt-2">
            <h5>Add to your feed</h5>
            <Row className="d-flex   py-2  mb-2">
              <Col
                lg={2}
                className="rounded-circle bg-black"
                style={{ height: "48px", width: "48px" }}
              ></Col>
              <Col lg={10}>
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
                  <BsPlusLg className="me-2 fw-bold text-black" />
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
              <Col lg={10}>
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
                  <BsPlusLg className="me-2 fw-bold text-black" />
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
              <Col lg={10}>
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
                  <BsPlusLg className="me-2 fw-bold text-black" />
                  <span className="fw-semibold">Follow</span>
                </Button>
              </Col>
            </Row>
            <p>
              <span className="fw-medium me-2">View all reccomendations</span>
              <BsArrowRight />
            </p>
          </Row>
          <Row className="border border-2 rounded-3 mt-3">
            <p className="my-2 fw-medium text-secondary">
              Try LinkedIn on the Windows App
            </p>
          </Row>
          <div
            className="d-flex flex-wrap justify-content-center text-secondary mt-3"
            style={{ fontSize: "90%" }}
          >
            <span className="me-3 mb-1">About</span>
            <span className="me-3 mb-1">Accessibility</span>
            <span className="me-2 mb-1">Help Center</span>

            <span className="me-3 mb-1">
              Privacy &amp; Terms{" "}
              <BsCaretDownFill style={{ fontSize: "90%" }} />
            </span>
            <span className="me-4 mb-1">Ad Choices</span>

            <span className="me-2 mb-1">Advertising</span>
            <span className="me-2 mb-1">
              Business Services <BsCaretDownFill style={{ fontSize: "90%" }} />
            </span>

            <span className="me-3 mb-1">Get the LinkedIn app</span>
            <span className="me-2 mb-1">More</span>
            <span className=" d-flex mt-2 text-dark justify-content-center align-items-center">
              <img
                src={linkedin}
                alt="linkedin logo"
                style={{ width: "20%", height: "80%" }}
              />
              LinkedIn Corporation &copy; 2024
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
