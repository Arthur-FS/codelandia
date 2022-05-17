const animation = document.querySelector('#write');

function writeText(e) {
    const textArray = e.innerHTML.split('');
    e.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 75 * i);
    });
}

setTimeout(writeText(animation), 200)