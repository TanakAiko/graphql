export function displayUserInfo(data) {
    var infoDiv = document.getElementById('userInfo')
    infoDiv.innerHTML += `
    Last Name: ${data.data.user['0'].lastName}
    <br>
    First Name: ${data.data.user['0'].firstName}
    <br>
    Email: ${data.data.user['0'].email}
    `;
}

export function histograph(data) {
    console.log('Data:', data);
    var point = 0
    var max = Math.max(...data.data.transaction_aggregate.nodes.map(node => node.amount))
    var widthRect = Math.floor((900 / data.data.transaction_aggregate.nodes.length) * 0.7)
    var space = Math.floor((900 / data.data.transaction_aggregate.nodes.length) * 0.3)
    var histograph = document.getElementById('histograph')
    var addBare = ''
    addBare += `<text x="2" y="60" class="ordoneLeg">${max}</text>`
    addBare += `<text x="30" y="460" class="ordoneLeg">0</text>`
    addBare += `<text x="2" y="260" class="ordoneLeg">${max / 2}</text>`
    data.data.transaction_aggregate.nodes.forEach(node => {
        var heightRect = Math.floor((node.amount * 400) / max)
        point += space
        addBare += `<rect x="${point + 50}" y="${450 - heightRect - 2}" width="${widthRect}" height="${heightRect}" class="rectangle" data-project="${node.object.name}" data-xp-amount="${node.amount}"></rect>`
        addBare += `<text x="${point + 62}" y="${450 - heightRect - 8}" class="legendeTXT" id="${node.object.name}L">${node.amount}</text>`
        addBare += `<text x="${point + 70}" y="${450 + 20}" class="legendeTXT" id="${node.object.name}">${node.object.name}</text>`
        point += widthRect
    });
    histograph.innerHTML += addBare
    rectAddListener()
}

export function pieChart(data) {
    const pie = document.getElementById("pie")

    const angleValid = (data.validAudits.aggregate.count / (data.validAudits.aggregate.count+data.failedAudits.aggregate.count)) * 2 * Math.PI
    const angleFail = (data.failedAudits.aggregate.count / (data.validAudits.aggregate.count+data.failedAudits.aggregate.count)) * 2 * Math.PI

    const center = 250
    const radius = 200

    const x1Valid = center + radius * Math.cos(0);
    const y1Valid = center + radius * Math.sin(0);
    const x2Valid = center + radius * Math.cos(angleValid);
    const y2Valid = center + radius * Math.sin(angleValid);

    const x1Fail = center + radius * Math.cos(angleValid);
    const y1Fail = center + radius * Math.sin(angleValid);
    const x2Fail = center + radius * Math.cos(angleValid + angleFail);
    const y2Fail = center + radius * Math.sin(angleValid + angleFail);

    const pathValid = document.createElement("path");
    const largeArcFlagValid = angleValid > Math.PI ? 1 : 0;
    const pathFail = document.createElement("path");
    const largeArcFlagFail = angleFail > Math.PI ? 1 : 0;


    const dValid = [
        `M ${center} ${center}`,
        `L ${x1Valid} ${y1Valid}`,
        `A ${radius} ${radius} 0 ${largeArcFlagValid} 1 ${x2Valid} ${y2Valid}`,
        "Z"
    ].join(" ");

    const dFail = [
        `M ${center} ${center}`,
        `L ${x1Fail} ${y1Fail}`,
        `A ${radius} ${radius} 0 ${largeArcFlagFail} 1 ${x2Fail} ${y2Fail}`,
        "Z"
    ].join(" ");

    pathValid.setAttribute("d", dValid);
    pathValid.setAttribute("fill", "aquamarine");
    pathValid.setAttribute("id", "validPath")

    pathFail.setAttribute("d", dFail);
    pathFail.setAttribute("fill", "blue");
    pathFail.setAttribute("id", "failPath")

    pie.appendChild(pathValid)
    pie.appendChild(pathFail)

}

function rectAddListener() {
    const rectangles = document.querySelectorAll(".rectangle")
    rectangles.forEach(rect => {
        rect.addEventListener("mouseover", displayLegende)
        rect.addEventListener("mouseout", stopDisplay)
    })
}

function displayLegende(event) {
    const project = event.target.dataset.project
    const rect = document.getElementById(project)
    const rectL = document.getElementById(project + "L")
    rect.style.display = "inline"
    rectL.style.display = "inline"

}

function stopDisplay(event) {
    const project = event.target.dataset.project
    const rect = document.getElementById(project)
    const rectL = document.getElementById(project + "L")
    rect.style.display = "none"
    rectL.style.display = "none"
}
