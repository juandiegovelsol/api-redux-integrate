import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/loginSlice";
import {
  selectFav,
  addFavClose,
  clearResponse,
  createOneFavAsync,
  getOneListAsync,
} from "../../features/Fav/favSlice";
import "./add-fav-form.scss";

const AddFavForm = () => {
  const dispatch = useDispatch();
  const { info } = useSelector(selectLogin);
  const { token } = info || "";
  const { iduser } = info || 0;
  const { list, response } = useSelector(selectFav);
  const { list: favList } = list || {};
  const { idlist } = favList || 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements[0].value;
    const description = e.target.elements[1].value;
    const link = e.target.elements[2].value;
    dispatch(createOneFavAsync({ token, title, description, link, idlist }));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(addFavClose());
  };

  useEffect(() => {
    if (Object.keys(response).length) {
      dispatch(getOneListAsync({ token, iduser }));
      dispatch(clearResponse());
      dispatch(addFavClose());
    }
  }, [response]);

  return (
    <section className="add-fav">
      <div className="add-fav__form-container">
        <Form className="add-fav__form" onSubmit={handleSubmit}>
          <Form.Group className="add-fav__mb-3" controlId="formBasicTitle">
            <Form.Label>Fav Title: </Form.Label>
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
            <Form.Label>Fav Description: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              className="add-fav__input"
            />
          </Form.Group>

          <Form.Group className="add-fav__mb-3" controlId="formBasicLink">
            <Form.Label>Fav Link: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Link"
              className="add-fav__input"
            />
          </Form.Group>
          <div className="add-fav__buttons-container">
            <Button
              variant="primary"
              type="submit"
              className="add-fav__add-button"
            >
              Add
            </Button>
            <Button
              variant="primary"
              className="add-fav__cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default AddFavForm;
