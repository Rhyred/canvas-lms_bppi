import React from 'react'
import { InstUISettingsProvider } from '@instructure/emotion'
import { canvas } from '@instructure/ui-themes'
import TopHeader from './components/TopHeader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContentGrid from './components/ContentGrid'
import Footer from './components/Footer'

import styles from './HomePage.module.css'

const App = () => {
  return (
    <InstUISettingsProvider theme={canvas}>
      <div className={styles.homePage}>
        <TopHeader />
        <Navbar />
        <Hero />
        <ContentGrid />
        <Footer />
      </div>
    </InstUISettingsProvider>
  )
}

export default App
