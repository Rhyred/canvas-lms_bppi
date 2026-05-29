import React from 'react'
import { Flex } from '@instructure/ui-flex'
import styles from '../HomePage.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Flex justifyItems="space-between" alignItems="center">
        <Flex.Item>
          <div className={styles.navbarBrand}>
            BPPI <span>LMS</span>
          </div>
        </Flex.Item>
        <Flex.Item grow shrink>
          <Flex justifyItems="center" gap="medium">
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>Courses</a>
            <a href="#" className={styles.navLink}>About</a>
            <a href="#" className={styles.navLink}>Contact</a>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <a href="/login/canvas" className={styles.loginButton}>
            Login to LMS
          </a>
        </Flex.Item>
      </Flex>
    </nav>
  )
}

export default Navbar
