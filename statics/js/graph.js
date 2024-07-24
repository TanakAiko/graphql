export function displayUserInfo(data) {
    var infoDiv = document.getElementById('userInfo')
    infoDiv.innerHTML += `
    <p><span class="title">Last Name:</span> ${data.data.user['0'].lastName}</p>
    
    <p><span class="title">First Name:</span> ${data.data.user['0'].firstName}</p>
    
    <p><span class="title">Email:</span> ${data.data.user['0'].email}</p>
    
    <p><span class="title">Login:</span> ${data.data.user['0'].login}</p>
    
    <p><span class="title">XP amount:</span> ${data.data.transaction_aggregate.aggregate.sum.amount} B</p>
    
    `;
}

export function histograph(data) {
    console.log('Data:', data);
    const tab = data.data.transaction_aggregate.nodes.filter(function (node) {
        return node.object.type === "project"
    })
    
    var point = 0
    var max = Math.max(...tab.map(node => node.amount))
    var widthRect = Math.floor((900 / tab.length) * 0.7)
    var space = Math.floor((900 / tab.length) * 0.3)
    var histograph = document.getElementById('histograph')
    var addBare = ''
    addBare += `<text x="2" y="60" class="ordoneLeg">${max}</text>
    <text x="30" y="460" class="ordoneLeg">0</text>
    <text x="2" y="260" class="ordoneLeg">${max / 2}</text>`
    tab.forEach(node => {
        var heightRect = Math.floor((node.amount * 400) / max)
        point += space
        addBare += `<rect id="${node.object.name}-main" x="${point + 50}" y="${450 - heightRect - 2}" width="${widthRect}" height="${heightRect}" class="rectangle" data-project="${node.object.name}" data-xp-amount="${node.amount}"></rect>
        <text x="${point + 62}" y="${450 - heightRect - 8}" class="legendeTXT" id="${node.object.name}L">${node.amount}</text>
        <text x="${point + 70}" y="${450 + 20}" class="legendeTXT" id="${node.object.name}">${node.object.name}</text>`
        point += widthRect
    });
    histograph.innerHTML += addBare
    rectAddListener()
}

export function pieChart(data) {
    const pie = document.getElementById("pie")

    const center = 250
    const radius = 200
    var start = 0


    const audit = [{ count: data.validAudits.aggregate.count, color: "aquamarine", type: "validAudit" }, { count: data.failedAudits.aggregate.count, color: "#7F5056", type: "failedAudit" }]
    audit.forEach(gOf => {
        const angle = (gOf.count / (audit[0].count + audit[1].count)) * 2 * Math.PI

        const x1 = center + radius * Math.cos(start)
        const y1 = center + radius * Math.sin(start)
        const x2 = center + radius * Math.cos(start + angle)
        const y2 = center + radius * Math.sin(start + angle)

        const largeArcFlag = angle > Math.PI ? 1 : 0

        pie.innerHTML += `<path d="M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}" fill=${gOf.color} id=${gOf.type}></path>`
        start += angle
    });

    const labelValid = document.getElementById("labelValid")
    const labelFail = document.getElementById("labelFail")
    const validColor = document.getElementById("validColor")
    const failColor = document.getElementById("failColor")

    labelValid.innerText = `Audit validated: ${audit[0].count}`
    labelFail.innerText = `Audit failed: ${audit[1].count}`
    validColor.style.display = "block"
    failColor.style.display = "block"
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
    const main = document.getElementById(project + "-main")
    const rect = document.getElementById(project)
    const rectL = document.getElementById(project + "L")
    rect.style.display = "inline"
    rectL.style.display = "inline"
    main.style.fill = "#7F5056"
}

function stopDisplay(event) {
    const project = event.target.dataset.project
    const main = document.getElementById(project + "-main")
    const rect = document.getElementById(project)
    const rectL = document.getElementById(project + "L")
    rect.style.display = "none"
    rectL.style.display = "none"
    main.style.fill = "aquamarine"
}
