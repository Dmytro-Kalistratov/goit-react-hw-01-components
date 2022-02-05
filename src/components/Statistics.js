import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(el => (
          <li class="item" key={el.id}>
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}</span>
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
