"use client"
import styles from "../shared/FolderContent.module.css"
import { Mail, Phone, Globe } from "lucide-react"

export default function ContactFolder() {
  return (
    <div className={styles.folderContainer}>
      <h1 className={styles.folderTitle}>Contact Information</h1>

      <div className={styles.contactCard}>
        <div className={styles.contactItem}>
          <Mail size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Email</span>
            <a href="mailto:vallejossantiago1412@gmail.com" className={styles.contactValue}>
              vallejossantiago1412@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Phone size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Phone</span>
            <a href="tel:+5493795117490" className={styles.contactValue}>
              +54 9 379-5117490
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Globe size={24} className={styles.contactIcon} />
          <div className={styles.contactDetails}>
            <span className={styles.contactLabel}>Website</span>
            <a
              href="https://santiagodev.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactValue}
            >
              santiagodev.netlify.app
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
