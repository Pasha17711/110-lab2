import { printAnimation } from "./animation";
export const snacks: string[] = ["Chips", "Cookies", "Popcorn"];

export function printSnacks(): void {
    printAnimation("Snacks");

    console.log("Snacks for the Ultimate Party:");

    for (const snack of snacks) {
        console.log(snack);
    }
}

printSnacks();