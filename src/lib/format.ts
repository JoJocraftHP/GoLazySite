export function formatNumber(n: number | null | undefined): string {
  if (typeof n !== "number" || isNaN(n)) return "--";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString();
}

export function ccuDisplay(
  playing: number | null | undefined,
  peak: number | null | undefined
): { value: number; isPeak: boolean } | null {
  if (typeof playing !== "number") {
    return null;
  }
  if (playing < 50 && typeof peak === "number" && peak > playing) {
    return { value: peak, isPeak: true };
  }
  return { value: playing, isPeak: false };
}
