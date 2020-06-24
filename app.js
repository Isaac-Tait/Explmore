function compileUniqueID() {
    // Gets the year and shortens it to the last two digits of the four digit year
    let getYear = () => {
        var d = new Date();
        //Gets the current year
        var year = d.getFullYear();
        //Removes the first two digits of the year
        year = year.toString().substr(-2);
        return year
    };
    console.log(getYear());

    const btn = document.querySelector('#btn');
    // Takes the region selected from the radio button menu in index.html and assigns a unique two digit number to the specific region.
    
    btn.onclick = region = () => {
        let setRegions = document.querySelectorAll('input[name="region"]')
        
        for (const setRegion of setRegions) {
            if(setRegion.checked === "Africa") {
                return "01"
            } else if(setRegion.checked === "Asia") {
                return "02"
            } else if(setRegion.checked === "Australia") {
                return "03"
            } else if(setRegion.checked === "Europe") {
                return "04" 
            } else if(setRegion.checked === "North America") {
                return "05"
            } else if(setRegion.checked === "South America") {
                return "06"
            } else if(setRegion.checked === "Russia") {
                return "07"
            } else if(setRegion.checked === "Japan") {
                return "08"
            } else if (setRegion.checked === "North and South Poles") {
                return "09"
            } else return "Select a region please" 
        }
        return region();
    };
    console.log(region);

    // Compiles the year and the region and the users randomly generated five digit id together into a string and appends the text "LTM" (Life Time Member) to the front of the unique ID number
    return "LTM" + getYear() + region() + Math.floor(10000 + Math.random() * 90000)
};

// Returns the unique id to the webpage in the space "Your unique ID is: ____"
document.getElementById('result').innerHTML = compileUniqueID();
