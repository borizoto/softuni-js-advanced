function heroes() {
    const obj = {
        fighter(name) {
            let health = 100;
            let stamina = 100;

            function fight() {
                console.log(`${this.name} slashes at the foe!`);
                this.stamina--;
            }

            return { name, health, stamina, fight };
        },

        mage(name) {
            let health = 100;
            let mana = 100;

            function cast(spell) {
                console.log(`${this.name} cast ${spell}`);
                this.mana--;
            }

            return { name, health, mana, cast };
        }
    };
    return obj;
}