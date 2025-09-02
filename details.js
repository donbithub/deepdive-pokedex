let StorageObj = {};
const maxPokemon = 1025;
const randomId = Math.floor(Math.random() * maxPokemon) + 1;

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

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then((response) => response.json())
  .then((data) => {
    StorageObj = data;
    const parent = document.getElementById("typeBeat");
    createIDAndTypes(parent, data);

    console.log(data);

    const container = document.getElementById("pokemon-details");
    container.innerHTML = "";

    const leftCol = CreateElement(
      "div",
      `col-span-6 flex flex-col bg-gradient-to-b ${
        typeColorsBackground[data.types[0].type.name]
      }`,
      null,
      container
    );
    const leftBg = CreateElement("div", null, null, leftCol);

    CreateElement(
      "div",
      "bg-red panel text-white font-bold text-2xl p-4 w-full [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]",
      data.name.charAt(0).toUpperCase() + data.name.slice(1),
      leftBg
    );

    const div0 = CreateElement(
      "div",
      "flex justify-center items-center bg-white z-auto m-4",
      null,
      leftBg
    );

    const img = CreateElement("img", "max-w-full h-auto", null, div0);
    img.src =
      data.sprites.other["official-artwork"].front_default ||
      data.sprites.front_default;
    img.alt = data.name;

    const rightCol = CreateElement("div", "col-span-6", null, container);

    const profileCard = CreateElement(
      "div",
      "card-right m-4 p-4 rounded-lg shadow",
      null,
      rightCol
    );
    CreateElement(
      "h2",
      "text-2xl font-bold mb-4 text-center",
      "Profile",
      profileCard
    );

    const profileTable = CreateElement(
      "table",
      "w-full table-auto text-left border-collapse",
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
      ["Base Experience:", data.base_experience],
    ];

    profileData.forEach(([label, value]) => {
      const row = CreateElement("tr", null, null, profileBody);
      CreateElement("td", "font-bold pr-4", label, row);
      CreateElement("td", null, value, row);
    });

    const statsCard = CreateElement(
      "div",
      "p-4 m-4 bg-gray-100 card-right rounded-lg shadow",
      null,
      rightCol
    );
    CreateElement(
      "h2",
      "text-2xl font-bold mb-4 text-center",
      "Base Stats",
      statsCard
    );

    const statsTable = CreateElement(
      "table",
      "w-full table-auto text-left border-collapse",
      null,
      statsCard
    );
    const statsHead = CreateElement("thead", null, null, statsTable);
    const headRow = CreateElement("tr", null, null, statsHead);
    CreateElement("th", "px-2 py-1 border-b", "Stat", headRow);
    CreateElement("th", "px-2 py-1 border-b", "Value", headRow);

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
  CreateElement("h2", "text-black", "ID:", labelsCol);
  CreateElement("h2", "text-black", "TYPE:", labelsCol);

  const valuesCol1 = CreateElement("div", "flex flex-col", null, container);
  CreateElement(
    "h2",
    "text-black type bg-gray-300 rounded pl-2 pr-2 mb-2 w-20",
    `#${String(pokemon.id).padStart(4, "0")}`,
    valuesCol1
  );

  const type1 = pokemon.types[0].type.name;
  CreateElement(
    "h2",
    `text-white type rounded pl-2 pr-2 ${typeColors[type1]}`,
    type1.charAt(0).toUpperCase() + type1.slice(1),
    valuesCol1
  );

  if (pokemon.types[1]) {
    const valuesCol2 = CreateElement("div", "flex flex-col", null, container);
    CreateElement("h2", "text-yellow", ".", valuesCol2);
    const type2 = pokemon.types[1].type.name;
    CreateElement(
      "h2",
      `text-white type rounded pl-2 pr-2 mt-1 w-20 ${typeColors[type2]}`,
      type2.charAt(0).toUpperCase() + type2.slice(1),
      valuesCol2
    );
  }
}
