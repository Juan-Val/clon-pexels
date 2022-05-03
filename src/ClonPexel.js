import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Fooder } from './components/Fooder'
import { Header } from './components/Header'
import { ZoomImage } from './components/ZoomImage'

export const ClonPexel = () => {
  return (
    <div className='relative h-screen justify-between flex flex-col'>
      <Header />
      <Routes >
        <Route path="/" index element={<App />} />
        <Route path="image" element={<ZoomImage/>} />
        <Route path="image/:id" element={<ZoomImage/>} />

      </Routes>
      <Fooder />
    </div>
  )
}
