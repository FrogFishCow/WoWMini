# WoWPetsMini

# World of Warcraft Battle Pets Mini!

## Description:

This project is going to re-create everyones favourite mini game within world of Warcraft, Pet Battles! 

It is going to be a condesed version of the mini. A Mini, mini game!

WoWPetsMini, will use Blizzards World of Warcraft API for generating and choosing pets, abilities, and icons.

WoWPetsMini is a simple game where players and/or the computer will be assigned a random pet and three abilties. 

They will alternate turns using their abilities in order to take their opponents down to 0 Health.

## Game: 
1. Game starts by allowing players to click to geneerate a randomized pet.

2. Computer/Oppenent chooses their randomized pet.
    - Onload:
        - empty pet icons
        - empty ability icons
        - empty background
        - prompt to randomize your a pet
    - EvenListereners:
        - click to generate pet/abilities

3. API pulls randomized pets, icons, and abilities and generates them into the main screen.
    - 1 icon 
    - 1 heal 
    - 1 damage
    - 1 special ability based on their pet speciliazation
    - loads health bar

4. Oppenents roll dice to see who goes first.
    - EventListeners: 
        - dice roll (random Math(1-10))
    - Player/Oppenent turn function activates based on die roll to see who goes first

5. First player chooses and ability to use and acitivates it by clicking on it.
    - EventListeners: 
        - Ability 1, 2, 3 Onclick to determine what is going to happen
        - Ability media 
6. Ability will require a dice roll to see how much power it will use
    - roll function
7. The ability will appear on top of the pet icon as "active"
    - active function
8. The ability will either heal, buff, debuff, or damage.
    - ability function 
9. Players Health bar will go up or down depending on what ability is used.
    - player object with a health stat will go up or down, buff or bebuff
10. When a players health reaches 0, the opponent wins.
    - Game over function
    - replay function 
    - score board tracker


## Challenges:

- Using the world of warcraft API is a little frustrating since you need an access key which they grant you for a limited period of time, but its simple to recreate another one. I'll have to manually create a new one everyone time i need to use it, so my API call link will have to be updated everytime i decide to use to play the game.

- Game logic and win conditions 

- Looping through the API 

- styling the css 