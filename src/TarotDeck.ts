import { useState } from "react"

export type TarotCard = {
  name: String;
  meaning: String;
}

const createDeck = (): Array<TarotCard> => {
  const major_trumps : Array<TarotCard> = []

  major_trumps.push({name: 'The Sacred Cow', meaning: 'a sacred cow'})
  major_trumps.push({name: 'A Pope', meaning: 'querent, or anybody really'})
  major_trumps.push({name: 'The Initiate', meaning: 'someone looking for knowledge or at the beginning of a journey'})
  major_trumps.push({name: 'The Illuminate', meaning: 'someone who has gained knowledge or completed a journey'})
  major_trumps.push({name: 'The Believer', meaning: 'someone who accepts ideas'})
  major_trumps.push({name: 'The Skeptic', meaning: 'someone who rejects ideas'})
  major_trumps.push({name: 'Flower', meaning: 'sex, drugs, and hedonic pursuits'})
  major_trumps.push({name: 'The Trout', meaning: 'silliness, laughter, surrealism'})
  major_trumps.push({name: 'Conspiracy', meaning: "There's a plot behind coincidences"})
  major_trumps.push({name: 'Joker', meaning: 'wild card'})
  major_trumps.push({name: 'Net of Synchronicity', meaning: "There's a cosmic force behind coincidences"})
  major_trumps.push({name: 'Discordian Deck', meaning: 'this deck, or self-referentialism'})
  major_trumps.push({name: 'The Big Bang', meaning: 'Eristic Creation'})
  major_trumps.push({name: 'The Great Pyramid', meaning: 'Aneristic Creation'})
  major_trumps.push({name: 'Radioactivity', meaning: 'Aneristic Destruction'})
  major_trumps.push({name: 'The Tower of Babel', meaning: 'Eristic Destruction'})
  major_trumps.push({name: 'The Discordian Society', meaning: 'Eristic group or groups'})
  major_trumps.push({name: 'The Bavarian Illuminati', meaning: 'Aneristic group or groups'})
  major_trumps.push({name: 'Greyface', meaning: 'someone on an all-order trip'})
  major_trumps.push({name: 'Eris', meaning: 'someone on an all-disorder trip'})
  major_trumps.push({name: 'The Golden Apple', meaning: 'Eristic forces'})
  major_trumps.push({name: 'The Pentagon', meaning: 'Aneristic forces'})
  major_trumps.push({name: 'The Sacred Chao', meaning: 'The Sacred Chao'})

  const suits: Array<TarotCard> = []
  const suit_names = [
    {name: 'Sweets', meaning: 'taste, water, pleasure'},
    {name: 'Booms', meaning: 'hearing, air, action'},
    {name: 'Pungents', meaning:'smell, aether, intensity'},
    {name:'Prickles', meaning:'touch, earth, conformity'}, 
    {name: 'Oranges', meaning: 'sight, fire, bizarreness'}
  ]
  const suit_faces = [
    {value: 'Z', meaning: 'Lack of '},
    {value: '1', meaning: 'A good amount of '},
    {value: '2', meaning: 'Shared '},
    {value: '3', meaning: 'Imbalance of '},
    {value:'4', meaning:'Excess of '}
    ]

  suit_names.forEach ((suit_name) => {
    suit_faces.forEach((suit_face) => {
      suits.push({name: suit_face.value + " of " + suit_name.name, meaning: suit_face.meaning + ' of ' + suit_name.meaning})
    })
  })

  suits.push({name:'O of Sweets', meaning: 'MMMMM'})
  suits.push({name:'O of Booms', meaning: 'whoosh'})
  suits.push({name:'O of Pungents', meaning: 'O'})
  suits.push({name:'O of Prickles', meaning: 'thud'})
  suits.push({name:'O of Oranges', meaning: 'wow'})

  suits.push({name: 'Sweetmorn', meaning: 'The happy beginning of something'})
  suits.push({name: 'Boomtime', meaning: 'The hectic morning, or the starting work of something'})
  suits.push({name: 'Pungenday', meaning: 'The noon meditation or the central point of a task or project'})
  suits.push({name: 'Prickle-Prickle', meaning: 'A physical afternoon, a siesta, a non-thinking time'})
  suits.push({name: 'Setting Orange', meaning: 'The end of the day and the cast party after a project'})

  suits.push({name: 'Chaos', meaning: 'No illusions'})
  suits.push({name: 'Discord', meaning: 'Eristic illusion'})
  suits.push({name: 'Confusion', meaning: 'Conflict between both illusions'})
  suits.push({name: 'Bureaucracy', meaning: 'Aneristic illusion'})
  suits.push({name: 'The Aftermath', meaning: 'Playing with illusions'})

  suits.push({name: 'Hung Mung', meaning: 'Hung Mung'})
  suits.push({name: 'Dr. Van Van Mojo', meaning: 'Dr. Van Van Mojo'})
  suits.push({name: 'Saint Gulik', meaning: 'Saint Gulik'})
  suits.push({name: 'Zarathud', meaning: 'Zarathud'})
  suits.push({name: 'Malaclypse the Elder', meaning: 'Malaclypse the Elder'})

  suits.push({name: 'A Cow', meaning: 'Someone in the midst of whatever, but not actually affected by it'})

  return major_trumps.concat(suits)
}

export const useDiscordianTarotDeck = () : {  deck: Array<TarotCard>, draw: () => TarotCard, shuffle: () => void } => {
  const [deck, setDeck] = useState(createDeck())
  console.log("called useDiscordianTarotDeck")

  const shuffle = () => {
    const new_deck = createDeck()
    console.log("new deck =" + JSON.stringify(new_deck))
    setDeck(createDeck())
  }

  const draw = (): TarotCard => {
    if (deck.length === 0) {
      return {name: "null", meaning: "null"}
    }

    const index = Math.floor(Math.random() * deck.length - 1)
    console.log("drawing index : " + index)
    const card = deck.splice(index, 1)[0]
    setDeck(deck)

    return card
  }

  return {
    deck,
    draw,
    shuffle
  }
}