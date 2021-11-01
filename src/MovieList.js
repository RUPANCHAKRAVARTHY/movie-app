import { useState } from "react";
import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";

export function MovieList({movies ,setMovies}) {
  // const initial_movies = [
  //   {
  //     name: "Interstellar",
  //     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //     rating: 8.6,
  //     summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA 
  //                 pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team 
  //                  of researchers, to find a new planet for humans.`,
  //   },

  //   {
  //     name: "Malik",
  //     poster:
  //       "https://static.toiimg.com/photo/msid-80750425/80750425.jpg?594893",
  //     rating: 8.4,
  //     summary: `A young man rises to prominence through his unswerving fight against political and police corruption in his village.`,
  //   },

  //   {
  //     name: "Bahubali",
  //     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //     rating: 8,
  //     summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. 
  //               While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
  //   },

  //   {
  //     name: "The Dark Knight",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  //     rating: 9,
  //     summary: `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker,
  //                  a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.`,
  //   },

  //   {
  //     name: "Birds Of Prey",
  //     poster:
  //       "https://resizing.flixster.com/AvapwqD9kdFHB3mmFfFKKOn5Xbs=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2ZkNjI0NWUzLWVlOGEtNGM3Yi05MjQzLTVjMzE4NWYzZmI5Mi53ZWJw",
  //     rating: 6.1,
  //     summary: `After being thrown out in the streets by Joker, Harley struggles to pick herself up. 
  //               However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.`,
  //   },
  // ];
  // const [movies, setMovies] = useState(initial_movies);
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const setMovieName = (event) => setName(event.target.value);
  // const setPosterName = (event) => setPoster(event.target.value);
  // const setRatingName = (event) => setRating(event.target.value);
  // const setSummaryName = (event) => setSummary(event.target.value);
  // const addMovie = () => {
  //   console.log({ name, poster, rating, summary });
  //   const newMovie = { name, poster, rating, summary };
  //   setMovies([...movies, newMovie]);
  //   resetMovieForm();
  // };

  // const resetMovieForm = () => {
  //   setName("");
  //   setPoster("");
  //   setRating("");
  //   setSummary("");
  // };

  return (
    <section>
     
        {/* // name={name}
        // poster={poster}
        // rating={rating}
        // summary={summary}
        // setMovieName={setMovieName}
        // setPosterName={setPosterName}
        // setRatingName={setRatingName}
        // setSummaryName={setSummaryName}
        // addMovie={addMovie} */}
     
      <div className="movie-list">
        {movies.map((mv, index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
            id={index}
            setMovies={setMovies}
            movies={movies}
          />
        ))}
      </div>
    </section>
  );
}
