import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Context } from "./Context";

const Auth0Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { setProfileUrl, setAuthUrl } = useContext(Context);

  if (!user) {
    return <div></div>;
  }

  const slicedurl = user.sub.slice(6, user.sub.length);

  setAuthUrl(slicedurl);
  setProfileUrl(slicedurl);



  return (
    isAuthenticated && (
      <Wrapper>
        <NavImg src={user.picture} alt={user.name} />
        <NavUser>{user.name}</NavUser>
      </Wrapper>
    )
  );
};

export default Auth0Profile;

const NavUser = styled.h2`
font-size: 22px;
padding: 0 16px 0 16px;
color: white;
`

const NavImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

const Wrapper = styled.div`
position: absolute;
display: flex;
flex-direction: row;
align-items: center;
width: 400px;
height: 40px;
top: 74px;
background-color: #333;
z-index: 20;
border-radius: 15px;
`