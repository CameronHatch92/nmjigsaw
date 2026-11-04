import { Box } from '@mui/material'

import catZodiac from '../assets/puzzleImages/catZodiac.png'
import rainbowOwlOnABranch from '../assets/puzzleImages/rainbowOwlOnABranch.png'

interface Props {
  puzzleName: string
}

const PuzzleImage = ({ puzzleName }: Props) => {
  const src = () => {
    switch (puzzleName) {
      case 'Cat Zodiac': {
        return catZodiac
      }
      case 'Rainbow Owl on a Branch': {
        return rainbowOwlOnABranch
      }
    }
  }

  if (src()) {
    return (
      <Box
        component="img"
        src={src()}
        sx={{
          width: 350,
          height: 350,
          borderRadius: 2,
          objectFit: 'cover',
          flexShrink: 0,
          alignSelf: 'center',
        }}
      />
    )
  }
}

export default PuzzleImage
