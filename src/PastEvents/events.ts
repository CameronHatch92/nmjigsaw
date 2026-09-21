import { CompletedEvent } from './structs'

const events: CompletedEvent[] = [
  {
    id: 1,
    title: 'NMJPA Contest Series: Unboxed Pairs Competition',
    date: new Date('2026-09-22T20:00:00.000Z'),
    city: 'Albuquerque',
    results: [
      {
        name: 'Blaze and Tiff',
        time: {
          hours: 0,
          minutes: 31,
          seconds: 14,
        },
      },
      {
        name: 'Cameron and Leanne',
        time: {
          hours: 0,
          minutes: 32,
          seconds: 29,
        },
      },
      {
        name: 'Guen and Katherine',
        time: {
          hours: 0,
          minutes: 36,
          seconds: 41,
        },
      },
      {
        name: 'Amy and Paige',
        time: {
          hours: 0,
          minutes: 38,
          seconds: 36,
        },
      },
      {
        name: 'Miranda and Rob',
        time: {
          hours: 0,
          minutes: 39,
          seconds: 30,
        },
      },
    ],
    description:
      "Albuquerque puzzlers competed in random pairs to see who could solve a 500 piece puzzle the fastest. One catch? They didn't have the box and had no idea what puzzle they were puzzling!",
    puzzleName: 'Cat Zodiac',
    puzzleBrand: 'Galison',
    pieceCount: 500,
  },
]

export default events
