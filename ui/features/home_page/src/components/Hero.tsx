import React from 'react'
import styles from '../HomePage.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
        Selamat Datang di Ruang Belajar
        <br />
        Digital
      </h1>
      <p className={styles.heroSubtitle}>
        Akses materi perkuliahan, tugas, dan diskusi interaktif dari mana saja.
        <br />
        Tingkatkan pengalaman belajarmu bersama BPPI LMS.
      </p>
      <a
        href="/login/canvas"
        className={styles.loginButton}
        style={{fontSize: '1rem', padding: '0.8rem 2rem'}}
      >
        Mulai Belajar
      </a>
    </section>
  )
}

export default Hero
