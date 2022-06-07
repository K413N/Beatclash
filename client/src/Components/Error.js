import styled from "styled-components";

const Error = () => {
    return(
        <Wrapper>
        <div>Error!</div>
        </Wrapper>
    )
};

export default Error;

const Wrapper = styled.div`
margin-top: ${(props) => (props.chat === true ? "290px" : "70px")};
background-color: gray;
position: relative;
width: 100%;
height: 100%;
`