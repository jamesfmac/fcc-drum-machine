import styled from 'styled-components';

export const Wrapper = styled.div `
display:flex;
flex-direction:column;
align-items: center; 
justify-content: center;
height: 100vh;
background-color:#8d8d8d;
`

export const Display = styled.div`
    width: 200px;
    background-color: gray;
    margin: 5px auto;
    box-sizing: border-box;
    height:40px;
    line-height: 40px;

`
export const Pad = styled.button`
    width: 100px;
    height: 80px;
    margin-right: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    vertical-align: middle;
    :focus { outline: none; }
`

export const Controlpanel = styled.div`

display:flex;
flex-direction: column;
width: 250px;
align-items: center;
justify-content: space-evenly;
padding-top: 20px;
padding-bottom: 20px;
text-align:center;
`
export const Padpanel = styled.div`
display:flex;
flex-direction:row;
margin: 20px;
flex-wrap: wrap;
width: 332px;
height: 272px;
`


export const Board = styled.div`
border: 5px solid orange; 
max-width: 75%;
min-width:25%;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:space-around;
background-color: #b3b3b3 ;
`