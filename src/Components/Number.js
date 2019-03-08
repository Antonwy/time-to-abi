import React from 'react'
import FlipNumber from './FlipNumber';


const Number = ({number, text}) => {
  return (
    <div className="numberContainer">
        <div>
            <FlipNumber number={number[0]} />
            <FlipNumber number={number[1]} />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Number
