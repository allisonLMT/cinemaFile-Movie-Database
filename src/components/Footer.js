import React from 'react';
import styles from '../styles/footer.module.css';


function Footer() {
    const d = new Date();
    const year = d.getFullYear(); 

    return (
        <div className={styles.footer}>
            <p>&copy;{year} Allison Tredwell</p>
            <p>For educational purposes.</p>
        </div>
    )
}

export default Footer;