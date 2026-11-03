import { CompletedEvent } from './structs'

const events: CompletedEvent[] = [
  {
    id: 1,
    title: 'NMJPA Contest Series: Unboxed Pairs Competition',
    date: new Date('2026-09-20T20:00:00.000Z'),
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
  {
    id: 2,
    title: 'NMJPA Contest Series: Solo Wooden Puzzle',
    date: new Date('2026-10-22T00:00:00.000Z'),
    city: 'Albuquerque',
    results: [
      {
        name: 'Amy',
        time: {
          hours: 0,
          minutes: 19,
          seconds: 57,
        },
      },
      {
        name: 'Barbra',
        time: {
          hours: 0,
          minutes: 38,
          seconds: 52,
        },
      },
      {
        name: 'Blaze',
        time: {
          hours: 0,
          minutes: 14,
          seconds: 35,
        },
      },
      {
        name: 'Bonnie',
        time: {
          hours: 0,
          minutes: 19,
          seconds: 51,
        },
      },
      {
        name: 'Guen',
        time: {
          hours: 0,
          minutes: 15,
          seconds: 6,
        },
      },
      {
        name: 'Katharine',
        time: {
          hours: 0,
          minutes: 16,
          seconds: 54,
        },
      },
      {
        name: 'Kimi',
        time: {
          hours: 0,
          minutes: 17,
          seconds: 7,
        },
      },
      {
        name: 'Kristin',
        time: {
          hours: 0,
          minutes: 16,
          seconds: 58,
        },
      },
      {
        name: 'Leanne',
        time: {
          hours: 0,
          minutes: 10,
          seconds: 42,
        },
      },
      {
        name: 'Marie',
        time: {
          hours: 0,
          minutes: 17,
          seconds: 27,
        },
      },
      {
        name: 'Miranda',
        time: {
          hours: 0,
          minutes: 12,
          seconds: 9,
        },
      },
      {
        name: 'Paige',
        time: {
          hours: 0,
          minutes: 15,
          seconds: 47,
        },
      },
      {
        name: 'Shoe',
        time: {
          hours: 0,
          minutes: 43,
          seconds: 47,
        },
      },
    ],
    description:
      'Albuquerque puzzlers competed solo to see who could complete a wooden puzzle the fastest!',
    puzzleName: 'Rainbow Owl on a Branch',
    puzzleBrand: 'Quordle',
    pieceCount: 100,
  },
]

export default events
