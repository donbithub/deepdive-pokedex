const maxPokemon = 1025;
const randomId = Math.floor(Math.random() * maxPokemon) + 1;

const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id") || randomId;

const typeColorsBackground = {
  grass: "from-green-400 via-green-500 to-green-600",
  fire: "from-red-400 via-red-500 to-red-600",
  water: "from-blue-400 via-blue-500 to-blue-600",
  bug: "from-lime-400 via-lime-500 to-lime-600",
  normal: "from-gray-400 via-gray-500 to-gray-600",
  electric: "from-yellow-400 via-yellow-500 to-yellow-600",
  poison: "from-purple-400 via-purple-500 to-purple-600",
  fighting: "from-rose-400 via-rose-500 to-rose-600",
  psychic: "from-pink-400 via-pink-500 to-pink-600",
  rock: "from-stone-400 via-stone-500 to-stone-600",
  ground: "from-amber-400 via-amber-500 to-amber-600",
  ghost: "from-violet-400 via-violet-500 to-violet-600",
  dragon: "from-indigo-400 via-indigo-500 to-indigo-600",
  ice: "from-cyan-400 via-cyan-500 to-cyan-600",
  fairy: "from-fuchsia-400 via-fuchsia-500 to-fuchsia-600",
  dark: "from-neutral-400 via-neutral-500 to-neutral-600",
  steel: "from-slate-400 via-slate-500 to-slate-600",
  flying: "from-sky-400 via-sky-500 to-sky-600",
};

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  .then((response) => response.json())
  .then((data) => {
    const parent = document.getElementById("typeBeat");
    createIDAndTypes(parent, data);

    console.log(data);

    const container = document.getElementById("pokemon-details");
    container.innerHTML = "";

    const leftCol = CreateElement(
      "div",
      `col-span-12 sm:col-span-6 flex flex-col`,
      null,
      container
    );
    const leftBg = CreateElement("div", null, null, leftCol);

    CreateElement(
      "div",
      "bg-yellow panel text-black font-bold text-3xl 2xl:text-4xl p-4 w-full [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]",
      data.name.charAt(0).toUpperCase() + data.name.slice(1),
      leftBg
    );

    const div0 = CreateElement(
      "div",
      `flex justify-center items-center z-auto m-4 sm:m-4 sm:mr-2 lg:m-8 lg:mr-4 bg-white imageBorder`,
      null,
      leftBg
    );

    const div1 = CreateElement(
      "div",
      `flex w-full justify-center items-center z-auto bg-white shadow-[2px_2px_0_#000,4px_4px_0_#000] imageBorder bg-gradient-to-b ${
        typeColorsBackground[data.types[0].type.name]
      }`,
      null,
      div0
    );

    const img = CreateElement(
      "img",
      `max-w-full z-auto x-auto h-auto`,
      null,
      div1
    );
    img.src =
      data.sprites.other["official-artwork"].front_default ||
      data.sprites.front_default;
    img.alt = data.name;

    const rightCol = CreateElement(
      "div",
      "col-span-12 sm:col-span-6",
      null,
      container
    );

    const profileCard = CreateElement(
      "div",
      "card-right overflow-auto m-4 lg:m-8 lg:ml-4 p-4 rounded-lg shadow shadow-[2px_2px_0_#000,4px_4px_0_#000]",
      null,
      rightCol
    );
    CreateElement(
      "h2",
      "text-2xl 2xl:text-3xl font-bold mb-4 text-center",
      "Profile",
      profileCard
    );

    const profileTable = CreateElement(
      "table",
      "w-full table-auto font-bit text-sm text-left 2xl:text-3xl border-collapse",
      null,
      profileCard
    );
    const profileBody = CreateElement("tbody", null, null, profileTable);

    const species =
      data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1);
    const abilities = data.abilities
      .map(
        (a) => a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)
      )
      .join(", ");

    const profileData = [
      ["Species:", species],
      ["Abilities:", abilities],
      [
        "Height:",
        `${data.height / 10} m (${Math.round((data.height / 10) * 3.281)}')`,
      ],
      [
        "Weight:",
        `${data.weight / 10} kg (${Math.round(
          (data.weight / 10) * 2.205
        )} lbs)`,
      ],
      ["Base Exp.:", data.base_experience],
    ];

    profileData.forEach(([label, value]) => {
      const row = CreateElement("tr", null, null, profileBody);
      CreateElement("td", "font-bold pr-4", label, row);
      CreateElement("td", null, value, row);
    });

    const statsCard = CreateElement(
      "div",
      "overflow-auto m-4 lg:m-8 lg:ml-4 p-4 bg-gray-100 card-right rounded-lg shadow shadow-[2px_2px_0_#000,4px_4px_0_#000]",
      null,
      rightCol
    );
    CreateElement(
      "h2",
      "text-2xl 2xl:text-3xl font-bold mb-4 text-center",
      "Base Stats",
      statsCard
    );

    const statsTable = CreateElement(
      "table",
      "w-full table-auto font-bit text-sm 2xl:text-3xl text-left border-collapse",
      null,
      statsCard
    );
    const statsHead = CreateElement("thead", null, null, statsTable);
    const headRow = CreateElement("tr", null, null, statsHead);
    // CreateElement("th", "px-2 py-1 border-b", "Stat", headRow);
    // CreateElement("th", "px-2 py-1 border-b", "Value", headRow);

    const statsBody = CreateElement("tbody", null, null, statsTable);
    const statsData = [
      ["HP", data.stats[0].base_stat],
      ["Attack", data.stats[1].base_stat],
      ["Defense", data.stats[2].base_stat],
      ["Special Attack", data.stats[3].base_stat],
      ["Special Defense", data.stats[4].base_stat],
      ["Speed", data.stats[5].base_stat],
    ];

    statsData.forEach(([stat, value]) => {
      const row = CreateElement("tr", null, null, statsBody);
      CreateElement("td", "px-2 py-1", stat, row);
      CreateElement("td", "px-2 py-1", value, row);
    });

    fetch(data.species.url)
      .then((res) => res.json())
      .then((speciesData) => fetch(speciesData.evolution_chain.url))
      .then((res) => res.json())
      .then(async (evolutionData) => {
        if (evolutionData.chain.evolves_to.length === 0) return;

        const getEvolutions = (node) => {
          const result = [node.species.name];
          node.evolves_to.forEach((evo) => {
            result.push(...getEvolutions(evo));
          });
          return result;
        };

        const evolutionNames = getEvolutions(evolutionData.chain);

        const evolutionDetails = await Promise.all(
          evolutionNames.map((name) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
              .then((res) => res.json())
              .then((poke) => ({
                name: poke.name,
                sprite: poke.sprites.front_default,
              }))
          )
        );

        const evoContainer = CreateElement(
          "div",
          "evolution-chain overflow-auto m-4 mt-2 mb-1 sm:ml-4 lg:ml-8 lg:mr-4 sm:mb-8 flex flex-col justify-around shadow-[2px_2px_0_#000,4px_4px_0_#000]",
          null,
          leftCol
        );

        CreateElement(
          "div",
          "card-background rounded-t-[1rem] text-black font-bold text-2xl 2xl:text-3xl p-4 w-full",
          "Evolutions",
          evoContainer
        );

        const evoRowContainer = CreateElement(
          "div",
          "h-full flex justify-around pb-4 card-background rounded-b-[1rem]",
          null,
          evoContainer
        );

        evolutionDetails.forEach((evo, index) => {
          const evoDiv = CreateElement(
            "div",
            "flex flex-col items-center",
            null,
            evoRowContainer
          );
          CreateElement("img", "w-32 h-32", null, evoDiv).src = evo.sprite;
          CreateElement(
            "span",
            "text-sm 2xl:text-lg capitalize text-[0.625rem] font-bit",
            evo.name,
            evoDiv
          );

          if (index < evolutionDetails.length - 1) {
            CreateElement(
              "div",
              "evo-arrow text-8xl mt-6",
              "→",
              evoRowContainer
            );
          }
        });
      })
      .catch((err) => console.error("Evolution fetch error:", err));
  });

