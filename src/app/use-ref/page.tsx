'use client';
import React, { forwardRef, useRef } from 'react'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type, children }, ref) => {
  return (
    <button ref={ref} type={type} onClick={() => { alert("Click me") }}>{children}</button>
  )
})

const UseRefPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleClick = () => {
    const target = inputRef.current;
    target?.focus();
  }

  const handleViewInputData = () => {
    const target = inputRef.current;
    const inputValue = target?.value;
    alert(inputValue);
  }

  const handleClickUpperButton = () => {
    const target = buttonRef.current;
    target?.click();
  }

  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '1rem', alignItems: "flex-start" }}>
      <input ref={inputRef} type="text" placeholder='type something...' />
      <button type="button" onClick={handleClick}>Input Focus</button>
      <button type="button" onClick={handleViewInputData}>View Input Data</button>
      <Button ref={buttonRef} type='button'>Click me</Button>
      <button type="button" onClick={handleClickUpperButton}>Click upper button</button>
    </div>
  )
}

export default UseRefPage
