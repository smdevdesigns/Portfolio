import HeroArtwork from "../HeroArtwork/HeroArtwork";
import { ArrowUpRight, DownloadIcon } from "./Icons";
export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <span className="eyebrow">Developer &amp; Designer</span>
        <h1>
          Ideas to <em>interfaces</em> that make an{" "}
          <span className="gradient-text">impact.</span>
        </h1>
        <p className="hero-description">
          I design and build digital products — from Figma concepts to fully
          functional web experiences.
        </p>
        <div className="hero-actions">
          <a className="button button-light" href="#projects">
            View my work <ArrowUpRight />
          </a>
          <a
            className="button button-outline"
            href="/CV1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
      <HeroArtwork />
      <span className="scroll-cue">
        Scroll <span>↓</span>
      </span>
    </section>
  );
}
