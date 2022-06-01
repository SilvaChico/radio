import type { NextPage } from "next";
import Hls from "hls.js";
import { useEffect, createRef } from "react";

const Player: NextPage = () => {
  const STREAM_URL = "http://localhost:8080/hls/radioPOC.m3u8";
  const videoRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    const videoSrc = STREAM_URL;
    const videoElement = videoRef.current!;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(videoElement);
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = videoSrc;
    }
  }, []);

  return <video id="video" width="800" controls ref={videoRef}></video>;
};

export default Player;
