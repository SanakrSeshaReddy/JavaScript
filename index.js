//const URL= "http://localhost:3000/data"

// GET Method

//fetch("http://localhost:3000/data")
//.then((res)=>res.json()).then((res1)=>console.log(res1));


// POST Method

/*let options = {
    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        id: 4,
        name: "Bhanu",
        Email: "bhanu@gmail.com"
    })
};

fetch(URL, options)
    .then(res => {
        if (res.ok) {
            console.log(res.status, res.statusText);
            return res.json();
        } else {
            throw new Error("Something went wrong: " + res.status);
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));*/

// PUT
/*const URL= "http://localhost:3000/data/3"
let options = {
    method: "Put",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        id: 3,
        name: "Bhanu",
        Email: "bhanu@gmail.com"
    })
};

fetch(URL, options)
    .then(res => {
        if (res.ok) {
            console.log(res.status, res.statusText);
            return res.json();
        } else {
            throw new Error("Something went wrong: " + res.status);
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));*/

// Delete

const URL= "http://localhost:3000/data/3"
let options = {
    method: "Delete",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        id: 3,
        name: "Bhanu",
        Email: "bhanu@gmail.com"
    })
};
fetch(URL, options)
    .then(res => {
        if (res.ok) {
            console.log(res.status, res.statusText);
            return res.json();
        } else {
            throw new Error("Something went wrong: " + res.status);
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));