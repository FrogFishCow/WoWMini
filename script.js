//API KEY//
//curl -u "f4f259d5da6f449b9269e70d9bcc9268:lIn5XoSlDRlWEdlWktgDwDRh6RlbUinL" -d grant_type=client_credentials https://oauth.battle.net/token//
let api = 'US1YM1Ckqb0ppwqfC8wW4LWGmQr5UfWA7v'


//VARIABLES//
const generatePet = document.querySelector('#generate')
const playerPetImage = document.querySelector('#player-pet-image')
const computerPetImage = document.querySelector('#computer-pet-image')
const compPet = document.querySelector('#comp-pet')
const playPet = document.querySelector('#play-pet')
const playerPetInfo = document.querySelector('#player-info')
const computerPetInfo = document.querySelector('#computer-info')
const playerPetMouse = document.getElementById('player-pet-img')
const playerPetDamage = document.getElementById('player-damage')
const playerPetHeal = document.getElementById('player-heal')
const playerPetSpecial = document.getElementById('player-special')
const computerPetMouse = document.getElementById('computer-pet-img')
const computerPetDamage = document.getElementById('computer-damage')
const computerPetHeal = document.getElementById('computer-heal')
const computerPetSpecial = document.getElementById('computer-special')
const dice = document.getElementById('player-dice')
const rightBar = document.querySelector("#right-bar")
const rightHealth = document.querySelector('#right-hp')

//PLAYER OBJECT STATUS//
const player = {
    turn: true,
    health: 100,
    damage: false,
    heal: false,
    special: false,
    healthBar: 0,
}

//COMPUTER OBJECT STATUS//
const computer = {
    turn: false,
    health: 100,
    damage: false,
    heal: false,
    special: false,
    healthBar: 0,
}

//PLAYER DAMAGE ABILITY//


//DICE ROLL//
dice.addEventListener('click', () => {
    if (player.damage === true && player.turn === true) {
        player.damage = false
        player.turn = false
        let diceRoll = Math.floor(Math.random() * 20)
        computer.health = computer.health - diceRoll
        computer.healthBar = computer.healthBar + diceRoll
        rightBar.style.background = `linear-gradient(to bottom, black 0%, black ${computer.healthBar}%, green ${computer.healthBar}%, green 100%)`;
        rightHealth.innerText = `${computer.health}%`
        
    } else if (player.heal === true && player.turn === true) {
        player.heal = false
        player.turn = false
        let diceRoll = Math.floor(Math.random() * 20)


    } else if (player.special === true && player.turn === true) {
        player.special = false
        player.turn = false
        let diceRoll = Math.floor(Math.random() * 30)

    }
})


