import React, { Fragment } from 'react'

const ChildComponent1 = () => {
  return (
    <div>
      <div>Child Component1 - 1</div>
      <div>Child Component1 - 2</div>
    </div>

  )
}

const ChildComponent2 = () => {
  return (
    <>
      <div>Child Component2 - 1</div>
      <div>Child Component2 - 2</div>
    </>
  )
}

const FragmentPage = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <ChildComponent1 />
      <ChildComponent2 />
    </div>
  )
}

export default FragmentPage
