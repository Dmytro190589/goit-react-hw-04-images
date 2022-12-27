import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';


export default function Searchbar({ onSubmit }) {
    const [request, setRequest] = useState('')

    const handleChange = e => {
        setRequest(e.currentTarget.value.toLowerCase())
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (request.trim() === '') {
            return alert('Please,enter your request')
        }
        onSubmit(request);
        setRequest('');
    }

    return (
        <header
            className={css.searchbar}
        >
            <form onSubmit={handleSubmit}
                className={css.form}
            >
                <button type="submit"
                    className={css.button}
                >
                    <ImSearch />
                </button>

                <input
                    className={css.input}
                    type="text"
                    name="request"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={request}
                    onChange={handleChange}
                />
            </form>
        </header>
    )

}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}




