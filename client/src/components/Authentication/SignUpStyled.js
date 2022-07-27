import styled from "styled-components";

export const Containter = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content: center;
background: -webkit-linear-gradient(to right, #f64f59,);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

export const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
`

export const Title = styled.h1`
font-size: 34px;
font-weight: 600;
`

export const Form = styled.form`
display: flex;
flex-wrap: wrap;

`

export const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`

export const Button = styled.button`
width:40%;
border:none;
padding: 15px 20px;
background-color: cyan;
margin-top: 20px;
font-size: 20px;


`