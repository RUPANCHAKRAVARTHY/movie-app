import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Counter } from './Counter';
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export function Movie({ name, poster, rating, summary , id, setMovies ,movies,index}) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  //  const styles ={display:show? "block": "none" };
  //  conditional styling has been done.
  //  there is another another way that is conditional rendering
  return (
    <Card
      className="movie-container">
      <img className="movie-poster"
        src={poster} alt={name} />
      <CardContent>
        <div className="movie-specs">
          <h3 classname="movie-name">{name}{" "}
          <IconButton
               onClick={()=>history.push("/movies/"+id)}
            //  onClick={() => history.push("/movies/" + id)}
              color="error"
              aria-label="movie-details">
             <InfoIcon />
            </IconButton>
            <IconButton
              className="movie-show-button"
              onClick={() => setShow(!show)}
              color="error"
              aria-label={show ? "Less" : "More"}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h3>
          <p className="movie-rating"> ⭐{rating} </p>
        </div>
        {/* <button
            onClick={()=>setShow(!show)}
            className="movie-show-button">
              {show ? "Less" : "More"}
              </button> */}
        {show ? <p>{summary}</p> : " "}
        {/* conditional rendering part
             again we are using conditional rendering to change the more/less
            <p style={styles}>{summary}</p>
            conditional styling part we can replace
            by conditional rendering  */}
       </CardContent>
       < CardActions>
        <Counter />
        <IconButton
              className="movie-show-button"
               onClick={() => {
                 const deletemovies=movies.filter((mv,index)=>index !=id);
                 setMovies(deletemovies);
               }}
              color="error"
              aria-label="delete movie">
              <DeleteIcon />
            </IconButton>
        <IconButton
              className="movie-show-button"
               onClick={() => history.push("/movies/edit/"+id) }
              color="error"
              aria-label="delete movie">
              < EditIcon />
            </IconButton>
            </CardActions>
      </Card>
  );
}
