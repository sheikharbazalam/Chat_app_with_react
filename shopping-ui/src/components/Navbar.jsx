import React from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px; /* Adjust padding for desktop */
  display: flex;
  align-items: center;
  justify-content: space-between; /* Center the elements horizontally */
  ${mobile({
    padding: "10px" /* Adjust padding for mobile */,
    justifyContent: "center" /* Center the elements horizontally in mobile */,
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ flex: 1, justifyContent: "flex-end" })}
`;

const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DRJD</Logo>
        </Center>
        <Right>
          <MenuItem href="#">SignUp</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
