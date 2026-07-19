import { cn } from "@/utils/tailwind-util";
import styles from "./mineral-wash-background.module.css";

const MineralWashFilters = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute h-0 w-0 overflow-hidden"
      focusable="false"
    >
      <filter id="mineral-gouache-paper">
        <feTurbulence
          baseFrequency="0.72"
          numOctaves="4"
          result="noise"
          seed="17"
          type="fractalNoise"
        />
        <feColorMatrix
          in="noise"
          result="paper"
          type="matrix"
          values="0.35 0 0 0 0.5 0 0.35 0 0 0.5 0 0 0.35 0 0.5 0 0 0 0.2 0"
        />
        <feBlend in="SourceGraphic" in2="paper" mode="multiply" />
      </filter>
      <filter id="mineral-gouache-bristle">
        <feTurbulence
          baseFrequency="0.018 0.16"
          numOctaves="5"
          result="grain"
          seed="31"
          type="fractalNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="grain"
          scale="28"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feColorMatrix
          type="matrix"
          values="1.05 0 0 0 -0.02 0 1.05 0 0 -0.02 0 0 1.05 0 -0.02 0 0 0 1 0"
        />
      </filter>
    </svg>
  );
};

const MineralWashBackground = () => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden",
        styles.surface
      )}
    >
      <MineralWashFilters />
      <div className={cn(styles.textureLayer, styles.lacquerBloom)} />
      <div className={cn(styles.textureLayer, styles.nacreVeil)} />
      <div className={cn(styles.textureLayer, styles.shellMist)} />
      <div className={styles.readingField} />
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-google-ink via-google-ink/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-google-ink via-google-ink/75 to-transparent" />
    </div>
  );
};

export { MineralWashBackground };
