export const snacks: string[] = ["Chips", "Cookies"];

export function printSnacks(): void {
    console.log("Snacks for the Ultimate Party:");

    for (const snack of snacks) {
        console.log(snack);
    }
}

printSnacks();