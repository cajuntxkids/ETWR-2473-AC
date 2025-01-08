// Define the categories for names
const heroes = [
    'Captain Thunder', 'Mystic Phantom', 'Shadow Blaze', 'Wonderstrike', 'Iron Vortex', 
    'Solar Knight', 'The Scarlet Defender', 'The Mighty Enforcer', 'Electro-Warrior', 'The Cosmic Crusader',
    'Lunar Sentinel', 'Star Forge', 'Quantum Guardian', 'Vigilant Nova', 'Tempest Fury',
    'Crimson Valkyrie', 'Night Specter', 'Titan Warden', 'Inferno Viper', 'The Silver Tempest',
    'Blaze Titan', 'The Nebula Phantom', 'Storm Avenger', 'Quantum Shadow', 'Aurora Vanguard'
];

const villains = [
    'The Dark Sorcerer', 'Lady Venom', 'Shadow Reaper', 'Lord Obsidian', 'The Phantom Tyrant', 
    'Inferno Queen', 'The Dark Lordess', 'Crimson Nightmare', 'The Unholy Menace', 'The Abyss Master',
    'Void Wraith', 'Havoc Hound', 'Dread Architect', 'Obsidian Warlord', 'Blood Shroud',
    'Nightmare Eclipse', 'The Blackout Monarch', 'Crushar', 'Malice Prime', 'Tempest Viper',
    'The Shadow Prince', 'Echo Prime', 'Viper King', 'The Widow Bringer', 'Sinister Alpha',
    'Death Shadow', 'Malice Incarnate', 'Steel Wrath', 'Dread Seraph', 'Talon Monarch', 
    'The Sinister Scourge', 'Nightmare Sentinel', 'Wraith Lord', 'Blood Thorn', 'Maleficent Sin', 'The Void Ruler', 
    'Dark Eclipse', 'Havoc Warlord'

];

const antiheroes = [
    'The Rogue Avenger', 'Midnight Justice', 'Vigilante X', 'The Lone Justice', 'Iron Enigma', 
    'The Sinister Justice', 'The Wraith Vigilante', 'The Silent Avenger', 'Ghost Reaper', 'Urban Phantom',
    'Shadow Enforcer', 'The Relentless Hunter', 'Outlaw Defender', 'Nightshade Reaper', 'The Dark Sentinel',
    'Crimson Phantom', 'Merciless Shadow', 'The Vengeful Warden', 'Black Mirage', 'Phantom Justice',
    'The Cursed Avenger', 'Steel Vengeance', 'Specter Enforcer', 'The Lone Reaper', 'Justice Seeker'
    
];

// Function to determine the role and generate the name
function generateRoleAndName() 
{
    // Randomly pick a role: Hero, Villain, or Antihero
    const roles = ['Hero', 'Villain', 'Antihero'];
    const role = roles[Math.floor(Math.random() * roles.length)];

    // Based on the role, pick a name from the corresponding list
    let name = '';
    if (role === 'Hero') 
    {
        name = heroes[Math.floor(Math.random() * heroes.length)];
    } 
        else if (role === 'Villain') 
        {
            name = villains[Math.floor(Math.random() * villains.length)];
        } 

        else 
        {
            name = antiheroes[Math.floor(Math.random() * antiheroes.length)];
        }

    // Display the results
    document.getElementById('roleDisplay').innerHTML = `<span style="font-size: 2.5rem; 
    font-style: italic;">Your role: ${role}</span>`;
    document.getElementById('nameDisplay').innerHTML = `<span style="font-size: 2rem; 
    display: block;">Your ${role} name is</span> <span style="font-size: 5rem; 
    font-weight: bold;">${name}</span>`;
}

// Event listener for the button
document.getElementById('generateButton').addEventListener('click', generateRoleAndName);
