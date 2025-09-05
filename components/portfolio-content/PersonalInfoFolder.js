"use client"
import styles from "../shared/FolderContent.module.css"

export default function PersonalInfoFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Personal Information</h1>

      <div className={styles.infoCard}>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Name:</span>
          <span className={styles.infoValue}>Santiago Vallejos</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Location:</span>
          <span className={styles.infoValue}>Argentina</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Availability:</span>
          <span className={styles.infoValue}>Immediate</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Location Preference:</span>
          <span className={styles.infoValue}>Open to relocate</span>
        </div>
      </div>
    </div>
  )
}
