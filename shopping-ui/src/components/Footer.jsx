import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PaymentIcon from "@mui/icons-material/Payment";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  background-color: #555555;
  color: #b9b0b7;

  ${mobile({ flexDirection: "column" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px; 0px;

`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin:bottom:10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DRJD</Logo>
        <Desc>
          The content of this site is copyright-protected and is the property of
          DRJS AB. DRJDs business concept is to offer fashion and quality at the
          best price in a READ MORE
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>helpful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FmdGoodIcon style={{ marginRight: "10px" }} />
          Dilshad Garden Metro, Delhi,110095
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +919354537738
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          azone2426@gmail.com
        </ContactItem>
        <PaymentIcon style={{ marginRight: "10px" }} />
        Pay
      </Right>
    </Container>
  );
};

export default Footer;
