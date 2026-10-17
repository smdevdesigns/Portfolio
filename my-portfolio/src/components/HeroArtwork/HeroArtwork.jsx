
import Me from "../../assets/me.png";

export default function HeroArtwork() {
  return (
    <div className="hero-art">
      <img
        src={Me}
        alt="A portrait of me"
        className="hero-person"
      />
    </div>
  );
}
