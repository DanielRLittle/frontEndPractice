function requestyBoi() {
    if (req.readyState === 4) {
        console.log(req.responseText);
    }
}

function requestyRoi() {
    if (req.readyState === 4) {
        console.log(req.responseText);
        document.getElementById("requesty").innerHTML = JSON.parse(req.responseText).squadName.toUpperCase();
        let table = document.getElementById("table1");

        const headers = [
            'Name',
            'Age',
            'SecretIdentity',
            'Powers'
        ];

        // Generate headers
        const myTr = document.createElement("tr");
        for (let header of headers) {
            const th = document.createElement("th");
            th.innerText = header;
            myTr.appendChild(th);

        }
        table.appendChild(myTr);

        // Generate rows
        for (let member of JSON.parse(req.responseText).members) {
            console.log('hello', member);
            const myTr2 = document.createElement("tr");
            for (let x in member) {
                const td = document.createElement("td");
                td.innerText = member[x];
                myTr2.appendChild(td);
                table.appendChild(myTr2);
            }
        }

        // for (let member of JSON.parse(req.responseText).members) {
        //     console.log('hello', member);
        //     const myTr2 = document.createElement("tr");
        //     const td = document.createElement("td");
        //     td.innerText = member.name;
        //     const td2 = document.createElement("td");
        //     td2.innerText = member.age;
        //     myTr2.appendChild(td);
        //     myTr2.appendChild(td2);
        //     table.appendChild(myTr2);
        // }


        // // newRow.innerHTML = "<th>name</th> <th>age</th>";
        // newRow.innerHTML = "<td>hello</td> <td>world</td>";
        // for(m in squadName.members) {
        //     newRow.innerHTML = "<td> m.name </td> <td> m.age </td>";
        // }
    }
}

const req = new XMLHttpRequest();
req.onreadystatechange = requestyRoi;
req.open("GET", "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json");
req.send();