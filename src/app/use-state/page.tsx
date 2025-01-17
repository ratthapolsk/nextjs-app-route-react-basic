'use client';
import React, { Fragment, useState } from 'react'

interface User {
  name: string;
  age: number;
  education: {
    degree: string;
    school: string;
  };
}

const UseStatePage = () => {
  const [users, setUsers] = useState<User>({
    name: 'John Doe',
    age: 25,
    education: {
      degree: 'Masters',
      school: 'Harvard'
    }
  })

  const updateUser = () => {
    setUsers({
      name: 'Jane Doe',
      age: 30,
      education: {
        degree: 'PhD',
        school: 'MIT'
      }
    })
  }

  const updateUser2 = () => {
    setUsers(prevState => ({
      ...prevState,
      age: 100,
      name: 'Mice Doe',
      someNewField: 'someNewValue'
    }))
  }

  return (
    <>
      <div>{JSON.stringify(users)}</div>
      <div style={{ display: "flex", flexDirection: 'column', gap: '1rem', alignItems: "flex-start" }}>
        <button type="button" onClick={() => { updateUser() }}>Update User</button>
        <button type="button" onClick={() => { updateUser2() }}>Update User 2</button>
      </div>
    </>
  )
}

export default UseStatePage
