import {useEffect, useState} from 'react';
import axios from 'axios';

const useApplicationData = () => {
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    axios.get('/movie-reviews')
      .then((response) => {
        // console.log(response.data);
        setMovieReviews(response.data);
      });
  }, []);

  return {
    movieReviews,
  };
};

export default useApplicationData;

// useEffect(() => {
//   fetch('/movie-reviews') // returns JSON
//     .then(res => res.json()) // converts the JSON to JS
//     .then((data) => {
//       console.log(data);
//       setMovieReviews(data);
//     });
// }, []);