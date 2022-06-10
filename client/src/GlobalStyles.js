import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const breakpoints = { tablet: "600px" };


export default createGlobalStyle`
    :root {
      --primary-color: #333;
      --accent-bg-color: darkred;
      --page-horizontal-padding: 20px;
      --header-height: 50px;
      --max-content-width: 1200px;
      --heading-font-family: 'Teko', sans-serif;
      --user-img-width: 120px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        background-color: black;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
      color: var(--primary-color);
      font-family: var(--heading-font-family);
    }
    h2 {
      font-size: 28px;
    }
`;

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #222;
color: gold;
font-size: 40px;
padding-top: 6px;
border-bottom-style: solid;
border-bottom-color: red;
border-bottom-width: 1px;
`

export const PageWrapper = styled.div`
background-color: #333;
position: relative;
margin-top: 0;
width: 60%;
height: 100%;
border-style: solid;
border-color: gray;
border-width: 1px;
`