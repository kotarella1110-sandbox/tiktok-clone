import React, { useRef, useState } from 'react';
import VideoFooter from "./VideoFoter";
import VideoSidebar from "./VideoSidebar";
import './Video.css';

type Props = {
  url: string;
} & React.ComponentProps<typeof VideoFooter> & React.ComponentProps<typeof VideoSidebar>;

function Video({ url, channel, description, song, likes, messages, shares }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;