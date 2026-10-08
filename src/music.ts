export const music: string[] = [
    "The Nights",
    "Blinding Lights",
    "Starboy"
];

export function printMusic(): void {
    console.log("Music for the Ultimate Party:");

    for (const song of music) {
        console.log(song);
    }
}

printMusic();