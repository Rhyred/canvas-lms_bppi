import React from 'react'
import {Flex} from '@instructure/ui-flex'
import styles from '../HomePage.module.css'

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <Flex justifyItems="space-between" alignItems="center">
        <Flex.Item>
          <Flex gap="medium">
            <Flex.Item>
              <Flex gap="small" alignItems="center">
                <span>📞 +62 21 1234567 ext 123</span>
              </Flex>
            </Flex.Item>
            <Flex.Item>
              <Flex gap="small" alignItems="center">
                <span>📧 lms@bppi.ac.id</span>
              </Flex>
            </Flex.Item>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <span style={{color: '#cbd5e1'}}>
            Anda belum login.{' '}
            <a
              href="/login/canvas"
              style={{color: '#60a5fa', textDecoration: 'none', fontWeight: 'bold'}}
            >
              Masuk ke Sistem →
            </a>
          </span>
        </Flex.Item>
      </Flex>
    </div>
  )
}

export default TopHeader
