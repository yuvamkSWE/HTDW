import React from 'react';
import styles from './ContApp.module.css';

function ProfileCard({ name }) {
  return (
    <section className={styles.profileCard}>
      <p className={styles.profileGreeting}>Hi! I'm</p>
      <h3 className={styles.profileName}>{name}</h3>
    </section>
  );
}

export default ProfileCard;