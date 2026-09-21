import { PuzzleTime } from '../PastEvents/structs'

const timeFormatter = (puzzleTime: PuzzleTime) => {
  const seconds = puzzleTime.seconds.toString().padStart(2, '0')
  const minutes = puzzleTime.minutes.toString().padStart(2, '0')
  return `${puzzleTime.hours}:${minutes}:${seconds}`
}

export default timeFormatter
