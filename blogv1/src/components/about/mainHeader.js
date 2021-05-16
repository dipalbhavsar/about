import styled from "@emotion/styled";
import React from "react";
// import Image from '../../components/image';
import background from '../../images/DipalFamily.jpg';

// import styled from "styled-components";

const Main = styled.section`
    padding: 60px 0px;
    overflow: hidden;
    display: flex !important;
    flex-direction: column !important;
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
    background:url(${background}) center top / cover;
`

const MainHeader = () => {    
    return( 
    <Main>This is for testing</Main>);
}

export default MainHeader