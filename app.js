document.getElementById('getUsersBtn').addEventListener('click', getUsers);
document.getElementById('getPostsBtn').addEventListener('click', getPosts);

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error leyendo la data', error);
        });
}

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error leyendo la data', error);
    }
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (Array.isArray(data)) {
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = JSON.stringify(item);
            outputDiv.appendChild(itemDiv);
        });
    } else {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = JSON.stringify(data);
        outputDiv.appendChild(itemDiv);
    }
}
