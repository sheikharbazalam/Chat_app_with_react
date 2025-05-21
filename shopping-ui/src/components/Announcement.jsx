import styled from "styled-components";
import Marquee from "react-fast-marquee";
const Container = styled.div`
  height: 20px;
  background-color: teal;
  color: white;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>
      <Marquee>Super Deal Hurry Up 60% oFF</Marquee>
    </Container>
  );
};

export default Announcement;
