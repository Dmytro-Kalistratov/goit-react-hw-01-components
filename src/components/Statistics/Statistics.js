import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import randomColor from 'utils/colorRandomize';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(el => (
          <li
            className={styles.item}
            style={{ backgroundColor: randomColor() }}
            key={el.id}
          >
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
