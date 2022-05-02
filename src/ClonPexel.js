import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import { Fooder } from './components/Fooder'
import { Header } from './components/Header'
import { ZoomImage } from './components/ZoomImage'

export const ClonPexel = () => {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="image" element={<ZoomImage/>} />
        <Route path="image/:id" element={<ZoomImage/>} />

      </Routes>
      <Fooder />
    </>
  )
}
