import { useEffect, useRef } from "react";
import { getAssetPath } from "../utils/assetPath";

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src={getAssetPath("/title.png")} alt="Macbook Title" />
      </div>

      <video
        ref={videoRef}
        src={getAssetPath("/videos/hero.mp4")}
        autoPlay
        muted
        playsInline
      />

      <button>Buy</button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
