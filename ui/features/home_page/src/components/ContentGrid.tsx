import React from 'react'
import {ToggleDetails} from '@instructure/ui-toggle-details'
import {Calendar} from '@instructure/ui-calendar'
import {View} from '@instructure/ui-view'
import {Text} from '@instructure/ui-text'
import styles from '../HomePage.module.css'

const ContentGrid = () => {
  return (
    <div className={styles.mainLayout}>
      <div>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pengumuman Terbaru</h2>
          {/* Kotak abu-abu di tengah untuk pesan kosong */}
          <div
            style={{
              textAlign: 'center',
              padding: '2.5rem 1rem',
              background: '#f8fafc',
              border: '1px dashed #cbd5e1',
              borderRadius: '8px',
              color: '#64748b',
              fontSize: '0.9rem',
            }}
          >
            Belum ada pengumuman baru untuk saat ini.
          </div>
        </section>

        <section className={styles.section}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <h2 className={styles.sectionTitle} style={{marginBottom: 0}}>
              Kategori Kelas
            </h2>
            <a
              href="#"
              style={{
                color: '#3b82f6',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              Lihat Semua
            </a>
          </div>
          <div style={{border: '1px solid #e2e8f0', borderRadius: '8px'}}>
            <ToggleDetails
              summary={
                <Text weight="bold" size="medium">
                  Semester Genap 2025/2026
                </Text>
              }
              style={{padding: '0.5rem'}}
            >
              <View padding="medium">
                <p style={{color: '#64748b'}}>Daftar kelas belum tersedia.</p>
              </View>
            </ToggleDetails>
          </div>
        </section>
      </div>

      <aside>
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Aktivitas Jaringan</h3>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px'}}>
            {/* Titik Hijau */}
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
              }}
            ></div>
            <strong style={{fontSize: '0.95rem', color: '#1e293b'}}>45 Pengguna Aktif</strong>
          </div>
          <p style={{fontSize: '0.85rem', color: '#64748b', marginLeft: '20px'}}>
            Dalam 5 menit terakhir
          </p>
        </div>

        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>Mei 2026</h3>
          <Calendar />
        </div>
      </aside>
    </div>
  )
}

export default ContentGrid
