import { Container } from "react-bootstrap";
// Defining as function components since class components are becoming outdated.
const HomePage = () => {
  return (
    <>
      <Container fluid>
        <h1>This is the home page!</h1>
        <p>Hello world!</p>
      </Container>
    </>
  );
};

export default HomePage;
