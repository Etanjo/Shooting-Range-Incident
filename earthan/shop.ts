import {app} from "./canvas"
export let shopTitle = document.createElement('text')
export let upgradeButton = document.createElement('button')
app.appendChild (shopTitle)
app.appendChild(upgradeButton)


upgradeButton.style.left = "1550px"
upgradeButton.style.position = "absolute"
upgradeButton.style.top = '220px'
upgradeButton.style.width = '125px'
upgradeButton.style.height = '50px'
upgradeButton.style.background = 'url(/earthan/wood.png)'
upgradeButton.style.color = "White"
upgradeButton.innerText = "Upgrade Weapon"

shopTitle.style.left = '1600px'
shopTitle.style.position = "absolute"
shopTitle.style.background = 'url(/earthan/wood.png)'
shopTitle.innerText = "Bart Jenkins' Shop"
shopTitle.style.width = "300px"
shopTitle.style.borderBottomColor = "black"
shopTitle.style.borderBottomWidth = "5px"
shopTitle.style.borderStyle = "solid"
shopTitle.style.textShadow = '2px, 2px, black'