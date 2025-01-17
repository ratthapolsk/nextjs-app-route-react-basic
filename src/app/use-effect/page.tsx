'use client';
import React, { useEffect, useState } from 'react'
// import { JsonView, allExpanded, darkStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

interface User {
  id: number;
  name: string;
}

const UseEffectPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [count, setCount] = useState<number>(0)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // useEffect(arrowFunction, []) // [] means it will only run once
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async (response) => {
        return await response.json()
      })
      .then(data => {
        if (!data) return;
        setUsers(data)
      })
  }, [])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        }
      });

    return ()=> controller.abort()
  }, [])


  useEffect(() => {
    if (users) {
      setLoading(false)
    }
  }, [users])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {
        users.map((user, index) => (
          <div key={index + 1}>
            <div>{user.id}</div>
            <div>{user.name}</div>
          </div>
        ))
      }
      {/* <JsonView data={users} shouldExpandNode={allExpanded} style={darkStyles} /> */}
    </div>
  )
}

export default UseEffectPage
