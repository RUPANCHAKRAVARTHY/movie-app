import logo from './logo.svg';
import './App.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MailIcon from '@mui/icons-material/Mail';
import { cardActionAreaClasses } from '@mui/material';
import { MovieList } from './MovieList';
import {ColorList} from './ColorList';
import { Switch, Route, Link } from "react-router-dom";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import {useParams} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {EditMovie} from "./EditMovie";
import AppBar from '@mui/material/AppBar';import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { dark } from '@mui/material/styles/createPalette';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { height } from '@mui/system';


function App() {
  const initial_movies = [
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA 
                  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team 
                   of researchers, to find a new planet for humans.`,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"             
    },

    {
      name: "Malik",
      poster:
        "https://static.toiimg.com/photo/msid-80750425/80750425.jpg?594893",
      rating: 8.4,
      summary: `A young man rises to prominence through his unswerving fight against political and police corruption in his village.`,
      trailer : "https://www.youtube.com/embed/41g6MgPkH7E"
    },

    {
      name: "Bahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. 
                While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
      trailer: "https://www.youtube.com/embed/CYcKs5fknb8"         
    },

    {
      name: "The Dark Knight",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9,
      summary: `After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker,
                a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.`,
      trailer : "https://www.youtube.com/embed/LDG9bisJEaI"
                  },

    {
      name: "Birds Of Prey",
      poster:
        "https://resizing.flixster.com/AvapwqD9kdFHB3mmFfFKKOn5Xbs=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2ZkNjI0NWUzLWVlOGEtNGM3Yi05MjQzLTVjMzE4NWYzZmI5Mi53ZWJw",
      rating: 6.1,
      summary: `After being thrown out in the streets by Joker, Harley struggles to pick herself up. 
                However, Harley teams up with Huntress, Black Canary and Renee Montoya to defeat a gangster and protect a girl.`,
      trailer : "https://www.youtube.com/embed/kGM4uYZzfu0"  
              },
  ];
  const [movies, setMovies] = useState(initial_movies);
  const history = useHistory();
  const [mode,setMode] =useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper styles={{minHeight :"100vh "}}elevation={4} >
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button startIcon={<HomeIcon />}  onClick={()=>history.push("/")} color="error">Home</Button>
          <Button  startIcon={< MovieIcon />} onClick={()=>history.push("/movies")} color="error">Movies</Button>
          <Button startIcon={< ColorLensIcon />}  onClick={()=>history.push("/color-game")} color="error">Color Game </Button>
          <Button startIcon={< AddPhotoAlternateIcon />}  onClick={()=>history.push("/add-movies")} color="error">Add Movies</Button>
          <Button startIcon={< SportsEsportsIcon />} onClick={()=>history.push("/tictactoe")} color="error">TicTACTOE GAME</Button>
          <Button onClick={()=>setMode(mode==="dark"? "light":"dark" )}
           startIcon={<Brightness4Icon/>} 
           sx={{marginLeft: "auto" }} 
          color="error">{mode==="dark"? "light":"dark" }mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
       {/* <AppBar position="static">
      <nav>
        <ul>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/movies">Movies</Link></li>
         <li> <Link to="/color-game">Color Game</Link></li>
         <li> <Link to="/add-movies">Add Movies</Link></li>
        </ul>
        </nav>
        </AppBar> */}
        <Switch> 
        <Route exact path="/">
         <Welcome />
         {/* <MovieDetails /> */}
        </Route>
         <Route exact path="/movies">
        <MovieList movies={movies} setMovies ={setMovies} />
        </Route>
        <Route exact path="/add-movies">
        <AddMovie movies={movies} setMovies ={setMovies} />
        </Route>
        <Route exact path="/movies/edit/:id">
        <EditMovie movies={movies} setMovies ={setMovies} />
        </Route>
        <Route exact path="/movies/:id">
       <MovieDetails  movies={movies} />
        </Route>
        <Route exact path="/color-game">
        <ColorList />
        </Route>
        <Route exact path="/tictactoe">
          <TicTacToe />
          </Route>
        <Route path="**">
        <NotFound />
        </Route>
      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}
function NotFound(){
  return(
  <div>
    <h3 className ="not-found">404</h3>
    <img 
      src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      alt=" not found"
      />
  </div>
  );
}

function Welcome(){
  return <h1>Welcome All✌</h1>
}

function MovieDetails({movies} ){
  const {id} = useParams();
  const movie = movies[id];
  const history = useHistory();
  return(
<div>
  {/* <h1>Movie id is {id} </h1> */}
<iframe 
width="900" 
height="506" 
src={movie.trailer} 
//  src="https://www.youtube.com/embed/zSWdZVtXT7E" 
title="YouTube video player" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen>
</iframe>
<div className="movie-detail-container">
  <div className="movie-specs">
    <h3 className="movie-name">{movie.name}</h3>
    <p className="movie-rating">⭐{movie.rating}</p>
  </div>
  <p> 
    {movie.summary}
  </p>
  <Button 
  onClick={()=>history.goBack()}
  variant="contained" 
  startIcon={<ArrowBackIosIcon 
  />}>
    Back
    </Button>
</div>
</div>
  );
}
function TicTacToe(){

  return <Game/>
}
function Game(){
   const [board ,setBoard] =
   useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
   ]);
    // useState([0,1,2,3,4,5,6,7,8]);
  const decideWinner =(board)=>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6],
      [0,3,6],
      [1,4,7],
      [2,5,8],
    ];
    for(let i=0 ;i<lines.length; i++){
      const[a,b,c]=lines[i];
      if(board[a]!==null && board[a]===board[b] && board[a]===board[c]){
        return board[a];//return winner
      }
    }
    return null;//return nothing
  };
  const winner =decideWinner(board);
  const[isXTurn,setIsXTurn] = useState(true);
  const handleClick=(index)=>{
    if(!winner && !board[index]){
  const boardcopy=[...board];
  boardcopy[index]=isXTurn ? "X" : "O";
  setBoard(boardcopy);
  setIsXTurn(!isXTurn);
    }
  }
  const restart =() =>{
    setBoard([
      null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
    ]);
    setIsXTurn(true);
  }
  return(
    <div>
    <div className="board">
      {board.map((val,index)=>(
      <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
       )) }
    </div>
    {winner ? <h1>🎊Winner is : {winner}🎊</h1> : ""}
    <button>Restart</button>
    </div>
  );
}
 function GameBox({val,onPlayerClick}){
  //  const [value , setValue] =useState(val);
   const styles ={color:val==="X"? "green":"red"};
   return (
   <div
   style={styles}
   onClick={onPlayerClick}
  //  onClick={()=>setValue(val==="X"?"O":"X")}
   className="game-box">{val}
   
   </div>
   );
 }

export default App;
