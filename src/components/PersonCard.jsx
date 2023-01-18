import React, {useState} from 'react'

const PersonCard = props => {



  return (
    <div>
      <h1>{props.lastName}, {props.name}</h1>
      <p>{props.age}</p>
      <p>{props.hairColor}</p>
    </div>
  )
}

export default PersonCard