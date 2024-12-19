import { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postExperience } from "../redux/actions/postExperience";
import { fetchAllPosts } from "../redux/actions/fetchAllPosts";
import { newPost } from "../redux/actions/newPost";

const FormHomeComponent = ({ isOpen, isClose, postData }) => {
  const profileData = useSelector((state) => state.profile.data);
  const [formData, setFormData] = useState({
    role: ""
  });
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.data?._id);
  ////
  const [file, setFile] = useState(null);

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   console.log("Selected File: ", selectedFile);
  //   setFile(selectedFile);
  // };

  useEffect(() => {
    if (isOpen) {
      if (postData) {
        setFormData({
          role: postData.role || ""
        });
      } else {
        setFormData({
          role: ""
        });
      }
    }
  }, [isOpen, postData]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  console.log("userIdd: ", userId);

  /* console.error("Error: userId is missing!"); */
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const uploadImageLocally = async (file, userId, expId) => {
    try {
      const formData = new FormData();
      formData.append("experience", file);

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
          },
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log("Image uploaded successfully:", data);
      return data;
    } catch (error) {
      console.error("Error uploading image:", error.message);
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("postData", postData);
    console.log("Form Data: ", formData);
    console.log("File: ", file);
    try {
      ////////
      let newExperienceId = null;
      ///////
      if (postData) {
        await dispatch(newPost(userId, postData._id, formData));
        newExperienceId = postData._id;
      } else {
        const newExperience = await dispatch(postExperience(formData, userId));
        newExperienceId = newExperience._id;
      }

      // image upload
      if (file && newExperienceId) {
        await uploadImageLocally(file, userId, newExperienceId); // local function
        console.log("Image uploaded successfully");
        dispatch(fetchAllPosts(userId));
      }

      postData = {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: ""
      };
      setFormData({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: ""
      });
      setFile(null); //file reset
      isClose();
      dispatch(fetchAllPosts(userId));
    } catch (error) {
      console.error("Error in submitting form:", error.message);
    }
  };

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
        <Modal.Header closeButton>
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
        <Modal.Body style={{ width: "900px" }}>
          <Form onSubmit={handleSubmit} className="">
            <Form.Group controlId="role" className="mb-3 rounded-0">
              <Form.Control
                type="text"
                name="role"
                placeholder="Di cosa vorresti parlare?"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
          <Button variant="primary" type="submit" className="mt-3">
            {postData ? "Update" : "Submit"}
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormHomeComponent;