//ALL ICONS/DESCRIPTIONS//
generatePet.addEventListener('click', async () => {
    //PLAYER AND PET NAMES(top)//
    let buttonClickName = await axios.get(`https://us.api.blizzard.com/data/wow/pet/index?namespace=static-us&locale=en_US&access_token=${api}`)
    playPetNumber = Math.floor(Math.random() * 1744)
    compPetNumber = Math.floor(Math.random() * 1744)
    playPet.innerText = buttonClickName.data.pets[playPetNumber].name
    compPet.innerText = buttonClickName.data.pets[compPetNumber].name

    //PLAYER PET ICON//
    let playPetID = buttonClickName.data.pets[playPetNumber].id
    let buttonClickImageP = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet/${playPetID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let playPetImg = buttonClickImageP.data.assets[0].value
    document.getElementById("player-pet-img").src=`${playPetImg}`

    //COMPUTER PET ICON//
    let compPetID = buttonClickName.data.pets[compPetNumber].id
    let buttonClickImageC = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet/${compPetID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let compPetImg = buttonClickImageC.data.assets[0].value
    document.getElementById('computer-pet-img').src=`${compPetImg}`

    //PLAYER DAMAGE ABILITY ICON//
    let playPetInfo = await axios.get(`https://us.api.blizzard.com/data/wow/pet/${playPetID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let playPetDamageID = playPetInfo.data.abilities[0].ability.id
    let playPetDamageIconID = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet-ability/${playPetDamageID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let playPetDamageIcon = playPetDamageIconID.data.assets[0].value
    document.getElementById('player-damage').src=`${playPetDamageIcon}`

    //PLAYER HEAL ABILITY ICON//
    let playPetHealID = playPetInfo.data.abilities[1].ability.id
    let playPetHealIconID = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet-ability/${playPetHealID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let playPetHealIcon = playPetHealIconID.data.assets[0].value
    document.getElementById('player-heal').src=`${playPetHealIcon}`

    //PLAYER SPECIAL ABILITY ICON//
    let playPetSpecialID = playPetInfo.data.abilities[2].ability.id
    let playPetSpecialIconID = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet-ability/${playPetSpecialID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let playPetSpecialIcon = playPetSpecialIconID.data.assets[0].value
    document.getElementById('player-special').src=`${playPetSpecialIcon}`

    //COMPUTER DAMAGE ABILITY ICON//
    let compPetInfo = await axios.get(`https://us.api.blizzard.com/data/wow/pet/${compPetID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let compPetDamageID = compPetInfo.data.abilities[0].ability.id
    let compPetDamageIconID = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet-ability/${compPetDamageID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let compPetDamageIcon = compPetDamageIconID.data.assets[0].value
    document.getElementById('computer-damage').src=`${compPetDamageIcon}`

    //COMPUTER HEAL ABILITY ICON//
    let compPetHealID = compPetInfo.data.abilities[1].ability.id
    let compPetHealIconID = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet-ability/${compPetHealID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let compPetHealIcon = compPetHealIconID.data.assets[0].value
    document.getElementById('computer-heal').src=`${compPetHealIcon}`

    //COMPUTER SPECIAL ABILITY ICON//
    let compPetSpecialID = compPetInfo.data.abilities[2].ability.id
    let compPetSpecialIconID = await axios.get(`https://us.api.blizzard.com/data/wow/media/pet-ability/${compPetSpecialID}?namespace=static-us&locale=en_US&access_token=${api}`)
    let compPetSpecialIcon = compPetSpecialIconID.data.assets[0].value
    document.getElementById('computer-special').src=`${compPetSpecialIcon}`


    //PLAYER PET DESCRIPTION MOUSEOVER/MOUSEOUT//
    playerPetMouse.addEventListener('mouseover', () => {
        playerPetInfo.innerText = playPetInfo.data.description
     })
    playerPetMouse.addEventListener('mouseout', () => {
        playerPetInfo.innerText = ''
    })

    //PLAYER PET DAMAGE ABILITY MOUSEOVER/MOUSEOUT//
    playerPetDamage.addEventListener('mouseover', () => {
        playerPetInfo.innerText = `"${playPetInfo.data.abilities[0].ability.name}" \nInflicts 1-20 Damage to enemy`
        playerPetDamage.addEventListener('click', () => {
            player.damage = true

        })
    })
    playerPetDamage.addEventListener('mouseout', () => {
        playerPetInfo.innerText = ''
    })

    //PLAYER PET HEAL ABILITY MOUSEOVER/MOUSEOUT//
    playerPetHeal.addEventListener('mouseover', () => {
        playerPetInfo.innerText = `"${playPetInfo.data.abilities[1].ability.name}" \nHeals you for 1-20`
        playerPetHeal.addEventListener('click', () => {
            player.heal = true

        })
    })
    playerPetHeal.addEventListener('mouseout', () => {
        playerPetInfo.innerText = ''
    })

    //PLAYER PET SPECIAL ABILITY MOUSEOVER/MOUSEOUT//
    playerPetSpecial.addEventListener('mouseover', () => {
        playerPetInfo.innerText = `"${playPetInfo.data.abilities[2].ability.name}" \nDoes something random, who knows?`
        playerPetSpecial.addEventListener('click', () => {
            player.special = true

        })
    })
    playerPetSpecial.addEventListener('mouseout', () => {
        playerPetInfo.innerText = ''
    })

    //COMPUTER PET DESCTIPTION MOUSEOVER/MOUSEOUT//
    computerPetMouse.addEventListener('mouseover', () => {
        computerPetInfo.innerText = compPetInfo.data.description
        computerPetInfo.style.color = 'white';
    })
      computerPetMouse.addEventListener('mouseout', () => {
        computerPetInfo.innerText = ''
    })

    //COMPUTER PET DAMAGE MOUSEOVER/MOUSEOUT//
    computerPetDamage.addEventListener('mouseover', () => {
        computerPetInfo.innerText = `"${compPetInfo.data.abilities[0].ability.name}" \nInflicts 1-20 Damage to enemy`
    })
    computerPetDamage.addEventListener('mouseout', () => {
        computerPetInfo.innerText = ''
    })

    //COMPUTER PET HEAL ABILITY MOUSEOVER/MOUSEOUT//
    computerPetHeal.addEventListener('mouseover', () => {
        computerPetInfo.innerText = `"${compPetInfo.data.abilities[1].ability.name}" \nHeals you for 1-20`
    })
    computerPetHeal.addEventListener('mouseout', () => {
        computerPetInfo.innerText = ''
    })

    //COMPUTER PET SPECIAL ABILITY MOUSEOVER/MOUSEOUT//
    computerPetSpecial.addEventListener('mouseover', () => {
        computerPetInfo.innerText = `"${compPetInfo.data.abilities[2].ability.name}" \nDoes something random, who knows?`
    })
    computerPetSpecial.addEventListener('mouseout', () => {
        computerPetInfo.innerText = ''
    })
})





//TESTS//
// change = document.querySelector("#left-bar")
// change.style.background = "linear-gradient(to bottom, black 0%, black 25%, green 25%, green 100%)";