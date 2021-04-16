import styled from "styled-components";
import Link from "next/link";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Ooops! That page cannot be found :(</h2>
      <p>
        Redirecting to <Link href="/">Homepage</Link> for more marmite
        goodness...
      </p>
    </NotFoundContainer>
  );
};

export default NotFound;

// Styles
const NotFoundContainer = styled.div`
  background: #fff;
  padding: 30px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  transform: rotateZ(-1deg);

  h1 {
    font-size: 3rem;
  }
`;