function CreateElement(tag, className, innerHTML, parent) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  if (parent) parent.appendChild(element);
  return element;
}

const typeColors = {
  grass: "bg-green-700",
  fire: "bg-red-500",
  water: "bg-blue-500",
  bug: "bg-lime-500",
  normal: "bg-gray-500",
  electric: "bg-yellow-400",
  poison: "bg-purple-700",
  fighting: "bg-rose-600",
  psychic: "bg-pink-500",
  rock: "bg-stone-500",
  ground: "bg-amber-500",
  ghost: "bg-violet-700",
  dragon: "bg-indigo-600",
  ice: "bg-cyan-400",
  fairy: "bg-fuchsia-500",
  dark: "bg-neutral-700",
  steel: "bg-slate-500",
  flying: "bg-sky-400",
};

function createIDAndTypes(parent, pokemon) {
  const container = CreateElement(
    "div",
    "flex justify-center text-left items-center gap-2",
    null,
    parent
  );

  const labelsCol = CreateElement("div", "flex flex-col", null, container);
  CreateElement(
    "h2",
    "text-black font-bit mb-2 text-[0.700rem] 2xl:text-sm mr-2 [@media(max-width:400px)]:hidden",
    "ID:",
    labelsCol
  );
  CreateElement(
    "h2",
    "text-black font-bit text-[0.700rem] 2xl:text-sm [@media(max-width:400px)]:hidden",
    "TYPE:",
    labelsCol
  );

  const valuesCol1 = CreateElement("div", "flex flex-col", null, container);
  CreateElement(
    "h2",
    "text-black 2xl:text-lg type bg-gray-300 rounded pl-2 pr-2 mb-2 w-20",
    `#${String(pokemon.id).padStart(4, "0")}`,
    valuesCol1
  );

  const type1 = pokemon.types[0].type.name;
  CreateElement(
    "h2",
    `text-white 2xl:text-lg type rounded pl-2 pr-2 ${typeColors[type1]}`,
    type1.charAt(0).toUpperCase() + type1.slice(1),
    valuesCol1
  );

  if (pokemon.types[1]) {
    const valuesCol2 = CreateElement(
      "div",
      "flex flex-col mr-2 sm:m-0",
      null,
      container
    );
    CreateElement("h2", "text-yellow 2xl:text-lg pb-1", ".", valuesCol2);
    const type2 = pokemon.types[1].type.name;
    CreateElement(
      "h2",
      `text-white 2xl:text-lg type rounded pl-2 pr-2 mt-1 w-20 ${typeColors[type2]}`,
      type2.charAt(0).toUpperCase() + type2.slice(1),
      valuesCol2
    );
  }
}
