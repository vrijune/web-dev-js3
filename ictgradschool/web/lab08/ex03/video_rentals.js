window.addEventListener("load", function () {

    // Note: the data within the 'customerdb.js' file will be within scope
    // for code in this file because it is loaded into the browser document

    // Console log demo to show how to access fields within the JavaScript object
    console.log(`Customer #${2} details --> Name: ${customers[2].name}  Gender: ${customers[2].gender}`);

    // This array has the names of the header rows for the tables
    const headerNames = ["Name", "Gender", "Year born", "Year Joined", "Number of Rentals"];

    // These nested JavaScript objects can be used to store
    // the statistics you calculate for the table
    const summaryStatistics = {
        numMales: {
            name: "Number of males",
            value: 0
        },
        numFemales: {
            name: "Number of females",
            value: 0
        },
        thirty_or_younger: {
            name: "0-30 yrs",
            value: 0
        },
        under_65: {
            name: "< 65yrs",
            value: 0
        },
        on_or_over_65: {
            name: "65 <=",
            value: 0
        },
        num_gold: {
            name: "Gold members",
            value: 0
        },
        num_silver: {
            name: "Silver members",
            value: 0
        },
        num_bronze: {
            name: "Bronze members",
            value: 0
        }
    };

    /* TODO: Your code here */
  function createHeadName() {
      const thead =document.createElement("thead");
      const tr = document.createElement("tr");
      const div = document.querySelector("#details");
      for (let i = 0; i <headerNames.length; i++) {

          const th1 = document.createElement("th");
          // const th2 =document.createElement("th");
          // const th3 = document.createElement("th");
          // const th4 = document.createElement("th");
          // const th5 = document.createElement("th");
          th1.innerHTML=headerNames[i];
          // th2.innerHTML=headerNames[i+1];
          // th3.innerHTML=headerNames[i+2];
          // th4.innerHTML=headerNames[i+3];
          // th5.innerHTML=headerNames[i+4];
          tr.appendChild(th1);
          // tr.appendChild(th2);
          // tr.appendChild(th3);
          // tr.appendChild(th4);
          // tr.appendChild(th5);
          div.appendChild(tr);
      }

  }
         createHeadName();



    const tbody =  document.createElement("tbody");
    const table = document.querySelector("#details");
function createTbody() {

    for (let i = 0; i <customers.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML= `<td>${customers[i].name}</td>
                       <td>${customers[i].gender}</td>
                       <td>${customers[i].year_born}</td>
                       <td>${customers[i].joined}</td>
                       <td>${customers[i].num_hires}</td>`;
        tbody.appendChild(tr);
        table.appendChild(tbody);


    }
}


createTbody();






});

