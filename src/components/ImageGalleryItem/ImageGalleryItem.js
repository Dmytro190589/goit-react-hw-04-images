import { useState } from 'react';
import css from './ImageGalleryItem.module.css'
import Modal from "components/Modal/Modal";
import PropTypes from 'prop-types';


export default function ImageGalleryItem({ webformatURL, picture, id }) {
    const [largeImageURL, setLargeImageURL] = useState(null)

    const onClickPicture = e => {
        setLargeImageURL(e.currentTarget.dataset.open)
    }
    const closeModal = () => {
        setLargeImageURL(null);
    }

    return (
        <li
            className={css.ImageGalleryItem}
        >
            <img
                className={css.GalleryItem}
                src={webformatURL}
                alt={id}
                data-open={picture.largeImageURL}
                onClick={onClickPicture}
            />
            {largeImageURL && (
                <Modal largeImage={largeImageURL} closeModal={closeModal} />
            )}
        </li>
    )
}
ImageGalleryItem.propTypes = {
    picture: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};