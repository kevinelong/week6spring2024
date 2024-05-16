document.addEventListener("DOMContentLoaded", () => {

    function option(text, target, value) {
        const o = document.createElement("option");
        o.innerText = text;
        o.value = value !== undefined ? value : text;
        target.appendChild(o);
    }

    function getTH(key) {
        return `<th>${key}</th>`;
    }

    content.innerHTML = "?";
    const example = activities[0]; //first activity object
    const keys = Object.keys(example);
    keys.shift(); //remove the first one
    const headers = keys.map(getTH).join("");
    theadContent.innerHTML = `<tr>${headers}</tr>`;

    categories.unshift("Select one...") //insert at beginning
    const s = document.createElement("select");
    // s.size = categories.length;
    // option("Select one...", s, "")
    categories.forEach(c => option(c, s))
    nav.appendChild(s);

    s.addEventListener("click",
        () => content.innerHTML = activities.filter(
            a => a.category == categories[s.selectedIndex]
        ).map(
            a => `<tr>
            <td>${a.id}</td>
            <td>${a.name}</td>
            <td>${a.description}</td>
            <td>${a.location}</td>
            <td class="right">$${a.price.toFixed(2)}</td>
            </tr>`
        ).join("")
    );

    //     function activityRow(a) {
    //         return `
    // <tr>
    //     <td>${a.id}</td>
    //     <td>${a.name}</td>
    //     <td>${a.price}</td>
    // </tr>`;
    //     }

    //     function isMatch(a) {
    //         return a.category == categories[s.selectedIndex];
    //     }

    //     function getRows() {
    //         const matches = activities.filter(isMatch)
    //         content.innerHTML = matches.map(activityRow).join("");
    //     }

    //     s.addEventListener("click", getRows);


});//END LOADED