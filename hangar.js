const hangar = [
    {
        name: "AEGIS",
        image: "images/chars/aegis.png",
        affinity: "Antimatter",
        rarity: "Legendary",
        faction: "Atlas Syndicate",
        role: "Supporter",
        basic: ["shield", "hacking up 3", "atlas coordination 3"],
        charged: ["shield", "remove debuff"],
        passive: "defense up 2",
        refit: "remove debuff",
        hp: 21805,
        attack: 2474,
        defense: 2881,
        hacking: 91,
        security: 69,
        critR: 0,
        critD: 4,
        speed: 106
    },
    {
        name: "Anemone",
        image: "images/chars/anemone.png",
        affinity: "Thermal",
        rarity: "Legendary",
        faction: "Gelecek",
        role: "Defender",
        basic: ["out. damage 2", "corrosion 2"],
        charged: ["provoke"],
        passive: "damage reduction",
        refit: "repair",
        hp: 24717,
        attack: 3385,
        defense: 4581,
        hacking: 104,
        security: 58,
        critR: 0,
        critD: 0,
        speed: 69  
    },
    {
        name: "Anjian",
        image: "images/chars/anjian.png",
        affinity: "Chemical",
        rarity: "Rare",
        faction: "Tianchao",
        role: "Attacker",
        basic: ["provoke"],
        charged: ["provoke", "speed down"],
        passive: ["tianchao precision 2", "stealth"],
        refit: "",
        hp: 10747,
        attack: 5012,
        defense: 2281,
        hacking: 108,
        security: 0,
        critR: 11,
        critD: 38,
        speed: 89  
    },
    {
        name: "Arum",
        image: "images/chars/arum.png",
        affinity: "Thermal",
        rarity: "Epic",
        faction: "Gelecek",
        role: "Debuffer",
        basic: "attack down 2",
        charged: ["attack down 3", "crit rate down 3"],
        passive: "out. damage 2",
        refit: "gelecek contagion 2",
        hp: 14588,
        attack: 4351,
        defense: 2143,
        hacking: 150,
        security: 19,
        critR: 0,
        critD: 10,
        speed: 80  
    },
    {
        name: "Asphyxiator",
        image: "images/chars/asphyxiator.png",
        affinity: "Thermal",
        rarity: "Legendary",
        faction: "Marauders",
        role: "Debuffer",
        basic: ["defense down 3", "inferno 3"],
        charged: ["inc. damage 3", "stasis"],
        passive: ["overload", "marauder rage 2"],
        refit: ["crit damage increase", "hacking"],
        hp: 15977,
        attack: 4951,
        defense: 2143,
        hacking: 142,
        security: 5,
        critR: 22,
        critD: 10,
        speed: 93  
    },
    {
        name: "Berserker",
        image: "images/chars/berserker.png",
        affinity: "Electric",
        rarity: "Rare",
        faction: "Marauders",
        role: "Attacker",
        basic: "",
        charged: "",
        passive: "marauder rage 2",
        refit: "",
        hp: 11298,
        attack: 5627,
        defense: 1369,
        hacking: 92,
        security: 0,
        critR: 25,
        critD: 42,
        speed: 87  
    },
    {
        name: "Butcher",
        image: "images/chars/butcher.png",
        affinity: "Thermal",
        rarity: "Epic",
        faction: "Marauders",
        role: "Attacker",
        basic: "inferno 2",
        charged: ["block buff", "inferno 3"],
        passive: "overload",
        refit: "marauder rage 2",
        hp: 14467,
        attack: 5228,
        defense: 1920,
        hacking: 98,
        security: 0,
        critR: 23,
        critD: 42,
        speed: 90  
    },
    {
        name: "Cinya",
        image: "images/chars/cinya.png",
        affinity: "Antimatter",
        rarity: "Rare",
        faction: "Terran Combine",
        role: "Defender",
        basic: "",
        charged: "attack down 2",
        passive: "repair",
        refit: "",
        hp: 17923,
        attack: 2916,
        defense: 3833,
        hacking: 88,
        security: 65,
        critR: 0,
        critD: 20,
        speed: 60  
    },
    {
        name: "Crocus",
        image: "images/chars/crocus.png",
        affinity: "Thermal",
        rarity: "Legendary",
        faction: "Gelecek",
        role: "Debuffer",
        basic: ["corrosion 2", "stasis"],
        charged: "detonate corrosion",
        passive: "repair",
        refit: "corrosion 2",
        hp: 15977,
        attack: 4651,
        defense: 2381,
        hacking: 151,
        security: 16,
        critR: 4,
        critD: 18,
        speed: 89  
    },
    {
        name: "Crucialis",
        image: "images/chars/crucialis.png",
        affinity: "Electric",
        rarity: "Rare",
        faction: "GelecAtlas Syndicate",
        role: "Attacker",
        basic: "bypass shield",
        charged: " bypass shield",
        passive: ["shield", "atlas coordination 2"],
        refit: "",
        hp: 13366,
        attack: 4397,
        defense: 1537,
        hacking: 90,
        security: 17,
        critR: 17,
        critD: 46,
        speed: 85  
    },
]

  const galleryContainer = document.querySelector(".gallery");
  
  hangar.forEach((ship) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    if (ship.rarity.toLowerCase() === "legendary") {
      card.classList.add("legendary-card");
    } else if (ship.rarity.toLowerCase() === "epic") {
      card.classList.add("epic-card");
    } else if (ship.rarity.toLowerCase() === "rare") {
      card.classList.add("rare-card");
    }
  
    card.setAttribute("data-name", ship.name);
  
    const affinityIcon = document.createElement("div");
    affinityIcon.classList.add("affinity-icon");
  
    if (ship.affinity.toLowerCase() === "antimatter") {
      affinityIcon.classList.add("antimatter-affinity");
    } else if (ship.affinity.toLowerCase() === "chemical") {
      affinityIcon.classList.add("chemical-affinity");
    } else if (ship.affinity.toLowerCase() === "thermal") {
      affinityIcon.classList.add("thermal-affinity");
    } else if (ship.affinity.toLowerCase() === "electric") {
      affinityIcon.classList.add("electric-affinity");
    }
  
    const roleIcon = document.createElement("i");
    roleIcon.classList.add("role-icon");
  
    if (ship.role === "Supporter") {
      roleIcon.classList.add("bi", "bi-plus-circle");
    } else if (ship.role === "Defender") {
      roleIcon.classList.add("bi", "bi-shield-shaded");
    } else if (ship.role === "Attacker") {
      roleIcon.classList.add("bi", "bi-lightning-charge-fill");
    } else if (ship.role === "Debuffer") {
      roleIcon.classList.add("bi", "bi-bug-fill");
    } else {
      roleIcon.classList.add("bi", "bi-question-circle-fill");
    }
  
    card.appendChild(affinityIcon);
    card.appendChild(roleIcon);
  
    const image = document.createElement("img");
    image.src = ship.image;
    image.alt = ship.name;
    
    card.appendChild(image);
    
    galleryContainer.appendChild(card);
  });
  

// Sélectionnez les cases à cocher
const removeDebuffCheckbox = document.querySelector("#removeDebuffCheckbox");

// Ajoutez un gestionnaire d'événement pour chaque case à cocher
removeDebuffCheckbox.addEventListener("change", filterCards);

// Fonction de filtrage des cartes
// Fonction de filtrage des cartes
function filterCards() {
    // Obtenez les valeurs sélectionnées
    const selectedValues = [];
    if (removeDebuffCheckbox.checked) {
      selectedValues.push(removeDebuffCheckbox.getAttribute("data-value"));
    }
  
    // Parcourez les cartes pour les filtrer
    hangar.forEach((ship) => {
      const card = document.querySelector(`[data-name="${ship.name}"]`);
      if (selectedValues.length === 0 || selectedValues.includes("remove debuff")) {
        // Affichez toutes les cartes si aucune valeur n'est sélectionnée ou si "Remove debuff" est sélectionné
        card.style.visibility = "visible";
      } else {
        // Sinon, masquez les cartes qui ne correspondent pas aux critères sélectionnés
        if (ship.charged.includes("remove debuff")) {
          card.style.visibility = "visible";
        } else {
          card.style.visibility = "hidden";
        }
      }
    });
  }
  

