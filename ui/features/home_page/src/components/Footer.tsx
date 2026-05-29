import React from 'react'
import { Flex } from '@instructure/ui-flex'
import styles from '../HomePage.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div>
          <h3 className={styles.footerTitle}>Tentang BPPI LMS</h3>
          <p>
            Portal pembelajaran digital resmi BPPI untuk mendukung kegiatan akademik yang modern, fleksibel, dan terintegrasi.
          </p>
        </div>
        <div>
          <h3 className={styles.footerTitle}>Tautan Cepat</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'inherit' }}>Panduan Mahasiswa</a></li>
            <li><a href="#" style={{ color: 'inherit' }}>Panduan Dosen</a></li>
            <li><a href="#" style={{ color: 'inherit' }}>Kebijakan Privasi</a></li>
          </ul>
        </div>
        <div>
          <h3 className={styles.footerTitle}>Hubungi Kami</h3>
          <p>Jl. PH.H. Mustofa No.23, Bandung</p>
          <p>Email: humas@bppi.ac.id</p>
          <p>Telp: +62 22 7272215</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #334155' }}>
        <p>© 2026 BPPI Learning Management System. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
