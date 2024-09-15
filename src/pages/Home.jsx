import React from 'react'
import Hero from '../components/Hero'
import Generator from '../components/Generator'
import WOrkout from '../components/WOrkout'

const Home = () => {
  return (
    <div className="text-black  min-h-[100vh] w-full">
    <Hero />
    <Generator />
  </div>
  )
}

export default Home