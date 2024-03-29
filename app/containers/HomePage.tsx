import React from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import styles from './Container.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Menu />
      <Home />
    </div>
  );
}
