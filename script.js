//API KEY//
//curl -u "f4f259d5da6f449b9269e70d9bcc9268:lIn5XoSlDRlWEdlWktgDwDRh6RlbUinL" -d grant_type=client_credentials https://oauth.battle.net/token//
let api = 'US1YM1Ckqb0ppwqfC8wW4LWGmQr5UfWA7v'


//VARIABLES//
const generatePet = document.querySelector('#generate')
const playerPetImage = document.querySelector('#player-pet-image')
const computerPetImage = document.querySelector('#computer-pet-image')
const compPet = document.querySelector('#comp-pet')
const playPet = document.querySelector('#play-pet')

//FUNCTIONS//
generatePet.addEventListener('click', async () => {
    let buttonClickName = await axios.get(`https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=${api}`)

    console.log(buttonClickName)

    playPetNumber = Math.floor(Math.random() * 1744)
    compPetNumber = Math.floor(Math.random() * 1744)
    playPet.innerText = buttonClickName.data.pets[playPetNumber].name
    compPet.innerText = buttonClickName.data.pets[compPetNumber].name
    console.log(playPetNumber, compPetNumber)

    let playPetID = buttonClickName.data.pets[playPetNumber].id
    console.log(playPetID)
    let buttonClickImageP = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet/${playPetID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let playPetImg = buttonClickImageP.data.assets[0].value
    document.getElementById("player-pet-img").src=`${playPetImg}`

    let compPetID = buttonClickName.data.pets[compPetNumber].id
    let buttonClickImageC = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet/${compPetID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let compPetImg = buttonClickImageC.data.assets[0].value
    document.getElementById('computer-pet-img').src=`${compPetImg}`

 



})


//EVENT LISTENERS//


//TESTS//
// change = document.querySelector("#left-bar")
// change.style.background = "linear-gradient(to bottom, black 0%, black 25%, green 25%, green 100%)";