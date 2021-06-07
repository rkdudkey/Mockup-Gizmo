
const loadPage = () => {
    let textLoad = document.querySelector('.welcome img');
    let welcome = document.querySelector('.welcome');
    textLoad.classList = 'bouce-anime';
    

    setInterval(() => {
        textLoad.classList.remove('bouce-anime');
        textLoad.classList.add('fadeOutOpacity');  
    }, 1000);

    setInterval(() => {
        welcome.style.display = "none"
    }, 2000);
    
}


window.onload = loadPage();
