import './App.css';
import {useFetchGames} from './useFetchGames'

function App() {
  const {data} = useFetchGames();
  let game = (typeof data[0] === 'undefined') ? {home: '', away: '', date: {seconds: 0}, home_score: '', away_score: ''} : data[0];
  let game_date = new Date(game.date.seconds * 1000);
  return (
    <div>
      {game.home} {game.home_score}-{game.away_score} {game.away} {game_date.toLocaleString()}
    </div>
  );
}

export default App;
