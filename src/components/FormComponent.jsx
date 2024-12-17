import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postExperience } from "../redux/actions/postExperience";

const FormComponent = ({ isOpen, isClose }) => {
  const [formData, setFormData] = useState({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form inviato:", formData);
    dispatch(postExperience(formData));
    setFormData({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: ""
    });
  };

  return (
    <div className="modal show">
      <Modal show={isOpen} onHide={isClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className=" d-flex justify-content-center mx-5 mb-3  bg-white">
            <Form onSubmit={handleSubmit} className="mt-3 ">
              <Form.Group className="mt-3 mb-3" controlId="role">
                <Form.Label>Role:</Form.Label>

                <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="company">
                <Form.Label>Company:</Form.Label>

                <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="startDate">
                <Form.Label>Start Date:</Form.Label>

                <Form.Control type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="endDate">
                <Form.Label>End Date:</Form.Label>

                <Form.Control type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description:</Form.Label>

                <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="area">
                <Form.Label>Area:</Form.Label>

                <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} required />
              </Form.Group>

              <Button type="submit" variant="primary" className="mb-3">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormComponent;
