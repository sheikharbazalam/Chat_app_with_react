import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  position: relative;
`;
const Title = styled.p`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 600;
`;
const ImageContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Newarrival = () => {
  return (
    <Container>
      <Title>New Arrivals</Title>
      <ImageContainer>
        <Marquee style={{ padding: "20px" }}>
          <img
            src="https://image.hm.com/assets/hm/04/93/04935f5cab5b32bd862b1926fbd7ab38baa52fe4.jpg?imwidth=384"
            alt="1"
          />

          <img
            src="https://image.hm.com/assets/hm/ac/1e/ac1ea1682a83b6ee4c59321e3cfe1852d9d63129.jpg?imwidth=384"
            alt="2"
          />

          <img
            src="https://image.hm.com/assets/hm/02/a7/02a7febc05501753af11b271b0e14416fadeed75.jpg?imwidth=384"
            alt="3"
          />
          <img
            src="https://image.hm.com/assets/hm/7d/b1/7db1ecaed528a35fb34348b218166213f0002ed4.jpg?imwidth=384"
            alt="4"
          />

          <img
            src="https://image.hm.com/assets/hm/ea/18/ea18e6b8886c855f30f9ec2603e0a3a521c0aca8.jpg?imwidth=384"
            alt="5"
          />

          <img
            src="https://image.hm.com/assets/hm/32/ba/32bada8b31659567bba4cc2e3d22d6eec7583d79.jpg?imwidth=384"
            alt="6"
          />
        </Marquee>
      </ImageContainer>
    </Container>
  );
};
export default Newarrival;
