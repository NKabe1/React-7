import { Modal, ModalHeader } from "react-bootstrap";

export function UserDetailModal({ show, user, onHide, payload }) {
  return (
    <Modal show={show} onHide={onHide}>
      <ModalHeader closeButton>
        <Modal.Title>
          {<img src={user?.image} style={{ height: "150px" }} />}
          {user?.firstName} {user?.lastName}
        </Modal.Title>
      </ModalHeader>
      <Modal.Body>
        <p>City: {user?.city}</p>
        <p>Birth date: {user?.birthDate}</p>
        <p>Age: {user?.age}</p>
        <p>Gender: {user?.gender}</p>
        <p>Height: {user?.height}</p>
        <p>Weight: {user?.weight}</p>
      </Modal.Body>
    </Modal>
  );
}
