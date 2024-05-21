export function displayUserInfo(data) {
    var infoDiv = document.getElementById('userInfo')
    infoDiv.innerHTML = `
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
    data.data.transaction_aggregate.nodes.forEach(node => {
        var rectangle = document.createElement("rect")
        var heightRect = Math.floor((node.amount * 400) / max)
        rectangle.dataset.project = node.object.name
        rectangle.dataset.xpAmount = node.amount

        rectangle.classList.add('rectangle')
        point += space
        rectangle.setAttribute('x', point)
        rectangle.setAttribute('y', 450-heightRect)
        rectangle.setAttribute('width', widthRect)
        rectangle.setAttribute('height', heightRect)
        rectangle.setAttribute('fill', 'red')
        
        histograph.appendChild(rectangle)
        point += widthRect
    });
}