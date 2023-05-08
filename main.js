function getCount() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const count = JSON.parse(this.response)['days'];
            Object.keys(count).forEach(date => {
                let text = "<li>" + date + ": <span class='is'>";
                const dateCount = count[date];
                for (let i = 0; i < dateCount; i++) {
                    text += "<span class='i'>I</span>";
                }
                document.getElementById('board').innerHTML += text + "</li>";
            });
        }
    };
  xhttp.open("GET", "count.json", true);
  xhttp.send();
}

window.addEventListener('load', getCount())

