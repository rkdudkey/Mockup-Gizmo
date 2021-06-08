
const loadPage = () => {
    let textLoad = document.querySelector('.welcome img');
    let welcome = document.querySelector('.welcome');
    textLoad.classList = 'bouce-anime';
    

    setInterval(() => {
        textLoad.classList.remove('bouce-anime');
        textLoad.classList.add('fadeOutOpacity');  
        welcome.classList.add('arrow-bg');
        welcome.classList.add('reveal-triangle');
    }, 1000);

    setInterval(() => {
        welcome.classList.remove('arrow-bg');
        welcome.classList.remove('reveal-triangle');
        welcome.style.display = "none";
    }, 2000);
    
}


window.onload = loadPage();
