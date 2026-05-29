import React from 'react'
import { Flex } from '@instructure/ui-flex'
import { IconPhoneLine, IconEmailLine } from '@instructure/ui-icons'
import styles from '../HomePage.module.css'

const TopHeader = () => {
  return (
    <div className={styles.topHeader}>
      <Flex justifyItems="space-between" alignItems="center">
        <Flex.Item>
          <Flex gap="medium">
            <Flex.Item>
              <Flex gap="small" alignItems="center">
                <IconPhoneLine inline size="x-small" />
                <span>+62 22 1234567</span>
              </Flex>
            </Flex.Item>
            <Flex.Item>
              <Flex gap="small" alignItems="center">
                <IconEmailLine inline size="x-small" />
                <span>info@bppi.ac.id</span>
              </Flex>
            </Flex.Item>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <span>BPPI Learning Management System</span>
        </Flex.Item>
      </Flex>
    </div>
  )
}

export default TopHeader
