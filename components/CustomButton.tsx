"use client"
import React from 'react'
import { ButtonProps } from '@/types'

function CustomButton(props:ButtonProps) {
    let {title,containerStyles,handleClick,btnType} = props
  return (
    <div>
      <button
      disabled={false}
      type={'button' || btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      >
      <span className={`flex-1`}>{title}</span>
      </button>
    </div>
  )
}

export default CustomButton
