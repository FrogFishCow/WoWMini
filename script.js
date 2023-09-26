//API KEY//
//curl -u "f4f259d5da6f449b9269e70d9bcc9268:lIn5XoSlDRlWEdlWktgDwDRh6RlbUinL" -d grant_type=client_credentials https://oauth.battle.net/token//
let api = 'USG3PCJwzMwzchRFDO5XijcXgDqPsZ5gGe'


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
const leftBar = document.querySelector('#left-bar')
const leftHealth = document.querySelector('#left-hp')

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

//PLAYER ABILITY ICONS BACK TO NORMAL//
const abilityframes = () => {
    playerPetDamage.style.border = '5px solid red'
    playerPetHeal.style.border = '5px solid green'
    playerPetSpecial.style.border = '5px solid white'
}

//COMPUTER ABILITIES FUNCTION//
const computerAbilities = () => {
    let compDiceRoll = 1
    //DAMAGE//
    
    console.log(compDiceRoll)
    if (compDiceRoll === 1 && computer.turn === true) {
        computer.turn = false
        player.turn = true
        let diceRoll = Math.floor(Math.random() * 20) + 1
        player.health = player.health - diceRoll
        player.healthBar = player.healthBar + diceRoll
        leftBar.style.background = `linear-gradient(to bottom, black 0%, black ${player.healthBar}%, green ${player.healthBar}%, green 100%)`;
        leftHealth.innerText = `${player.health}%`
    //HEAL//
    } else if (compDiceRoll === 2 && computer.turn === true) {
        computer.turn = false
        player.turn = true
        let diceRoll = Math.floor(Math.random() * 20) + 1
        computer.health = computer.health + diceRoll
        computer.healthBar = computer.healthBar - diceRoll
        computerHealProtection()
    //SPECIAL//
    } else if (compDiceRoll === 3 && computer.turn === true) {
        computer.turn = false
        player.turn = true
        specialAbility()

    }
}

//PLAYER DAMAGE ABILITY//
const playerDamage = () => {
        let diceRoll = Math.floor(Math.random() * 20) + 1
        player.damage = false
        player.turn = false
        computer.turn = true
        computer.health = computer.health - diceRoll
        computer.healthBar = computer.healthBar + diceRoll
        rightBar.style.background = `linear-gradient(to bottom, black 0%, black ${computer.healthBar}%, green ${computer.healthBar}%, green 100%)`;
        rightHealth.innerText = `${computer.health}%`
}
//PLAYER HEAL ABLITILY//
const playerHeal = () => {
        let diceRoll = Math.floor(Math.random() * 20) + 1
        player.heal = false
        player.turn = false
        computer.turn = true
        player.health = player.health + diceRoll
        player.healthBar = player.healthBar - diceRoll
        playerHealProtection()
}
//KEEP COMPUTERS HEALTH BAR AND HEALTH AT 100% IF OVERHEALING//
const computerHealProtection = () => {
    if (computer.healthBar <= 0) {
        computer.healthBar = 0
        computer.health = 100
        rightBar.style.background = `linear-gradient(to right, black 0%, green 40%, green 60%, black 100%)`;
        rightHealth.innerText = `100%`
    } else {
        rightBar.style.background = `linear-gradient(to bottom, black 0%, black ${computer.healthBar}%, green ${computer.healthBar}%, green 100%)`;
        rightHealth.innerText = `${computer.health}%`
    }
}
//KEEP PLAYERS HEALTH BAR AND HEALTH AT 100% IF OVERHEALING//
const playerHealProtection = () => {
    if (player.healthBar <= 0) {
            player.healthBar = 0
            player.health = 100
            leftBar.style.background = `linear-gradient(to right, black 0%, green 40%, green 60%, black 100%)`;
            leftHealth.innerText = `100%`
        } else {
            leftBar.style.background = `linear-gradient(to bottom, black 0%, black ${player.healthBar}%, green ${player.healthBar}%, green 100%)`;
            leftHealth.innerText = `${player.health}%`
        }
}
//SPECIAL ABILITY//
const specialAbility = () => {
    let diceRoll = Math.floor(Math.random() * 40) + 1
        let abilityRoll = Math.floor(Math.random() * 4) + 1
        if (abilityRoll === 1){ //DAMAGE THE COMPUTER//
            computer.health = computer.health - diceRoll
            computer.healthBar = computer.healthBar + diceRoll
            rightBar.style.background = `linear-gradient(to bottom, black 0%, black ${computer.healthBar}%, green ${computer.healthBar}%, green 100%)`;
            rightHealth.innerText = `${computer.health}%`
        } else if (abilityRoll === 2) { //HEAL PLAYER//
            player.health = player.health + diceRoll
            player.healthBar = player.healthBar - diceRoll
            playerHealProtection()
        } else if (abilityRoll === 3) { //DAMAGE PLAYER//
            player.health = player.health - diceRoll
            player.healthBar = player.healthBar + diceRoll
            leftBar.style.background = `linear-gradient(to bottom, black 0%, black ${player.healthBar}%, green ${player.healthBar}%, green 100%)`;
            leftHealth.innerText = `${player.health}%`
        } else if (abilityRoll === 4) { //HEAL THE COMPUTER//
            computer.health = computer.health + diceRoll
            computer.healthBar = computer.healthBar - diceRoll
            computerHealProtection()
        }
}

//DICE ROLL/ACTIVATE ABILITY//
dice.addEventListener('click', () => {
    if (player.damage === true && player.turn === true) {
        playerDamage()
        
    } else if (player.heal === true && player.turn === true) {
        playerHeal()

    } else if (player.special === true && player.turn === true) {
        player.special = false
        player.turn = false
        computer.turn = true
        specialAbility()
    }
    abilityframes() 
    setTimeout(computerAbilities, 2000)
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
            player.heal = false
            player.special = false
            if (player.turn === true) {
                playerPetDamage.style.border = '10px solid red'
                playerPetHeal.style.border = '5px solid green'
                playerPetSpecial.style.border = '5px solid white'
            }
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
            player.damage = false
            player.special = false
            if (player.turn === true) {
                playerPetDamage.style.border = '5px solid red'
                playerPetHeal.style.border = '10px solid green'
                playerPetSpecial.style.border = '5px solid white'
            }
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
            player.heal = false
            player.damage = false
            if (player.turn === true) {
                playerPetDamage.style.border = '5px solid red'
                playerPetHeal.style.border = '5px solid green'
                playerPetSpecial.style.border = '10px solid white'
            }
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
