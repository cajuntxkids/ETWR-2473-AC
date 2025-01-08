// script.js

// Character data
const characters = [

    // Marvel Antiheroes --- updated 20241119
    { name: "Deadpool", powers: ["Immortality", "Enhanced Strength", "Enhanced Agility", "Enhanced Reflexes", "Enhanced Endurance", 
        "Healing Factor", "Toxin Immunity", "Disease Immunity", "Enhanced Agility", "Expert Hand-to-Hand Combatant", 
        "Teleportation", "Fourth-Wall Awareness"] },
    { name: "Venom", powers: ["Superhuman Strength", "Enhanced Durability", "Enhanced Agility", "Enhanced Reflexes", "Healing Factor", 
        "Enhanced Stamina", "Immunity to Spider-Sense", "Symbiotic Bonding", "Webbing Generation", "Shape-Shifting", "Camouflage", 
        "Toxin Immunity", "Disease Immunity"] },
    { name: "Loki", powers: ["Superhuman Strength", "Enhanced Durability", "Enhanced Agility", "Regeneration", "Illusion Manipulation", 
        "Mind Control", "Shape-Shifting", "Teleportation", "Immortality", "Magic", "Sorcery"] },
    { name: "Wolverine", powers: ["Regeneration", "Healing Factor", "Retractable Claws", "Superhuman Durability", "Superhuman Strength", 
        "Enhanced Agility", "Enhanced Reflexes", "Enhanced Senses", "Longevity"] },
    { name: "Gambit", powers: ["Expert Hand-to-Hand Combatant", "Enhanced Agility", "Enhanced Reflexes", "Superhuman Durability", 
        "Charging Objects with Kinetic Energy", "Kinetic Energy Manipulation"] },

    // Guardians of the Galaxy --- updated 20241119
    { name: "Rocket", powers: ["Genius-Level Intellect", "Enhanced Senses", "Expert Marksmanship", "Enhanced Durability", 
        "Advanced Technology Use"] },
    { name: "Peter Quill (Star-Lord)", powers: ["Celestial Powers", "Enhanced Strength", "Enhanced Agility", "Enhanced Reflexes", 
        "Enhanced Endurance", "Regeneration", "Expert Hand-to-Hand Combatant", "Expert Marksmanship", "Charismatic Manipulation",
        "Leadership"] },
    { name: "Gamora", powers: ["Enhanced Strength", "Enhanced Durability", "Enhanced Agility", "Enhanced Reflexes", 
        "Expert Hand-to-Hand Combatant", "Master of Weaponry", "Regeneration", "Cybernetic Enhancements"] },
    { name: "Drax the Destroyer", powers: ["Superhuman Strength", "Enhanced Durability", "Enhanced Endurance", 
        "Expert Hand-to-Hand Combatant", "Healing Factor"] },
    { name: "Groot", powers: ["Regeneration", "Size Manipulation", "Superhuman Strength", "Superhuman Durability", "Flight", 
        "Plant Manipulation", "Limited Communication"] },

    // DC Antiheroes --- updated 20241119
    { name: "Black Adam", powers: ["Superhuman Strength", "Superhuman Speed", "Superhuman Durability", "Superhuman Reflexes", 
        "Enhanced Stamina", "Enhanced Healing", "Flight", "Invulnerability", "Energy Manipulation", "Magic Manipulation"] },
    { name: "Deathstroke", powers: ["Weapon Proficiency", "Superhuman Strength", "Superhuman Speed", "Enhanced Durability", 
        "Enhanced Reflexes", "Expert Tactician", "Expert Marksmanship", "Master Strategist", "Genius-Level Intellect", 
        "Enhanced Pain Tolerance", "Healing Factor", "Expert Hand-to-Hand Combatant"] },
    { name: "Catwoman", powers: ["Peak Human Agility", "Enhanced Reflexes", "Stealth", "Expert Hand-to-Hand Combatant", 
        "Feline-Like Senses", "Lock-Picking Expertise", "Charismatic Manipulation", "Weapon Proficiency", "Enhanced Pain Tolerance", 
        "Expert Acrobat", "Expert Escape Artist", "Thievery Experise"] },
    { name: "Captain Cold", powers: ["Cold Immunity", "Weapon Proficiency", "Expert Strategist", "Cryokinesis", "Temperature Manipulation", 
        "Ice Constructs"] },
    { name: "John Constantine", powers: ["Advanced Occult Knowledge", "Supernatural Perception", "Dark Magic", "Protective Spellcasting", 
        "Healing Magic", "Demonic Summoning", "Interdimensional Travel", "Exorcism Expertise", "Soul Bargaining", "Longevity", 
        "Precognition", "Astral Projection", "Intimidation"] },

    // Suicide Squad --- updated 20241119
    { name: "El Diablo", powers: ["Pyrokinesis", "Fire Immunity"] },
    { name: "Harley Quinn", powers: ["Genius-Level Intellect", "Peak Human Agility", "Peak Human Reflexes", "Enhanced Durability", 
        "Expert Hand-to-Hand Combatant", "Expert Acrobat", "Psychological Manipulation", "Charismatic Manipulation", "Expert Weapon User", 
        "Insanity (Unpredictable Behavior)"] },
    { name: "Deadshot", powers: ["Expert Hand-to-Hand Combatant", "Expert Tactician", "Peak Human Strength", "Peak Human Agility", 
        "Peak Human Endurance", "Superhuman Marksmanship"] },
    { name: "Killer Croc", powers: ["Superhuman Strength", "Superhuman Durability", "Enhanced Senses", "Regeneration", 
        "Amphibious Abilities", "Hunting Instincts", "Reptilian Physiology"] },
    { name: "Katana", powers: ["Expert Swordsmanship", "Expert Hand-to-Hand Combatant", "Superhuman Agility", "Enhanced Durabilty", 
        "Peak Human Strength", "Peak Human Stamina", "Peak Human Reflexes", "Souls of the Damned"] },
    { name: "Captain Boomerang", powers: ["Boomerang Mastery", "Boomerang Weaponry", "Expert Thrown Weaponry", "Enhanced Reflexes", 
        "Enhanced Durability", "Peak Human Agility", "Expert Hand-to-Hand Combatant"] },
    
    // SHIELD Members --- updated 20241119
    { name: "Black Widow (Natasha Romanoff)", powers: ["Expert Hand-to-Hand Combatant", "Expert Marksmanship", "Enhanced Agility", 
        "Resistance to Aging", "Stealth", "Espionage", "Expert Tactician", "Expert Strategist", "Master of Disguise"] },
    { name: "Nick Fury", powers: ["Peak Human Intelligence", "Expert Tactician", "Expert Strategist", "Enhanced Durability", 
        "Psychological Manipulation", "Peak Human Agility", "Peak Human Stamina", "Peak Human Strength", "Expert Marksmanship", "Leadership"] },
    { name: "Hawkeye (Clint Barton)", powers: ["Expert Marksmanship", "Expert Tactician", "Peak Human Strength", "Peak Human Speed", 
        "Peak Human Endurance", "Peak Human Agility", "Martial Arts Mastery", "Expert Hand-to-Hand Combatant"] },
    { name: "Maria Hill", powers: ["Expert Marksmanship", "Expert Hand-to-Hand Combatant", "Expert Tactician", "Leadership", 
        "Peak Human Strength", "Peak Human Speed", "Peak Human Endurance", "Peak Human Agility", "Peak Human Reflexes"] },
    { name: "Phil Coulson", powers: ["Expert Hand-to-Hand Combatant", "Peak Human Intelligence", "Peak Human Reflexes", 
        "Expert Marksmanship", "Leadership", "Survival Skills"] },  

    // Marvel Heroes --- updated 20241119
    { name: "Spider-Man", powers: ["Wall-Crawling", "Spider Sense", "Superhuman Agility", "Superhuman Strength", "Superhuman Reflexes", 
        "Superhuman Stamina", "Enhanced Durability", "Web-Shooting"] },
    { name: "Iron Man", powers: ["High-Tech Armor", "Genius-Level Intellect", "Flight", "Energy Projection", "Superhuman Durability", 
        "Environmental Adaptation", "Holographic Projection", "Weaponized Systems"] },
    { name: "Thor", powers: ["Superhuman Strength", "Superhuman Durability", "Flight", "Superhuman Stamina", "Lightning Manipulation", 
        "Weather Manipulation", "Longevity", "Dimensional Travel", "Mjolnir Mastery"] },
    { name: "Black Panther", powers: ["Enhanced Agility", "Superhuman Reflexes", "Enhanced Strength", "Superhuman Stamina", "Enhanced Healing", 
        "Enhanced Senses", "Longevity", "Expert Strategist", "Vibranium Suit"] },
    { name: "Captain America", powers: ["Superhuman Strength", "Superhuman Speed", "Superhuman Stamina", "Superhuman Reflexes", 
        "Superhuman Durability", "Enhanced Healing", "Expert Hand-to-Hand Combatant", "Expert Tactician", "Shield Proficiency", 
        "Heightened Mental Focus"] },

    // DC Heroes --- updated 20241119
    { name: "Superman", powers: ["Super Strength", "Flight", "Super Speed", "Invulnerability", "Super Hearing", "Enhanced Vision", 
        "Heat Vision", "X-Ray Vision", "Solar Energy Absorption", "Freeze Breath", "Longevity"] },
    { name: "Wonder Woman", powers: ["Super Strength", "Enhanced Speed", "Flight", "Expert Hand-to-Hand Combatant", "Enhanced Reflexes", 
        "Bracelets of Submission", "Enhanced Durability", "Immortality", "Lasso of Truth Manipulation", "Divine Empowerment"] },
    { name: "Batman", powers: ["Heightened Mental Focus", "Martial Arts Mastery", "Enhanced Stealth", "Genius-Level Intellect", 
        "Peak Human Reflexes", "Weapon Proficiency", "Expert Tactician", "Expert Detective Skills", "Willpower Resistance", 
        "Engineering Expertise", "Wealth and Resources"] },
    { name: "Flash", powers: ["Super Speed", "Enhanced Reflexes", "Time Travel", "Time Manipulation", "Phasing", "Speed Mirages", 
        "Healing Factor", "Infinite Mass Punch", "Speed Force Aura", "Speed Force Connection"] },
    { name: "Aquaman", powers: ["Superhuman Strength", "Enhanced Durability", "Underwater Breathing", "Atlantean Physiology", 
        "Superhuman Speed", "Expert Hand-to-Hand Combatant", "Enhanced Vision", "Hydrokinesis", "Aquatic Telepathy", "Trident Mastery"] },

    // Other Heroes --- updated 20241120
    { name: "Harry Potter", powers: ["Wizardry", "Healing Magic", "Magic", "Parseltongue", "Wizardry", "Flight", "Telepathy", 
        "Occlumency", "Legilimency", "Transfiguration", "Apparition", "Protego"] },
    { name: "Luke Skywalker", powers: ["Force Sensitivity", "Telekinesis", "Precognition", "Enhanced Reflexes", "Lightsaber Combat", 
        "Force Healing", "Force Projection", "Energy Deflection", "Mind Control"] },
    { name: "Indiana Jones", powers: ["Expert Archaeologist", "Expert Hand-to-Hand Combatant", "Expert Marksmanship", "Survival Skills", 
        "Expert Escape Artist", "Enhanced Endurance", "Heightened Mental Focus", "Improvised Weaponry"] },
    { name: "Frodo Baggins", powers: ["Enhanced Resilience", "Enhanced Stamina", "Environmental Adaptation", "Leadership", 
        "Ring-Borne Invisibility"] },
    { name: "The Doctor", powers: ["Regeneration", "Genius-Level Intellect", "Time Travel", "Dimensional Travel", "Heightened Mental Focus", 
        "Charismatic Manipulation", "Engineering Expertise", "Empathy", "Resistance to Mind Control", "Longevity", "Universal Translation"] },
    { name: "Sherlock Holmes", powers: ["Peak Human Agility", "Expert Hand-to-Hand Combatant", "Master of Disguise", "Enhanced Observation", 
        "Rapid Mental Calculation"] },
    { name: "Neo", powers: ["Reality Manipulation", "Superhuman Reflexes", "Martial Arts Mastery", "Enhanced Strength", "Flight", 
        "System Integration", "Enhanced Agility", "Energy Projection", "Code Vision"] },
    { name: "Katniss Everdeen", powers: ["Expert Marksmanship", "Survival Skills", "Stealth", "Enhanced Perception", "Expert Tactician", 
        "Enhanced Agility", "Improvised Weaponry", "Expert Strategist", "Leadership"] },
    { name: "Super Mario", powers: ["Enhanced Strength", "Enhanced Agility", "Enhanced Durability", "Dimensional Travel", 
        "Environmental Adaptation", "Shape-Shifting", "Enhanced Jumping Ability", "Fireball Projection", "Invincibility", "Flight"] },

    // Marvel Villains --- updated 20241115
    { name: "Thanos", powers: ["Superhuman strength", "Superhuman Durability", "Immortality", "Energy Manipulation", "Genius-Level Intellect", 
        "Telepathy", "Force Field Generation", "Matter Manipulation", "Teleportation", "Dimensional Travel", "Cosmic Awareness", 
        "The Infinity Gauntlet"] },    
    { name: "Magneto", powers: ["Magnetokinesis", "Electromagnetic Energy Manipulation", "Flight", "Electrical Energy Generation", 
        "Enhanced Durability", "Superhuman Intelligence", 
        "Resistance to Telepathy", "Terraforming", "Geokinesis (Metal-Specific)", "Metallic Sensing"] },
    { name: "Green Goblin", powers: ["Superhuman Strength", "Enhanced Durability", "Expert Hand-to-Hand Combatant", "Weapon Proficiency", 
        "Genius-Level Intellect", "Psychological Manipulation", "Insanity Inducement", "Glider Flight", "Toxin Resistance"] },
    { name: "Doctor Doom", powers: ["Genius-Level Intellect", "Superhuman Durability", "Healing Factor", "Energy Manipulation", "Force Field Generation", "Technopathy", 
        "Mystical Sorcery", "Teleportation", "Dimensional Travel", "Time Manipulation", "Highly Advanced Suit of Armor"] },
    { name: "Cassandra Nova", powers: ["Telekinesis", "Telepathy", "Bio-Phasing Ability", "Technopathy", "Sentient Microbial Manipulation", 
        "Enhanced Durability", "Regeneration", "Psionic Energy Manipulation", "Astral Projection", "Genetic Manipulation & Evolutionary Powers", 
        "Possession", "Power Mimicry", "Amplification"] },

    // DC Villains --- updated 20241115
    { name: "Joker", powers: ["Genius-Level Intellect", "Expert Hand-to-Hand Combatant", "Enhanced Pain Tolerance", 
        "Psychological Manipulation", "Toxin Creation", "Resistance", "Chaos Inducement"] },
    { name: "Lex Luthor", powers: ["Superhuman Strength", "Superhuman Durability", "Energy Manipulation", 
        "Genius-Level Intellect", "Strategic Genius", "Technological Mastery", 
        "Charismatic Manipulation", "Highly Advanced Suit of Armor", "Wealth and Resources"] },
    { name: "Darkseid", powers: ["Omega Beams", "Superhuman strength", "Superhuman Durability", "Telepathy", "Energy Manipulation", 
        "Matter Manipulation", "Dimensional Travel", "Immortality", "The Anti-Life Equation"] },
    { name: "Poison Ivy", powers: ["Toxin Immunity", "Enhanced Physical Abilities", "Healing Factor", "Seduction Pheromones", "Plant Manipulation", 
        "Toxin Creation", "Environmental Awareness", "Longevity"] },
    { name: "Brainiac", powers: ["Superhuman Intelligence", "12th-Level Intellect", "Absorption of Knowledge", "Superhuman Strength", 
        "Superhuman Durability", "Technopathy", "Energy Projection", "Immortality", "Shrink Ray Technology", "Enhanced Senses (Technology)", 
        "Shape-Shifting"] },

    // Other Villains --- updated 20241115
    { name: "Lord Voldemort", powers: ["Dark Magic", "Magic", "Immortality (via Horcruxes)", "Immortality", "Telekinesis", "Legilimency", 
        "Parseltongue","Dark Magic Mastery", "Spell Creation", "Flight", "Enhanced Magical Resistance", "Charismatic Manipulation", 
        "Apparition", "Transfiguration"] },
    { name: "Darth Vader", powers: ["Mastery of the Force", "Superhuman Strength", "Superhuman Durability", "Enhanced Reflexes", 
        "Lightsaber Combat", "Immortality (through the Dark Side)", "Immortality", "Force Sense", "Force Manipulation", "Telekinesis", 
        "Force Choke"] },
    { name: "Mola Ram", powers: ["Dark Magic", "Magic", "Mind Control", "Enhanced Physical Strength", "Poison Resistance", 
        "Thuggee Cult Rituals", "Hypnosis", "Intimidation", "Heart Extraction", "Cult Leadership"] },
    { name: "Sauron", powers: ["Dark Magic", "Magic", "Shape-Shifting", "Immortality (via the One Ring)", "Immortality", 
        "Corruption and Mind Control", "Mind Control", "Telepathy", "Enhanced Physical Strength", "Summoning Creatures", 
        "Reality Manipulation (through the One Ring)", "Reality Manipulation"] },
    { name: "The Master", powers: ["Hypnosis", "Mind Control", "Telepathy", "Superhuman Intelligence", "Charismatic Manipulation", "Laser Weaponry (Cybernetic)", 
        "Regeneration", "Time Manipulation (via the TARDIS)", "Time Manipulation", "Longevity", "Shape-Shifting"] },
    { name: "Professor Moriarty", powers: ["Genius-Level Intellect", "Master Strategist", "Criminal Mastermind", "Stealth", "Evasion", 
        "Persuasion", "Charismatic Manipulation", "Manipulation", "Expert Hand-to-Hand Combatant"] },
    { name: "Agent Smith", powers: ["Superhuman Strength", "Superhuman Speed", "Superhuman Intelligence", "Enhanced Durability", "Flight", 
        "Programming Manipulation", "Digital Body Hopping", "Self-Replication"] },
    { name: "President Snow", powers: ["Political Strategy", "Charismatic Manipulation", "Psychological Warfare", "Manipulation", 
        "Poison Expertise", "Charismatic Manipulation"] },
    { name: "Bowser", powers: ["Superhuman Strength", "Fire Breath", "Shell Spin", "Enhanced Durability", "Dark Magic", "Teleportation", 
        "Size Manipulation", "Shape-Shifting", "Regeneration", "Healing Factor", "Flight", "Lava Immunity", "Enhanced Jumping Ability", "Energy Projection", "Intimidation"] },





];

