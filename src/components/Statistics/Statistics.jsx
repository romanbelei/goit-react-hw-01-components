import PropTypes from "prop-types";
import s from "./Statistics.module.css"

const Statistics = ({
    title,
    stats,
}) => {
    return (
<section className={s.statistics}>
  <h2 className={s.title}>{title}</h2>

  <ul className={s.statList}>
          <li className={s[`${stats[0].label.slice(1)}`]}>
            <span className={s.label}>{stats[0].label}</span>
            <span className={s.percentage}>{stats[0].percentage}%</span>
        </li>
        <li className={s[`${stats[1].label.slice(1)}`]}>
                <span className={s.label}>{stats[1].label}</span>
          <span className={s.percentage}>{stats[1].percentage}%</span>
        </li>
        <li className={s[`${stats[2].label.slice(1)}`]}>
                <span className={s.label}>{stats[2].label}</span>
          <span className={s.percentage}>{stats[2].percentage}%</span>
        </li>
            <li className={s[`${stats[3].label.slice(1)}`]}>
                <span className={s.label}>{stats[3].label}</span>
            <span className={s.percentage}>{stats[3].percentage}%</span>
        </li>
  </ul>
</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

export default Statistics;