import React from 'react'
import {Flex} from '@instructure/ui-flex'
import styles from '../HomePage.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Flex justifyItems="space-between" alignItems="center">
        <Flex.Item>
          {/* Logo BPPI dan Teks Elearning BPPI */}
          <a
            href="#"
            className={styles.navbarBrand}
            style={{display: 'flex', alignItems: 'center', gap: '12px'}}
          >
            <img
              src="/images/custom_logo/Elearning_BPPI2.png"
              alt="Logo BPPI"
              style={{height: '36px', width: 'auto'}}
            />
            <span style={{color: '#0f172a'}}>Elearning BPPI</span>
          </a>
        </Flex.Item>
        <Flex.Item>
          <Flex justifyItems="end" gap="large">
            <a href="#" className={styles.navLink} style={{color: '#2563eb', fontWeight: 600}}>
              Beranda
            </a>
            <a href="#" className={styles.navLink}>
              Profil Sekolah
            </a>
            <a href="#" className={styles.navLink}>
              Katalog Kursus
            </a>
            <a href="#" className={styles.navLink}>
              Informasi SPMB
            </a>
          </Flex>
        </Flex.Item>
      </Flex>
    </nav>
  )
}

export default Navbar
