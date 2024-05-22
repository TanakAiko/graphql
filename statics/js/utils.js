export function getJWT() {
    // Récupérer le JWT du local storage
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
        console.error('JWT Token not found in local storage.');
        return false;
    }
    return jwtToken
}

export const homePageData = `<svg height="100" width="100">
<circle r="45" cx="50" cy="50" fill="red" stroke="green" stroke-width="3" />
<circle r="25" cx="50" cy="50" fill="bisque" stroke="tomato" stroke-width="10" stroke-dasharray="1 3" />
</svg>

<form id="logout-form">
<button>Log out</button>
</form>

<div id="allInfo">
<div id="userInfo">
    <h3>User info</h3>
</div>

<div id="xp">
    <h3>XP by project</h3>
    <svg height="500" width="1000" id="histograph">
        <line x1="50" y1="50" x2="50" y2="450" stroke="black" stroke-width="2" />
        <line x1="50" y1="450" x2="950" y2="450" stroke="black" stroke-width="2" />
        <text x="30" y="29" id="ordoneTitle">Xp</text>
    </svg>
    </div>
    
<div id="pieChart">
    <h3>Audit</h3>
    <svg height="500" width="500" class="pie">
        <circle r="245" cx="250" cy="250" stroke-dasharray="75.3 100" fill="blue"/>
    </svg>
</div>
</div>
`
