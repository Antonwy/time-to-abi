import React, { Component } from 'react'
import posed from 'react-pose';

const AnimatedNumber = posed.h1({
    middle: {y: 0, transition: {duration: 400}},
    top: {y: "-105%"},
    fastBottom: {y: "105px", transition: {duration: 0}},
    bottom: {y: "105%"},
})

export default class FlipNumber extends Component {

    state = {
        defNumber: 0,
        number: 0,
        animation: "middle"
    }

    componentDidUpdate() {
        const {state, props} = this
        if(state.defNumber !== props.number) {
            this.setState({
                defNumber: props.number,
                animation: "top"
            })
            setTimeout(() => {
                this.setState({animation: "fastBottom"}, () => {
                    setTimeout(() => {
                        this.setState({animation: "middle", number: props.number})
                    }, 50);
                })
            }, 450);
        }
    }

  render() {
      const {animation} = this.state;
    return (
      <div className="flipContainer">
        <AnimatedNumber
            pose={animation}
        >{this.state.number}
        </AnimatedNumber>
      </div>
    )
  }
}
