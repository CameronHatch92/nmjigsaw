import { Button } from '@mui/material'

import { PuzzleEvent } from './structs'

interface Props {
  puzzleEvent: PuzzleEvent
}

const ActionItem = ({ puzzleEvent }: Props) => {
  const emailButtonText = () => {
    if (puzzleEvent.contactName) {
      return `Email ${puzzleEvent.contactName} at ${puzzleEvent.emailAddress} for Details`
    }
    return `Email ${puzzleEvent.emailAddress} for Details`
  }

  if (puzzleEvent.registrationLink) {
    return (
      <Button
        variant="contained"
        disableElevation
        size="small"
        href={puzzleEvent.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Register
      </Button>
    )
  }

  if (puzzleEvent.infoLink) {
    return (
      <Button
        variant="contained"
        disableElevation
        size="small"
        href={puzzleEvent.infoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Event Info
      </Button>
    )
  }

  if (puzzleEvent.emailAddress) {
    return (
      <Button
        variant="contained"
        disableElevation
        size="small"
        href={`mailto:${puzzleEvent.emailAddress}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {emailButtonText()}
      </Button>
    )
  }
}

export default ActionItem
