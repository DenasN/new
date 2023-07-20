// https://superheroapi.com/api/access-token/character-id 5935704729867838
const SUPERHERO_TOKEN = '5935704729867838'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const heroButton = document.getElementById('heroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.powerstats)
        const stats = getStatsHTML(json)
        const name = `<h2>${json.name}</h2>`
        heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" 
        height=200 width=200/> ${stats}`
    })
}
const statEmoji = {
    intelligence: '🧠',
    strength: '💪🏼',
    combat: '⚔', 
    speed: '🏃',
    durability: '🪨', 
    power: '🏋🏻‍♂️',
    combat: '🤼‍♂️',
}

const getStatsHTML = (character) => {
    // const name = `<h2>${json.name}</h2>`

   const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statEmoji[stat]}${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }) 
    console.log(stats.join(''))
    return stats.join('')
}

const searchButton = document.getElementById('searchButton')

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=200 width=200/>`
    })
}
const randomHero = () => {
    const numberOfHeroes = 731 
   return Math.floor(Math.random() * numberOfHeroes + 1)
}
heroButton.onclick = () => getSuperHero (randomHero())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)
