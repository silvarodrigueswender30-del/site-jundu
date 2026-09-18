import styles from "./bamboo-artwork.module.css";

type BambooArtworkProps = {
  className?: string;
};

export function BambooArtwork({ className = "" }: BambooArtworkProps) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.artwork} ${className}`.trim()}
    />
  );
}
