const btn = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

btn.addEventListener('click', themeChanged);


function darkTheme () {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    btn.checked = true;
};

function lightTheme () {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
};

function themeChanged() {
    if(btn.checked === true) {
        setLocalStorage(Theme.DARK);
        darkTheme();
    } else{
    setLocalStorage(Theme.LIGHT);
    lightTheme();
    };
};

function getLocalStorage() {
    const themeCheck = localStorage.getItem('Theme:');
    if (themeCheck === null || themeCheck === 'light-theme') {
      setLocalStorage(Theme.LIGHT);
      lightTheme();
    } else if (themeCheck === 'dark-theme') {
        setLocalStorage(Theme.DARK);
      darkTheme();
    }
};
getLocalStorage();

function setLocalStorage(message) {
    localStorage.setItem('Theme:', message);
};

  
 