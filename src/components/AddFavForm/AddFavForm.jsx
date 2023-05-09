import React from "react";
import { Button, Form } from "react-bootstrap";
import "./add-fav-form.scss";

const AddFavForm = () => {
  const handleSubmit = () => {};
  return (
    <article className="add-fav">
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
            Submit
          </Button>
        </Form>
      </div>
    </article>
  );
};

export default AddFavForm;
