import React, { createContext, useState } from 'react';
import NewBeginning from '../assets/anewbeginning.mp3';
import CreativeMinds from '../assets/creativeminds.mp3';
import Ukulele from '../assets/ukulele.mp3';

export const MusicPlayerContext = createContext([{}, () => {}]);

export const MusicPlayerProvider = ({ children }) => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
              name: 'Lost Chameleon - Genesis',
              file: NewBeginning
            },
            {
              name: 'The Hipsta - Shaken Soda',
              file: CreativeMinds
            },
            {
              name: 'Tobu - Such Fun',
              file: Ukulele
            },
        ],
        currentTrackIndex: null,
        isPlaying: false,
    });
    return (
        <MusicPlayerContext.Provider
            value={[state, setState]}
        >
            { children }
        </MusicPlayerContext.Provider>
    )
}