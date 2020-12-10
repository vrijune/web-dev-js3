window.addEventListener("load", function () {

    // populate the 'contents' table with information from the 'navigator' object
    // http://www.w3schools.com/jsref/dom_obj_table.asp
    // http://www.w3schools.com/jsref/met_table_insertrow.asp

    let tBody = document.querySelector("#contents");



    for (property in navigator){
        tBody.innerHTML += `<tr><td>${property}</td><td>${navigator[property]}</td></tr>`

    }

    //
    // for (property in navigator){
    //     let tRow= document.createElement("tr");
    //     let cellOne = document.createElement("td");
    //     let cellTwo = document.createElement("td");
    //
    //     cellOne.innerHTML=property;
    //     cellTwo.innerHTML=navigator[property];
    //     tRow.appendChild(cellOne);
    //     tRow.appendChild(cellTwo);
    //     tBody.appendChild(tRow);
    // }

});