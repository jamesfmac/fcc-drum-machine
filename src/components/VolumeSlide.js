import React from 'react'
import styled from 'styled-components'



const Slider = styled.input`
width: 100%;
height:20px;
background-color: black;
border: 1px solid black;
padding: 1px;
display: flex;
flex-direction:row;

    
  }
  `

  class VolumeSlide extends React.Component{

    render(){
        return(
            <div>
            <div> Volume </div>
            <Slider 
            type = 'range'
            min = {0}
            max = {100}
            value = {this.props.value} 
            onChange = {(e)=>this.props.onChange(e)}/>
            </div>
        )

    }

  }

  export default VolumeSlide