import React from 'react'
import styles from '../HomePage.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Belajar Lebih Terarah</h1>
      <p className={styles.heroSubtitle}>
        Akses kelas, materi, tugas, nilai, dan komunikasi pembelajaran dari satu tempat yang aman dan mudah digunakan.
      </p>
      <a href="/login/canvas" className={styles.loginButton} style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
        Mulai Belajar Sekarang
      </a>
    </section>
  )
}

export default Hero
