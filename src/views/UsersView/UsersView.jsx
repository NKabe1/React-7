import { Container, Card, Button } from "react-bootstrap";
import { useFetchUsers } from "./hooks/useFethchUsers";
import { useState } from "react";
import { UserDetailModal } from "./components/UserDetailsModal";
import { useUsersDescription } from "./hooks/useUsersDescription";

export function UsersView() {
  const { users, loading } = useFetchUsers();
  const [userModal, setUserModal] = useState({ show: false });
  const { getUserById } = useUsersDescription();

  const selectedUser = getUserById(userModal.user);

  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: "1rem",
      }}
    >
      <UserDetailModal
        show={userModal.show}
        user={selectedUser}
        onHide={() => setUserModal({ show: false })}
      />
      {users.map((user) => {
        return (
          <Card style={{ width: "18rem" }} key={user.id}>
            <Card.Img
              variant="top"
              src={user.image}
              style={{ width: "50px" }}
            />
            <Card.Body>
              <Card.Title>
                {user.firstName} {user.lastName}
              </Card.Title>
              <Button
                variant="primary"
                onClick={() => setUserModal({ show: true, user: user.id })}
              >
                See user description
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
