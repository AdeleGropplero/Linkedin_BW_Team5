const token = import.meta.env.VITE_AUTH_TOKEN;
const token_comment = import.meta.env.VITE_AUTH_TOKEN_2;

import { Accordion, Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";

import background from "../assets/images/background_image.jpeg";
import linkedin from "../assets/images/linkedin.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/actions/fetchProfile";
import { fetchAllPosts } from "../redux/actions/fetchAllPosts";
import { deletePost } from "../redux/actions/deletePost";
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
  BsSendFill,
  BsTrashFill
} from "react-icons/bs";

import { addComment, fetchAllComments } from "../redux/actions/commentsActions";
import FormHomeComponent from "./FormHomeComponent";

const Home = () => {
  // Load data from Redux
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.data);
  const allPosts = useSelector((state) => state.posts.allPosts);
  const userId = useSelector((state) => state.profile.data?._id);

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

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    dispatch(fetchAllPosts());
  };

  //

  ///////////Comment Section By Mahdi ////////////
  useEffect(() => {
    dispatch(fetchAllComments(token));
  }, [dispatch, token]);
  const allComments = useSelector((state) => state.comment?.allComments || []);
  console.log("All Comments:", allComments);

  const [commentText, setCommentText] = useState({});

  const handleCommentChange = (postId, text) => {
    setCommentText((prev) => ({
      ...prev,
      [postId]: text
    }));
  };

  const handleCommentSubmit = (postId) => {
    if (commentText[postId]?.trim()) {
      dispatch(addComment(commentText[postId], postId, token_comment));
      setCommentText((prev) => ({
        ...prev,
        [postId]: ""
      }));
    }
  };

  //modale per visualizzare commenti

  /* const handleFetchComments = (postId) => {
    console.log(postId);
    dispatch(fetchComments(postId, token_comment));
  }; */
  return (
    <Container>
      <Row>
        <Col lg={3} className="d-none d-lg-block d-xl-block">
          <Container id="main-section-profile" className="mt-3 bg-white border border-2 rounded-3">
            {/* immagine profilo e sfondo */}
            <img className="rounded-top-3" id="background_image" src={background} alt="background image" />
            {/* div completo */}
            <div>
              <div className="d-flex justify-content-center h-50">
                <Button href="/profile" className="bg-transparent border-0 border">
                  <div>
                    <img
                      id="profile_image-home"
                      className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={profileData?.image || "https://via.placeholder.com/35"}
                      alt="profile image"
                    />
                  </div>
                </Button>
              </div>

              <div className="text-center">
                <h1 className="fs-5 mb-1">
                  {profileData?.name || "Me"} {profileData?.surname || "Me"}
                </h1>
                <h5 className="fs-6 lead fw-normal p-0 mb-1">{profileData?.title || "Me"}</h5>
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
              <p className="m-0 ps-2 pt-4 fw-light text-secondary">Boost your career with exclusive tools</p>
              <p className="m-0 ps-2 fw-medium d-flex align-items-center ">
                <img src={prime} alt="" style={{ width: "25px", height: "20px" }} className="my-1 mb-1" />
                Try Premium for $0
              </p>
              <p className="m-0 ps-2 py-4 fw-medium d-flex align-items-center ">
                <BsBookmarkFill className="text-secondary fs-5" />
                <span className="ps-2 text-secondary-emphasis">Saved items</span>
              </p>
            </div>
          </Container>
        </Col>
        <Col id="main-col-home" lg={6} md={12} className=" mt-3 p-0 ">
          <div className="border border-2 rounded-3 bg-white  py-3">
            <div className="d-flex mt-2 align-items-center">
              <div className="d-flex justify-content-start h-50">
                <Button href="/profile" className="bg-transparent py-0 border-0 border">
                  <div>
                    <img
                      id="post_image-home-center"
                      className="align-bottom z-10 shadow object-fit-contain rounded-circle"
                      src={profileData?.image || "https://via.placeholder.com/35"}
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
                <FormHomeComponent isOpen={isModalOpen} isClose={closeModal} postData={selectedPost} />
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
              <Col className="d-flex align-items-center ps-5" onClick={openModal}>
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

          {allPosts?.slice(-10).map((post) => {
            const postComments = allComments.filter((comment) => comment.elementId === post._id);

            return (
              <div key={post._id} className="border border-2 rounded-3 bg-white mb-3">
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
                    <h5 className="lead fw-normal text-secondary p-0 mb-1" style={{ fontSize: "12px" }}>
                      {post.user?.title || "title"}
                    </h5>
                  </div>
                  <div className="d-flex align-items-center ms-auto me-3">
                    {userId === post.user._id && (
                      <div className="  me-2 pb-2 ms-auto">
                        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="fs-4 mt-2"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                    <div>
                      {userId === post.user._id && (
                        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                          <BsTrashFill className="" size={24} color="red" onClick={() => handleDelete(post._id)} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <p className="ms-3">{post.text}</p>

                {/* Comment Submit*/}

                {/* Comment Show*/}
                <div className="mt-3">
                  {postComments.map((comment) => (
                    <div key={comment._id} className="border-bottom py-2">
                      <p>{comment.comment}</p>
                    </div>
                  ))}
                </div>

                <div className="border border-2 justify-content-center" style={{ width: "95%", marginInline: "auto" }}>
                  <div className="d-flex align-items-center">
                    <div>
                      <h1 className="fs-6 mb-1">
                        {post.user?.name || "name"} {post.user?.surname || "surname"}
                      </h1>
                      <h5 className="lead fw-normal text-secondary p-0 mb-1" style={{ fontSize: "12px" }}>
                        {post.user?.title || "title"}
                      </h5>
                    </div>
                  </div>
                  <p className="ms-3">{post.user?.bio || "bio"}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center mt-2">
                    <BsHandThumbsUp className="ms-3" />
                    <span className="text-secondary">1</span>
                  </div>
                  <div>
                    <button className=" Profile" style={{ background: "none", border: "none", cursor: "pointer" }}>
                      All Comments
                    </button>
                  </div>
                </div>
                <Container fluid>
                  <Row className="mt-2 w-100">
                    <Col>
                      <Accordion className="flex-fill m-0 p-0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <Col className="d-flex align-items-center">
                              <BsHandThumbsUp className="ms-3" />
                              <span className="ms-2 me-0 pe-0">Like</span>
                            </Col>

                            <Col className="d-flex align-items-center">
                              <BsRepeat className="ms-3" />
                              <span className="ms-2 me-0 pe-0">Repost</span>
                            </Col>
                            <Col className="d-flex align-items-center">
                              <BsSendFill className="ms-3" />
                              <span className="ms-2 me-5">Send</span>
                            </Col>
                            <Col className="d-flex flex-grow-1">
                              <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                                <BsChatRightDots />
                              </button>
                              <span className="mx-1">Comment</span>
                            </Col>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="mt-2">
                              <Form>
                                <FormControl
                                  type="text"
                                  placeholder="Write a comment..."
                                  value={commentText[post._id] || ""}
                                  onChange={(e) => handleCommentChange(post._id, e.target.value)}
                                />
                                <Button className="mt-2" onClick={() => handleCommentSubmit(post._id)} disabled={!commentText[post._id]?.trim()}>
                                  Submit
                                </Button>
                              </Form>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
        </Col>
        <Col lg={3} className="mt-3 d-none d-lg-block d-xl-block p-0 ps-3">
          <Row className="border border-2 rounded-3 ps-2 pt-2 m-0 bg-white">
            <h5>Add to your feed</h5>
            <Row className="d-flex   py-2  mb-2">
              <Col lg={2} className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></Col>
              <Col lg={8}>
                <p className="ms-2 mb-0 fw-semibold">
                  <a href="#" className="text-decoration-none text-black Profile">
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
              <Col lg={2} className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></Col>
              <Col lg={8}>
                <p className="ms-2 mb-0 fw-semibold">
                  <a href="#" className="text-decoration-none text-black Profile">
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
              <Col lg={2} className="rounded-circle bg-black" style={{ height: "48px", width: "48px" }}></Col>
              <Col lg={8}>
                <p className="ms-2 mb-0 fw-semibold">
                  <a href="#" className="text-decoration-none text-black Profile">
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
            <p className="my-2 fw-medium text-secondary">Try LinkedIn on the Windows App</p>
          </Row>
          <div
            className="d-flex flex-wrap justify-content-center text-secondary mt-3 position-sticky "
            style={{ fontSize: "90%", top: "75px", zIndex: "1050" }}
          >
            <div>
              <a href="#" className="me-3 mb-1 text-decoration-none text-secondary">
                About
              </a>
              <a href="#" className="me-3 mb-1 text-decoration-none text-secondary">
                Accessibility
              </a>
              <a href="#" className="me-2 mb-1 text-decoration-none text-secondary">
                Help Center
              </a>

              <a href="#" className="me-3 mb-1 text-decoration-none text-secondary">
                Privacy &amp; Terms <BsCaretDownFill style={{ fontSize: "90%" }} />
              </a>
              <a href="#" className="me-4 mb-1 text-decoration-none text-secondary">
                Ad Choices
              </a>

              <a href="#" className="me-2 mb-1 text-decoration-none text-secondary">
                Advertising
              </a>
              <a href="#" className="me-2 mb-1 text-decoration-none text-secondary">
                Business Services <BsCaretDownFill style={{ fontSize: "90%" }} />
              </a>

              <a href="#" className="me-3 mb-1 text-decoration-none text-secondary">
                Get the LinkedIn app
              </a>
              <a href="#" className="me-2 mb-1 text-decoration-none text-secondary">
                More
              </a>
              <a href="#" className=" d-flex mt-2 text-dark text-decoration-none justify-content-center align-items-center">
                <img src={linkedin} alt="linkedin logo" style={{ width: "20%", height: "80%" }} />
                LinkedIn Corporation &copy; 2024
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
