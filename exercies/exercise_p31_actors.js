let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

console.log(`\nWho is the Academy Member whose ID is 187?`);
console.log(academyMembers.find(m => m.memID === 187).name);

console.log(`\nWho has been in at least 3 films?`);
academyMembers.filter(m => m.films.length >= 3).forEach(m => console.log(m.name));

console.log(`\nWho has a name that starts with "Bob"?`);
academyMembers.filter(m => m.name.startsWith("Bob")).forEach(m => console.log(m.name));

//HARDER?
console.log(`\nWhich Academy Members have been in a film that starts with "A"`);
academyMembers.filter(m => m.films.filter(f => f.startsWith("A")).length).forEach(m => console.log(m.name));
