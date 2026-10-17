import me from "../../assets/me1.png";

export default function HeroArtwork() {
  return (
    <div className="hero-art">
      <img src={me} alt="A portrait of me" className="hero-person" />
    </div>
  );
}
