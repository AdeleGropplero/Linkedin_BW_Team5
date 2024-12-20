import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { postExperience } from "../redux/actions/postExperience";
import { fetchAllPosts } from "../redux/actions/fetchAllPosts";
import { newPost } from "../redux/actions/newPost";
import { BsEmojiSmile, BsImageFill, BsPlusLg } from "react-icons/bs";
import { BiCalendarWeek } from "react-icons/bi";

const FormHomeComponent = ({ isOpen, isClose, postData }) => {
  const profileData = useSelector((state) => state.profile.data);

  const [postText, setPostText] = useState("");

  const handlePost = () => {
    if (postText !== "") {
      dispatch(newPost(postText));
      setPostText("");
    }
  };
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.data?._id);

  return (
    <div className="modal show">
      <Modal
        className="mx-5"
        show={isOpen}
        onHide={() => {
          isClose();
          dispatch(fetchAllPosts(userId));
        }}
      >
        <Modal.Header closeButton className="me-3">
          <Modal.Title style={{ width: "700px" }}>
            <div className="d-flex ms-3 align-items-center">
              <img
                id="profile-image-modal"
                className="w-100 h-100 align-bottom z-10 shadow object-fit-contain rounded-circle"
                src={profileData?.image || "https://via.placeholder.com/35"}
                alt="profile image"
              />
              <div className="ms-3 ">
                <h1 className="fs-5 mb-1">
                  {profileData?.name || "Me"} {profileData?.surname || "Me"}
                </h1>
                <h5 className="fs-6 lead fw-normal p-0 mb-1">
                  Pubblica: Chiunque
                </h5>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postText" className="mb-3 rounded-0">
              <Form.Control
                as="textarea"
                type="text"
                name="postText"
                placeholder="Di cosa vorresti parlare?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                required
                className="border border-2 w-100"
              />
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <BsImageFill className="text-secondary fs-5 mx-2 " />
              <BsEmojiSmile className="text-secondary fs-5 mx-2" />
              <BiCalendarWeek className="text-secondary fs-5 mx-2" />
              <BsPlusLg className=" fw-bold text-black mx-2" />
            </div>
            <Button
              type="submit"
              className=" bg-transparent text-secondary border border-0 fs-5"
              onClick={handlePost}
            >
              {postData ? "Update" : "Pubblica"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormHomeComponent;
