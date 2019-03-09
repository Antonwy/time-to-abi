import React from 'react'
import FlipNumber from './FlipNumber';


const Number = ({number, text, height}) => {
  return (
    <div className="numberContainer">
        <div>
            {
              String(number).split('').map((item, i) => (
                <FlipNumber height={height} key={i} number={item} />
              ))
            }
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Number
