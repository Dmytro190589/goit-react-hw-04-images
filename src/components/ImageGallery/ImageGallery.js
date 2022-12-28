import { useState, useEffect } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import css from './ImageGallery.module.css';
import Button from "./../Button/Button";
import PropTypes from 'prop-types'

export default function ImageGallery({
    request,
    page,
    loadMoreBtn,
    setPictures,
    pictures
}) {
    const [isLoading, setIsLoading] = useState(false)
    const [, setError] = useState(null)

    useEffect(() => {
        let fetchApi = `https://pixabay.com/api/?q=${request}&page=${page}&key=32188419-e3a5ebcfb978061bafc2d31ff&image_type=photo&orientation=horizontal&per_page=12`;
        if (request) {
            setIsLoading(true)
            fetch(fetchApi)
                .then(res => res.json())
                .then(data => {
                    if (!data.hits?.length) {
                        alert('Bad request,try again');
                    }
                    setPictures(pictures => [...pictures, ...data.hits])
                })
                .catch(error => setError({ error }))
                .finally(() => setIsLoading(false))
        }
    }, [page, request, setPictures])
    return (
        <>
            <ul className={css.gallery} >
                {pictures.length > 0 &&
                    pictures.map(picture => (
                        <ImageGalleryItem
                            key={picture.id}
                            picture={picture}
                            webformatURL={picture.webformatURL}
                        />
                    ))}

            </ul>
            {isLoading && <Loader />}
            {pictures.length ? <Button onClick={loadMoreBtn} /> : ''}
        </>
    )


}
ImageGallery.propTypes = {
    request: PropTypes.string.isRequired,
    loadMoreBtn: PropTypes.func,
    page: PropTypes.number.isRequired,
}
