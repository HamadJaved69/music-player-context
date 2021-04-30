import './App.css';
import { MusicPlayerProvider } from './context/MusicPlayerContext';
import TrackList from './components/TrackList';
import PlayerControls from './components/PlayerControls';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
