import { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './app.module.css';

export const App = () => {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([])

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };
  const onSubmit = event => {
    if ( event !== request){
      setPictures([]);
      setRequest(event);
      setPage(1);
    }
     
  };
  return (
    <div className={css.app}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        request={request}
        page={page}
        loadMoreBtn={loadMoreBtn}
        pictures = {pictures}
        setPictures = {setPictures}
      />
    </div>
  );
};
