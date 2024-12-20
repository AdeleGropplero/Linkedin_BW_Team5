import { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postExperience } from "../redux/actions/postExperience";
import { fetchExperiences, updateExperience } from "../redux/actions/experienceActions";

const FormComponent = ({ isOpen, isClose, experienceData }) => {
  const [formData, setFormData] = useState({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.data?._id);
  ////
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("Selected File: ", selectedFile);
    setFile(selectedFile);
  };

  //

  useEffect(() => {
    if (isOpen) {
      if (experienceData) {
        setFormData({
          role: experienceData.role || "",
          company: experienceData.company || "",
          startDate: experienceData.startDate || "",
          endDate: experienceData.endDate || "",
          description: experienceData.description || "",
          area: experienceData.area || ""
        });
      } else {
        setFormData({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
      }
    }
  }, [isOpen, experienceData]);

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

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`
        },
        body: formData
      });

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
    console.log("experienceData", experienceData);
    console.log("Form Data: ", formData);
    console.log("File: ", file);
    try {
      ////////
      let newExperienceId = null;
      ///////
      if (experienceData) {
        await dispatch(updateExperience(userId, experienceData._id, formData));
        newExperienceId = experienceData._id;
      } else {
        const newExperience = await dispatch(postExperience(formData, userId));
        newExperienceId = newExperience._id;
      }

      // image upload
      if (file && newExperienceId) {
        await uploadImageLocally(file, userId, newExperienceId); // local function
        console.log("Image uploaded successfully");
        dispatch(fetchExperiences(userId));
      }

      experienceData = { role: "", company: "", startDate: "", endDate: "", description: "", area: "" };
      setFormData({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
      setFile(null); //file reset
      isClose();
      dispatch(fetchExperiences(userId));
    } catch (error) {
      console.error("Error in submitting form:", error.message);
    }
  };

  return (
    <div className="modal show">
      <Modal
        show={isOpen}
        onHide={() => {
          isClose();
          dispatch(fetchExperiences(userId));
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{experienceData ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="area">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="file">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              {experienceData ? "Update" : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormComponent;
