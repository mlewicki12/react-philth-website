
import styles from './style.module.scss';
import daydrunks from './daydrunks.jpg';

const Highlights = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlightsContainer}>
        <img
          src={daydrunks}
          alt='Daydrunks at Wharf Arts Center (2/28/2020)'
        />
        <div className={styles.highlightsOverlay}>
          Daydrunks at Wharf Arts Center (2/28/2020)
        </div>
      </div>
    </div>
  )
}

export default Highlights;