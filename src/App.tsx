import React, { useState, useEffect } from 'react';
import Video from './Video';
import db from './firebase';
import './App.css';

type Video = { id: string } & React.ComponentProps<typeof Video>;

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(
        snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Video),
        ),
      ),
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            id,
            url,
            channel,
            description,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={id}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          ),
        )}
      </div>
    </div>
  );
}

export default App;