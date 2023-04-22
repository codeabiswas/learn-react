import { Container } from "react-bootstrap";

// Defining as function components since class components are becoming outdated.
const AboutPage = () => {
  return (
    <>
      <Container fluid>
        <h1>This is the about page!</h1>
        <p>
          This is a project to learn React and implement a full-stack site. I am
          following the "React: Creating and Hosting a Full-Stack Site" course
          on LinkedIn. One caveat is that I am using React Bootstrap too to
          learn more about the front-end framework library.
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
