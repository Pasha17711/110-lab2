export const snacks: string[] = ["Chips", "Cookies", "Popcorn", "Pretzels", "Brownies", "Nachos"];

export function printSnacks(): void {
    console.log("Snacks for the Ultimate Party:");

    for (const snack of snacks) {
        console.log(snack);
    }
}

printSnacks();