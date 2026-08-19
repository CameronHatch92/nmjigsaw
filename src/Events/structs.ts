export interface PuzzleEvent {
  title: string
  startsAt: Date
  city: string
  type: EventType
  logoName?: LogoName
  registrationLink?: string
  emailAddress?: string
  contactName?: string
  infoLink?: string
}

export type EventType = 'casual' | 'speed' | 'swap'

export type LogoName =
  'canteen' | 'rioRanchoLibrary' | 'speedPuzzling' | 'sliceAndDice'
