import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addFavClose } from "../../features/Fav/favSlice";
import "./add-fav-form.scss";

const AddFavForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFavClose());
  };
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(addFavClose());
  };
  return (
    <section className="add-fav">
      <div className="add-fav__form-container">
        <Form className="add-fav__form" onSubmit={handleSubmit}>
          <Form.Group className="add-fav__mb-3" controlId="formBasicTitle">
            <Form.Label>Fav Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              className="add-fav__input"
            />
          </Form.Group>

          <Form.Group
            className="add-fav__mb-3"
            controlId="formBasicDescription"
          >
            <Form.Label>Fav Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              className="add-fav__input"
            />
          </Form.Group>

          <Form.Group className="add-fav__mb-3" controlId="formBasicLink">
            <Form.Label>Fav Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Link"
              className="add-fav__input"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="add-fav__button">
            Add
          </Button>
          <Button
            variant="primary"
            className="add-fav__button"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default AddFavForm;
