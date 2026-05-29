import React from 'react'
import { ToggleDetails } from '@instructure/ui-toggle-details'
import { Calendar } from '@instructure/ui-calendar'
import { View } from '@instructure/ui-view'
import { Text } from '@instructure/ui-text'
import styles from '../HomePage.module.css'

const ContentGrid = () => {
  return (
    <div className={styles.mainLayout}>
      <div>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Site Announcements</h2>
          <p style={{ color: '#64748b' }}>(Tidak ada topik diskusi dalam forum ini)</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kategori Kursus</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <ToggleDetails summary={<Text weight="bold">Semester Ganjil 2025/2026</Text>}>
              <View padding="medium">
                <ul>
                  <li>Teknik Informatika</li>
                  <li>Sistem Informasi</li>
                  <li>Manajemen</li>
                </ul>
              </View>
            </ToggleDetails>
            
            <ToggleDetails summary={<Text weight="bold">Fakultas Teknik</Text>}>
              <View padding="medium">
                <p>Daftar mata kuliah rumpun teknik.</p>
              </View>
            </ToggleDetails>

            <ToggleDetails summary={<Text weight="bold">Mata Kuliah Umum</Text>}>
              <View padding="medium">
                <p>Bahasa Indonesia, Agama, Kewarganegaraan.</p>
              </View>
            </ToggleDetails>
          </div>
        </section>
      </div>

      <aside>
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Pengguna Online</h3>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
            <strong>45</strong> pengguna daring (5 menit terakhir)
          </p>
        </div>

        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Kalender</h3>
          <Calendar />
        </div>
      </aside>
    </div>
  )
}

export default ContentGrid
