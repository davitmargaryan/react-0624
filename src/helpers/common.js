export function randomIntFromInterval(min = 0, max = 1000) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
