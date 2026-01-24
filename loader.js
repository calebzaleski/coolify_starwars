function loadTitle() {
    fetch('titlebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('title').innerHTML = data;
        });
}

loadTitle();