import { Container } from "react-bootstrap";

// Defining as function components since class components are becoming outdated.
const NotFoundPage = () => {
  return (
    <>
      <Container fluid>
        <h1>404: Page not found</h1>
      </Container>
    </>
  );
};

export default NotFoundPage;
