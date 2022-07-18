// variables 

var convertBtn = document.getElementById('convert');
var linkURL = document.getElementById('urlCatch');

// is an event that grabs the URL Value Input and sends to localhost
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${linkURL.value}`);
    sendURL(linkURL.value);
})

// this function has the proporse to make the request with back-end as a ajax connection
var sendURL = function (URL) {
    window.location.href = `http://localhost:4000/download/?URL=${URL}` 
}