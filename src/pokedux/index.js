console.log("Script running.")

const POKE_CONTAINER = document.getElementById("poke-container");
const POKE_CONTAINER_FRAG = document.createDocumentFragment();
const PAGE_SIZE = 12;
let currentPage = 0;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#F4E7DA',
	rock: '#D5D5D4',
	fairy: '#FCEAFF',
	poison: '#98D7A5',
	bug: '#F8D5A3',
	dragon: '#97B3E6',
	psychic: '#EAEDA1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
}

const main_types = Object.keys(colors);

const type = main_types.find((type) => poke_types.indexOf(type) > -1);


const buildPokedex = (pagenum = 0, pagesize = PAGE_SIZE) => {
    // Turn the pokemon collection into cards in the Pokedex
    const pokemonToDisplay = fetchThosePokemon(pagenum, pagesize);
    // for (let monster of pokemonToDisplay) {
    for (let monster in pokemonToDisplay) {
    // for (let monster of pokemonToDisplay.values()) {
    // pokemonToDisplay.forEach(...)
    // for (let monster of pokemonToDisplay) {
        let card = createPokemonCard(monster);
        POKE_CONTAINER.appendChild(card);
    }
};


// Take a single monster and convert it into a Pokedex card.
// createPokemonCard


// Important usage note: when saying the name of this function,
// you must make it sound like the "Who's That Pokemon?!" commercial transitions.
const fetchThosePokemon = (pagenum, pagesize) => {
    // Get the pokemon info from the database, and turn it into a tidy, usable list. Or just JSOM?
    const pokemonRaw = checkThePokedatabase(pagenum, pagesize);
    const pokemon = extractJson(pokemonRaw);
    if pokemonRaw {

    } else {
        console.error("You didn't find any monsters!");
        return [];
    }
};

const checkThePokedatabase = async (pagenum = 0, pagesize = PAGE_SIZE) => {
    // consult the Pokeoracle
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${pagesize}&offset=${pagesize * pagenum}`;
    const response = await fetch(url);  // includes headers and such
    if (response.ok) {
        return response
    } else {
        return []
    }
}


const extractJson = (response) => {
    let result = response.json().results;
    return result
}


const createPokemonCard = (pokemon) => {
    // use DocumentFragment here?
    const pokemonEl = document.createElement("div");
    const pokemonType = pokemon.types.map( type => type.type.name).join(",");
    // they have: const pokemonType = pokemon.types.map( type => type.type.name );
    const pokemonInnerHtml =
    `
    <div class="pokemon" style="background-color: rgb(222, 253, 224);">
        <div class="image-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="picture of ${pokemon.name}">
        </div>
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">Type <span>${pokemonType}</span></small>
        </div>
    </div> 
    `;
    pokemonEl.innerHTML = pokemonInnerHtml;
    return pokemonEl;
}

const pageForward = (currentPage) => {
    buildPokedex(++currentPage);
};

const pageBackward = (currentPage) => {
    buildPokedex(--currentPage);
};


buildPokedex();



/* -----------+-----------+-----------+-----------+----------- //

POKEDUX!
You really ought to attempt to obtain the complete set!

Starting again.
    using API paging
    allowing user input to paging
    validating that input
    using DocumentFragment
    handling multi-type
    building more functionally
        ...or should it be more OOPy?
            probably not. the focus is the DOM, not the creature.

// -----------+-----------+-----------+-----------+----------- */



const POKE_CONTAINER = document.getElementById("poke-container");
let pagesize = 12;  // const PAGE_SIZE = 12;
let currentPage = 0;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
}


const ƒ = () => {}


const ƒ = () => {}
buildPokedux
    fetchThosePokeyDucks
    renderThatPokedux

do the thing
    get the data
        set up the parameters
            modify parameters with user input
                validate user input
        make the API call
            store previous & next
        format the data
            check for success
            extract response data from wrapper
            convert to desired form
                watch those types
    present the data
        make the flow
            wrap around
        make the cards
            construct cards
                extract the data
                adjust beaks
                adjust colors
            add cards to DocumentFragment
            load frags to flow


