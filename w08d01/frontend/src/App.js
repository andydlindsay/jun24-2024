import './App.css';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { movieReviews } = useApplicationData();

  const mappedMovieReviews = movieReviews.map((movieReview) => {
    return (
      <div key={movieReview.id}>
        <h2>Title: {movieReview.movieTitle}</h2>
        <p>Review: {movieReview.reviewText}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <h2>Welcome to our site!</h2>

      { mappedMovieReviews }
    </div>
  );
};

export default App;
