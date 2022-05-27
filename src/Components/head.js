import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/head.css";
import btn from "../images/Vector.png";
import logo from "../images/Union 1.png";
import icons from "../images/search.png";
export default function HeadBar(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="head">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input type="text" placeholder="First Name" name="firstName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input type="email" placeholder="Email" name="email" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create account
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="logo">
        <span className="green">ATG.</span>
        <span className="black">
          W<img className="head-logo" src={logo} />
          RLD
        </span>
      </div>
      <div className="search">
        <input
          type="search"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <div className="right">
        <span>Create account.</span>
        <span className="blue">It's free!</span>
        <button className="head-btn" onClick={handleShow}>
          <img src={btn} />
        </button>
      </div>
    </div>
  );
}
