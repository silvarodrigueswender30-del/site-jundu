import styles from "./territory-artwork.module.css";

type TerritoryArtworkProps = {
  className?: string;
};

export function TerritoryArtwork({ className = "" }: TerritoryArtworkProps) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.artwork} ${className}`.trim()}
    />
  );
}
