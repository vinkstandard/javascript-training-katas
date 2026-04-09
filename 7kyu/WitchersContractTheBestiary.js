function identifyMonster(observedWeaknesses, bestiary) {

    for (const [mostro, debolezze] of Object.entries(bestiary)) {
        const trovato = observedWeaknesses.every(debolezza => debolezze.includes(debolezza));
        if(trovato) return mostro;
    }
    return "Unknown monster";
}


const testBestiary = {
    "Griffin": ["Grapeshot", "Hybrid Oil", "Aard"],
    "Noonwraith": ["Yrden", "Moon Dust", "Specter Oil"],
    "Drowner": ["Igni", "Necrophage Oil"],
    "Leshen": ["Igni", "Relict Oil", "Dimeritium Bomb"],
    "Fiend": ["Samum", "Devil's Puffball", "Relict Oil"]
};


console.log("\n\n");
console.log(identifyMonster(["Igni", "Necrophage Oil"], testBestiary) + " | Expected --> Drowner");
console.log(identifyMonster(["Yrden", "Moon Dust"], testBestiary) + " | Expected --> Noonwraith");
console.log(identifyMonster(["Igni", "Relict Oil"], testBestiary) + " | Expected --> Leshen");
