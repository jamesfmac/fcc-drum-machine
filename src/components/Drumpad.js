import React from 'react'

import {Padpanel, Pad, Display, Controlpanel, Board} from './Styled'
import Toggle from './Toggle'
import VolumeSlide from './VolumeSlide'

import {bankOne, bankTwo} from '../utils/Data'


class Drumpad extends React.Component {

constructor(props){
    super(props)
    this.state = {
        power: true,
        bank: bankOne, 
        bankToggle: false,
        volume: 30,
        lastPlayed: '',
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.playSound = this.playSound.bind(this)
    this.handleSlider = this.handleSlider.bind(this)
}


componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    let sound = this.state.bank.filter(x => x.keyCode ===e.which)
    if(sound.length > 0){
      this.playSound(sound[0].keyTrigger, sound[0].id)
    }
  }
  
handleClick(keyTrigger, id,e){
  this.playSound(keyTrigger,id)
  e.preventDefault()
}


playSound(keyTrigger, id){
  if(this.state.power){
    let  clip = document.getElementById(keyTrigger)
    clip.volume = this.state.volume/100
    clip.currentTime = 0;
    clip.play()
    this.setState({
      lastPlayed:id
  })
  }
}

handleToggle(control){
    control === 'Power' ? this.switchPower() : this.changeBank()
}

switchPower(){
  this.setState({
      power: !this.state.power,
      lastPlayed: !this.state.power ? 'Power On' : 'Power Off'
  })
}

handleSlider(e){
  console.log(e.input)
  this.setState({
    volume: e.target.value
  })
}

changeBank(){
  if(this.state.power){
    if(this.state.bank === bankOne){
      this.setState({
        bank: bankTwo,
        lastPlayed: 'Bank Two',
        bankToggle: !this.state.bankToggle
      })
    } else{
      this.setState({
        bank: bankOne,
        lastPlayed: 'Bank One',
        bankToggle: !this.state.bankToggle
      })

    }
  }
}

render(){
      const Pads =  this.state.bank.map((x)=>{
        return(
            <Pad
            className = 'drum-pad'
            id = {x.id}
            key = {x.id}
            onClick = {(e)=> this.handleClick(x.keyTrigger,x.id,e)}
            > 
            <audio 
                class = 'clip' 
                id = {x.keyTrigger} 
                src ={x.url}> 
            </audio>
        {x.keyTrigger} 
    
    </Pad>
        )
    })


        return(
            <Board id = 'drum-machine'> 
              <Padpanel>
               {Pads}
              </Padpanel>
              <Controlpanel id = 'controls'>
                <Toggle 
                    controlOver = 'Power' 
                    active= {this.state.power} 
                    handleToggle = {this.handleToggle}
                />
                
                <Display id = 'display'> 
                {this.state.lastPlayed}
                </Display>
                <Toggle 
                    controlOver = 'bank' 
                    active= {this.state.bankToggle} 
                    handleToggle = {this.handleToggle}
                />
                <VolumeSlide
                value = {this.state.volume}
                onChange = {this.handleSlider}
                />
               
            </Controlpanel>
            </Board>
        )
    }
}
export default Drumpad;