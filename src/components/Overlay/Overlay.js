import React from 'react'
import './Overlay.scss';
export function Overlay(props) {
  return (
    <div className='overlay'>
      <h2>Press hotkey for {props.keyName}</h2>
    </div>
  )
}
