import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', gap: '1rem' }}>
      <Link href={'/use-state'}>UseState</Link>
      <Link href={'/use-reducer'}>UseReducer</Link>
      <Link href={'/use-effect'}>UseEffect</Link>
      <Link href={'/use-ref'}>UseRef</Link>
      <Link href={'/fragment'}>Fragment</Link>
    </div>
  )
}

export default Home
