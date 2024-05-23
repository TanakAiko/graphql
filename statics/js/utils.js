export function getJWT() {
    // Récupérer le JWT du local storage
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        console.error('JWT Token not found in local storage.');
        return false;
    }
    return jwtToken
}