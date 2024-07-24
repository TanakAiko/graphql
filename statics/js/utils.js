export function getJWT() {
    // Récupérer le JWT du local storage
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        console.error('JWT Token not found in local storage.');
        return false;
    }
    return jwtToken
}

export function createPopup(text) {
    let el = document.createElement('div');
    el.classList.add('popup');
    el.innerHTML = text;
    document.body.appendChild(el);
    setTimeout(() => {
        el.remove();
    }, 5000);
}