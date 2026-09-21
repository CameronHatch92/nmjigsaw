import { LogoName } from '../Events/structs'

interface PuzzleTime {
  seconds: number
  minutes: number
  hours: number
}

interface Result {
  name: string
  time: PuzzleTime
}

export interface CompletedEvent {
  id: number
  title: string
  date: Date
  city: string
  logoName?: LogoName
  results: Result[]
  description: string
  puzzleName: string
  puzzleBrand: string
}