// Extract unique powers and sort them alphabetically
const uniquePowers = [...new Set(characters.flatMap(character => character.powers))].sort();

// Populate the superpowers list
const powersList = document.getElementById("powers");
uniquePowers.forEach(power => 
{
    const li = document.createElement("li");
    li.textContent = power;
    li.addEventListener("click", () => 
    {
        displaySelectedPower(power); // Show the selected power above the characters list
        displayCharacters(power); // Show matching characters
        scrollToCharactersSection(); // Scroll to characters section
    });
    powersList.appendChild(li);
});

// Function to display the selected power above the list
function displaySelectedPower(power) 
{
    const selectedPowerDisplay = document.getElementById("selected-power");
    selectedPowerDisplay.innerHTML = `${power}`;
    selectedPowerDisplay.style.fontWeight = "bold"; // Styling
    selectedPowerDisplay.style.marginBottom = "10px"; // Add spacing
}

// Function to display characters with a specific power
function displayCharacters(power) 
{
    const charactersList = document.getElementById("characters");
    charactersList.innerHTML = ""; // Clear the list

    const matchingCharacters = characters.filter(character => character.powers.includes(power));
    
    if (matchingCharacters.length === 0) 
    {
        charactersList.innerHTML = `<li>No characters found with the power: ${power}</li>`;
    } 

    else 
    {
        matchingCharacters.forEach(character => 
        {
            const li = document.createElement("li");
            li.textContent = character.name;
            charactersList.appendChild(li);
        });
    }
    // Ensure list is styled correctly - without bullet points
    charactersList.style.listStyleType = 'none'; // Remove bullet points
}

// Function to scroll to the Characters Section
function scrollToCharactersSection() 
{
    const charactersSection = document.getElementById("characters-section");
    charactersSection.scrollIntoView({ behavior: "smooth" });
}
