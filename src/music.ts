import { printAnimation } from "./animation";

export const music: string[] = [
  "The Nights",
  "Blinding Lights",
  "Starboy"
];

export function printMusic(): void {
  printAnimation("Music");

  console.log("Music Playlist for the Ultimate Party:");

  for (const song of music) {
    console.log(song);
  }
}

printMusic();
