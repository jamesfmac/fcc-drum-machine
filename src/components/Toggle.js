import React from 'react'
import styled from 'styled-components'

const Slide = styled.div`
width: 50px;
height:20px;
background-color: black;
border: 1px solid black;
padding: 1px;
display: flex;
flex-direction:row;
margin-top: 3px;
justify-content: ${props => props.active ? "flex-end" : "flex-start"};
`

const Marker = styled.div`
width:23px;
height:19px;
background-color: blue;
border: 1px solid black;
`

class Toggle extends React.Component {

render(){
    console.log(this.props)
    return (
        <div onClick = {()=>this.props.handleToggle(this.props.controlOver)}>
            <span>{this.props.controlOver.charAt(0).toUpperCase() + this.props.controlOver.slice(1)}</span>
            <Slide active = {this.props.active}>
                <Marker> </Marker>
            </Slide>
        </div>

    )
}

}
export default Toggle