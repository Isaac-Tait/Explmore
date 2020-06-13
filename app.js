// Gets the year and shortens it to the last two digits of the four digit year
function getYear(d) {
    //get the year
    var year = d.getFullYear();
    //pull the last two digits of the year
    year = year.toString().substr(-2);
    
    return year
};
var d = new Date();

console.log(getYear(d));

// Takes the region selected from the dropdown menu on the webpage and assigns a unique id to the region
let setRegion = document.getElementById("region").value
setRegion = 'Africa'

function region() {
    if(setRegion === 'Africa') {
        return "01"
    } else if(setRegion === 'Asia') {
        return "02"
    } else if(setRegion === 'Australia') {
        return "03"
    } else if(setRegion === 'Europe') {
        return "04" 
    } else if(setRegion === 'North America') {
        return "05"
    } else if(setRegion === 'South America') {
        return "06"
    } else if(setRegion === 'Russia') {
        return "07"
    } else if(setRegion === 'Japan') {
        return "08"
    } else if(setRegion === 'North and South Poles') {
        return "09"
    }
    return region()
};

console.log(region())

// Combines the year and the region and the users sequential four digit id together into a string
// Adds the text "LTM" to the front of the unique ID number
var id = "LTM" + getYear(d) + region() + Math.random().toString(10).slice(15)

console.log(id);

// Returns the unique id to the webpage in the space "Your unique ID is: ____"
document.getElementById('result').innerHTML = id

