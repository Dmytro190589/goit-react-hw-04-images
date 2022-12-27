import css from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
    const handleClick = () => {
        onClick();
    };

    return (
        <button
            type="button"
            className={css.button}
            onClick={handleClick}
        >
            Load more
        </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
