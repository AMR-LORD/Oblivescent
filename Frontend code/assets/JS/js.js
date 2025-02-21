async function fetch_url(url) {
    const response = await fetch(url);
    const data = await response.json();
    let results = data.results;
    let counter = 0;
while (results.length > 0&&counter<10) {
    let fullname1 = results.pop().name;
    counter++;
    console.log(`${fullname1.first} ${fullname1.last}`);
    console.log(counter);
    if (counter==10) {
        break;
    }
}
}
fetch_url("https://randomuser.me/api/?results=10");
