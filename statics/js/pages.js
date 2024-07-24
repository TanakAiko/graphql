export const homeHTML = `
<form id="logout-form">
    <div id="mainTitle">
        <p>GraphQL</p>
    </div>
    <button class="animated-button">
        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span class="text">Log out</span>
        <span class="circle"></span>
        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
      </button>
</form>

<div id="allInfo">
    <div id="userInfo">
        <h3>User info</h3>
    </div>
    
    <div id="pieChart">
        <h3>Audit ratio</h3>
        <div id="svgPlus">
            <svg height="500" width="500" id="pie" ></svg>

            <div id="legendPie">
                <div id="valid">
                    <div id="validColor"></div>
                    <label for="validColor" id="labelValid"></label>
                </div>
                <div id="fail">
                    <div id="failColor"></div>
                    <label for="failColor" id="labelFail"></label>
                </div>
            </div>
        </div>
    </div>
    
    <div id="xp">
        <h3>XP by project</h3>
        <svg height="500" width="1000" id="histograph">
            <line x1="50" y1="50" x2="50" y2="450" stroke="black" stroke-width="2" />
            <line x1="50" y1="450" x2="950" y2="450" stroke="black" stroke-width="2" />
            <text x="20" y="29" id="ordoneTitle">Xp(B)</text>
        </svg>
    </div>

    
</div>

`

export const loginHTML = `
<div id="loginBody">
    <div class="login-container">
        <p id="loginTitle">GraphQL<p>
        <form id="login-form">
            <label class="loginLabel" for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username or email" required autocomplete="on">
            <label class="loginLabel" for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required>
            <button id="loginButtonL" type="submit">Login</button>
        </form>
    </div>
</div>
`