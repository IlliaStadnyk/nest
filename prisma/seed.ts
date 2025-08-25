import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
  {
  id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
  title: 'Hasbro Monopoly DC Batman',
  price: 21000,
  shortDesc: 'A themed version of Monopoly set in the Batman universe.',
  description: "### Description\nMonopoly: DC Batman is a themed version of the classic Monopoly game, set in the world of the Dark Knight. Players travel through Gotham City, taking control of locations associated with Batman, his allies, and villains. It's the perfect game for DC Universe fans who want to combine strategic thinking with the atmosphere of a comic book adventure.\n\n### Objective\nBecome the greatest defender (or ruler) of Gotham by buying locations, collecting rent, and building influence in the city. The winner is the one who dominates the board and accumulates the most wealth.\n\n### Box Contents:\n- Board with locations inspired by the Batman universe;\n- 6 metal tokens with symbols of DC heroes and villains;\n- Chance and Community Chest cards in Gotham style;",
  imageMain: 'batmanMonopoly.webp',
  imageDesc: 'batmanMonopolyDesc.webp',
},
{
  id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
  title: 'The Witcher Old World',
  price: 52000,
  shortDesc: 'An adventure board game set in the Witcher universe.',
  description: "### Description\n**The Witcher: Old World** The Witcher: Old World is an adventure board game that takes players on a journey through a fantastic world full of dangers, arcane magic, dark secrets, and extraordinary places waiting to be discovered. The game is set in the beloved Witcher universe, many years before the saga of Geralt of Rivia, in a time when the Continent was plagued by monsters. Only witchers — professional monster slayers trained to fight creatures hostile to humans — were capable of dealing with this threat.\n\n**How does it work?**\n\n In The Witcher: Old World, each player chooses one of five witcher schools and takes on the role of a professional monster hunter. While traveling across the vast lands of the Continent, they will uncover secrets, train in combat, and gain experience. Depending on the length of the game set at the beginning, players compete to collect between 4 and 6 Trophies. The first player to collect the required number wins, bringing ultimate honor and fame to their school.",
  imageMain: 'witcherOldWorld.webp',
  imageDesc: 'witcherOldWorldDesc.webp',
},
{
  id: 'fd10a551-0f0d-4a9f-bc41-c559c8a17258',
  title: 'Tactic Vikings Tales: Edge of the World',
  price: 33000,
  shortDesc: 'A strategic game with a Viking theme.',
  description: "### Raiders of the North Sea\nYou were born a Viking. Even as a child, you knew that farming, hunting, or building were not for you. Your destiny awaits beyond the raging sea, in distant lands where your name will be etched into the annals of history in coastal cities. Whether the locals speak it with respect or in a fearful whisper depends entirely on you.\n\n**Gather the best crew and set out to trade, fight, and explore the unknown.** The Viking leader who amasses the most wealth by the end of the game wins—but many dangers await along the way. Includes beautifully crafted wooden components. An adventure game for **2–4 players** that you’ll want to play again and again.\n\nHowever, even the greatest sailors have no control over the winds that fill their sails—or who or what they might encounter among the waves. One thing is certain: **adventure calls!** So gather your crew, raise your sails, and set off into a world of battles, riches, and glory!",
  imageMain: 'edgeOfTheWorld.webp',
  imageDesc: 'edgeOfTheWorldDesc.webp',
},
{
  id: 'ad105551-0f0d-4a9f-bc41-c559c8a17256',
  title: 'Rebel Otters',
  price: 2000,
  shortDesc: 'A light and fast-paced card game.',
  description: "### Otters\n\nOtters are adorable creatures who spend their days diving for pearls. They especially care about the most precious ones—collecting them to constantly grow their impressive treasure hoard. But it’s not an easy task… The seas are inhabited by fearsome, spiky sea urchins! Their sharp spines poke at paws and noses, making it tricky for otters to gather their treasures!\n\n**Otters** is a tactical card game with simple rules, where you take on the role of clever and cunning animals. To win, you must collect as many valuable pearls as possible. Outwit your fellow players and watch out for the urchins. Remember—the title of the ultimate pearl diver can only go to one of you!\n\n#### How to Play\n\nPlayers take turns, and each turn consists of drawing a card from the deck, playing one card from their hand and carrying out its action if possible, and checking the number of urchin cards in their hand. Any player holding two urchin cards at the end of their turn is eliminated from further play, can no longer collect pearls, but is safe from other players’ effects. Their treasure remains secure until final scoring. The game ends when only the last active player remains. The winner is the one who has collected the most pearls.",
  imageMain: 'wydry.webp',
  imageDesc: 'wydryDesc.webp',
},
{
  id: 'b920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
  title: 'FoxGames Dragomino',
  price: 15000,
  shortDesc: 'A family game with a dragon theme.',
  description: "### Dragon Riders\n\nThe big day has arrived! You have joined the ranks of the Dragon Riders! Now you can set off to a mysterious island in search of these amazing creatures. Just remember—you won't be the only Rider in these lands. Who among you will find the most baby dragons?\n\nExplore the different areas of Dragon Island, moving across various types of terrain. In each location, try to discover as many baby dragons as possible! The game ends when there are no more area tiles to draw.\n\nDiscover new lands in search of adorable baby dragons!\n\n- Explore unknown areas by selecting one of the tiles.\n- Add the tile to your play area.\n- By connecting areas of the same type, you will uncover cute baby dragons or just empty shells.\n\nNumber of players: 2-4\n\nPlaytime: approx. 15 minutes.",
  imageMain: 'dragomino.webp',
  imageDesc: 'dragominoDesc.webp',
},
{
  id: 'cd105551-0f0d-4a9f-bc41-c559c8a17258',
  title: 'Asmodee Twilight Imperium 4th Edition',
  price: 323000,
  shortDesc: 'An epic strategic game set in space.',
  description: "### Twilight Imperium 4th Edition\n\nIn Twilight Imperium 4th Edition, three to six players take on the roles of leaders of different factions, each striving to claim the throne of Mecatol Rex, the central planet, and rule the entire galaxy. Military power, political skill, and economic influence all depend on each player.\n\nTwilight Imperium offers a dynamic gameplay system, where every game is unique thanks to its modular structure, ever-changing objectives, and 17 different races, each with its own special abilities. The battle for galactic domination begins!\n\nWarnings: Not suitable for children under 36 months!\n\nChoking hazard: small parts may be swallowed!",
  imageMain: 'twilightImperium.webp',
  imageDesc: 'twilightImperiumDesc.webp',
},
{
  id: 'dd105551-0f0d-4a9f-bc41-c559c8a17256',
  title: 'Lucky Duck Games Dune: Imperium',
  price: 23000,
  shortDesc: 'A strategy game set in the Dune universe.',
  description: "### Dune: Imperium – Rise of Ix\n\nAfter the betrayal and destruction of House Atreides, the Emperor has once again handed control of Arrakis to the Harkonnens. However, among the Fremen, a mysterious warrior named Muad'Dib has gained influence, now threatening the schemes of the Emperor and his allies. No house or faction can remain indifferent when the flow of spice is threatened by total war. Yet even the greatest powers can be influenced… or betrayed.\n\nDune: Imperium – Rise of Ix is a standalone continuation of Dune: Imperium, expanding on the deck-building and area control mechanics of the original. You must still strive for victory, balancing military might with political intrigue. This time, however, you have new tools at your disposal. Use spies to carry out your plans, or contracts to expand your resources. Or perhaps follow the paths of the Fremen and ride into battle on the mighty sandworms. The choice is yours.\n\nThe Imperium awaits!\n\nContents:\n- Double-sided board\n- 12 wooden agents\n- 170+ wooden tokens\n- 4 sandworm figures\n- 250+ cards\n- 9 leaders with 60+ tokens\n- Player boards for 6-player games",
  imageMain: 'dunaImprium.webp',
  imageDesc: 'dunaImpriumDesc.webp',
},
{
  id: 'e920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
  title: 'Rebel Harry Potter Hogwarts Battle',
  price: 59000,
  shortDesc: 'A cooperative game set in the Harry Potter universe.',
  description: "### Harry Potter: Hogwarts Battle – Back to School\n\nIt's time to return to school! In this expansion for the cooperative adventure game Harry Potter: Hogwarts Battle, you take on the roles of Harry, Ron, Hermione, Neville, and a brand-new character, Ginny Weasley, to develop your magical abilities. During gameplay, you will participate in 4 increasingly challenging lessons. Remember: effective teamwork is key to victory!\n\nUse spells to successfully overcome unexpected encounters and gather the ingredients needed for potions. Only by working together can you protect the wizarding world from He-Who-Must-Not-Be-Named!\n\nContents of the expansion:\n- Boxes containing 4 entirely new adventures.\n- A new playable hero—Ginny Weasley! With her, up to 5 players can join magical adventures.\n- Spell boards that allow you to develop completely new abilities.\n- Encounters, a new type of challenge lurking in the school corridors.",
  imageMain: 'hpHogwartsBattle.webp',
  imageDesc: 'hpHogwartsBattleDesc.webp',
},
{
  id: 'fa105551-0f0d-4a9f-bc41-c559c8a17258',
  title: 'Rebel SETI',
  price: 38000,
  shortDesc: 'A board game about the search for extraterrestrial life.',
  description: "### SETI: Search for Extraterrestrial Civilizations\n\nEmbark on a cosmic journey and discover whether life exists beyond Earth! If you observe the sky closely enough, you'll see millions of galaxies. Each contains billions of stars, around which planets may orbit—planets that could harbor life and potentially intelligence. There’s a chance that wherever you point your telescope, you might be looking into the eyes of someone else doing the same.\n\nTake on the role of a leader in space exploration, using cutting-edge technology to visit other planets, study distant stars, and expand your capabilities! SETI: Search for Extraterrestrial Civilizations is a complex expert-level game featuring over 200 unique technology cards based on real scientific knowledge, along with numerous components that ensure each game offers new possibilities and paths to victory.\n\n#### How to Play\n\nPlayers lead space research agencies on missions to discover extraterrestrial life. The game is played over 5 rounds, with players taking turns. On your turn, you may perform one main action and any number of additional actions.\n\nMain actions include launching probes, moving them through the Solar System, entering planetary orbits and landing, as well as playing cards and developing new technologies that grant various bonuses. While each player explores space independently and plays cards, your activities contribute to the shared goal of discovering alien species.\n\nThere are 5 different alien species in the game; in each session, 2 species are randomly selected and remain hidden until certain conditions are met. Each species introduces unique rules (including scoring) and its own deck. The game ends after the 5th round. Players score points for cards with gold spaces and gold scoring tiles, and the player with the most points wins.",
  imageMain: 'seti.webp',
  imageDesc: 'setiDesc.webp',
},
{
  id: 'fb105551-0f0d-4a9f-bc41-c559c8a17256',
  title: 'Rebel Terraforming Mars',
  price: 2000,
  shortDesc: 'A strategic game about colonizing Mars.',
  description: "### Terraforming Mars\n\nIn Terraforming Mars, players take control of one of the corporations and, as its management, buy and play cards representing various investment projects. These projects usually contribute directly or indirectly to the terraforming process but may also be other types of business ventures.\n\nTo win, a player must achieve a high Terraforming Rating (TR) and earn a lot of Victory Points (VP). A player's TR increases each time they raise one of the Global Parameters (Temperature, Oxygen level, or Ocean coverage). TR determines the player's basic income as well as their base score.\n\nAs terraforming progresses, players can carry out more and more projects. Additional VPs can be earned for anything that increases humanity's control over the Solar System, such as building cities, infrastructure, or protecting the environment.\n\nTime is measured in Generations.\n\nEach Generation begins with the turn order phase, followed by the research phase where players acquire new cards. During the action phase, players take turns performing 1 or 2 actions until all players pass. In the production phase, players generate Resources according to their production levels on their boards and receive income based on their TR.",
  imageMain: 'terraformMars.webp',
  imageDesc: 'terraformMarsDesc.webp',
},
{
  id: 'cc20c7b9-a67d-4edb-8ce7-e3c9f3889e56',
  title: 'Rebel The Mandalorian',
  price: 5000,
  shortDesc: 'A game inspired by The Mandalorian series.',
  description: "### The Mandalorian: Adventures\n\nAfter receiving a lucrative contract, a lone bounty hunter begins a journey that will test his skills and change his life.\n\nBecome heroes, experience unforgettable adventures, and expand your horizons by uncovering the mysteries of the Star Wars universe! The Mandalorian: Adventures is an engaging game where you and your friends take on the roles of the legendary bounty hunter and his allies to fight enemies and resolve various dilemmas. All of this is in service of completing exciting missions inspired by the first season of the popular TV series.\n\n#### How to Play\n\nIn each game, players carry out a mission from a special mission book. To win, you must achieve the mission's objective (each mission has its own). Gameplay takes place on a special map where characters and enemies are placed. Each map features a unique environment and allows different actions. Learning the maps is important, as you will return to them in future missions.\n\nDuring play, you follow a guide deck that provides specific instructions, introduces new rules and cards at a manageable pace, and should not be shuffled. The guide deck is followed step by step.\n\nTurns are structured simply: a player plays two skill cards from their hand, resolves potential events, and then refills their hand. Actions include moving across the board, attacking enemies, planning, and conducting reconnaissance to efficiently achieve objectives. Events represent opponent actions and other challenges.\n\nThe game ends when the mission objective is achieved or a loss condition is met. After the game (regardless of the outcome), follow the instructions on the top card of the guide deck to add new cards, rules, and elements for future play. This also provides information for the next mission.",
  imageMain: 'swMandalorian.webp',
  imageDesc: 'swMandalorianDesc.webp',
},
{
  id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
  title: 'Rebel Everdell',
  price: 3000,
  shortDesc: 'A game about building a city in an animal kingdom.',
  description: "### Everdell\n\nRebel Everdell is a dynamic board game based on worker placement mechanics. It captivates with its beautiful components and offers multiple paths to victory, making exploration a true pleasure.\n\nEverdell is a game of many possibilities that changes with every playthrough: only a small portion of the components are used in a single game, and the variable board layouts ensure the gradual discovery of diverse strategies.\n\nVisual appeal is very important in the game. The board resembles a tree trunk, resource tokens are carefully crafted, and the artwork features charming animals in various configurations and creative poses. Who doesn’t love cute animals?\n\nBut don’t be fooled by the sweet theme—Everdell involves plenty of strategic planning. The game is designed more for adults and older children than for young kids. It’s a multidimensional game that requires integrating various factors that influence the final score.",
  imageMain: 'everdell.webp',
  imageDesc: 'everdellDesc.webp',
},
{
  id: 'fe105551-0f0d-4a9f-bc41-c559c8a17256',
  title: 'Fantasy Flight Games Lord of the Rings The Card Game: Angmar Awakened Hero Expansion',
  price: 2000,
  shortDesc: 'An expansion for The Lord of the Rings card game.',
  description: "### The Lord of the Rings: The Card Game – Angmar Awakened Hero Expansion\nThe *Angmar Awakened Hero Expansion* for **Fantasy Flight Games' The Lord of the Rings: The Card Game** is **not a standalone deck**. A copy of **The Lord of the Rings: Core Set** is required to play.\n\nIn this epic card game, players control the most powerful characters and artifacts of Middle-earth. **Choose heroes, gather allies, acquire artifacts, and coordinate your efforts to face the deadliest villains of Middle-earth.**\n\n**Work together to overcome obstacles and emerge victorious!**\n\nThe mysterious **Dúnedain** tirelessly protect the Free Peoples from lurking shadows and unseen dangers. Fulfilling their duty to guard the realm, these Northern Rangers selflessly march into peril. Stay on top of your game with valor cards and embark on new adventures through thrilling side quests.\n\nThis expansion includes:\n- **8 heroes**\n- All player cards and customization options introduced in *The Lost Realm* and the original *Angmar Awakened* cycle\n- Iconic characters like **Aragorn** and **Arwen** to journey across Middle-earth and confront dangerous foes",
  imageMain: 'lordOfTheRings.webp',
  imageDesc: 'lordOfTheRingsDesc.webp',
},
{
  id: 'c9a0c7b9-a67d-4edb-8ce7-e3c9f3889e56',
  title: 'Rebel Frostpunk Miniatures Expansion',
  price: 5000,
  shortDesc: 'An expansion for Frostpunk with miniatures.',
  description: "### Rebel Frostpunk Miniatures Expansion\n\nThe Rebel Frostpunk Miniatures Expansion is the perfect product for fans of Frostpunk: The Board Game who want to enhance their gameplay with plastic miniatures representing characters and objects from the game. The expansion includes 120 miniatures in 41 different types, giving the game a realistic and impressive",
  imageMain: 'frostpunk.webp',
  imageDesc: 'frostpunkDesc.webp',
},
{
  id: 'fdb05551-0f0d-4a9f-bc41-c559c8a17258',
  title: 'Scrabble',
  price: 3000,
  shortDesc: 'The classic word game for the whole family.',
  description: "### Scrabble Cards\n\nThe iconic game, now in cards—Scrabble by Piatnik. The card version of Scrabble is an excellent adaptation of the classic word game, bringing its exciting elements to cards. What sets this version apart is the option to choose from three gameplay variants: classic Scrabble, an action card variant, and a Rummy-inspired style, offering players a wide range of thrilling experiences.\n\nThe first variant follows traditional Scrabble, where players receive letter cards and try to form words. Each card represents a letter of the alphabet and has a point value according to the original game. Players arrange their cards to score as many points as possible by creating words.\n\nThe action card variant adds extra elements to the game. In addition to letter cards, players receive action cards that allow them to apply different strategies during play. Each action card has two conditions: a positive value added to the score of the player who uses it and a negative value subtracted from the score of the player against whom it is played. These action cards make gameplay more varied and full of surprises, adding new tactical and strategic dimensions.\n\nThe Rummy-inspired variant is a unique combination of two popular games. Players receive letter cards, but they must form words while also achieving objectives defined for each round by the Rummy round card. This variant adds variety and strategic opportunities, as players create words to maximize points.\n\nThe card version of Scrabble, offering three diverse gameplay variants, is perfect for word-game enthusiasts and those seeking different ways to play. This versatility allows players to customize the experience to their preferences, choosing between traditional Scrabble, dynamic action cards, or the Rummy-word combination. It provides opportunities to explore strategies, test word skills, and enjoy a rich and evolving gameplay experience. Piatnik’s card adaptation ensures high quality and great playability.",
  imageMain: 'scrabble.webp',
  imageDesc: 'scrabbleDesc.webp',
}
];
}


function getCarousel() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8b17260',
      name: 'carousel_one.jpg',
    },{
      id: 'fd105551-0f0d-4a9f-bc41-c559c8c17260',
      name: 'carousel_two.jpg',
    },{
      id: 'fd105551-0f0d-4a9f-bc41-c559c8d17260',
      name: 'carousel_three.jpg',
    },
  ]
}

async function seed() {
  await db.orderProduct.deleteMany();
  await db.order.deleteMany();
  await db.product.deleteMany();
  await db.client.deleteMany();

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
  await Promise.all(
    getCarousel().map((item) => {
      return db.carousel.create({data: item})
    })
  );
}

seed()
  .then(() => {
    console.log('✅ Seed complete');
    return db.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Error seeding DB', e);
    return db.$disconnect();
  });
