import { Box } from '@mui/material'

import nmjpaTmp from '../assets/nmjpaTmp.png'
import rioRanchoLibrary from '../assets/rioRanchoLibrary.jpg'
import sliceAndDice from '../assets/sliceAndDice.jpeg'
import speedPuzzling from '../assets/speedPuzzling.jpeg'
import { LogoName } from './structs'

interface Props {
  logoName?: LogoName
}

const Logo = ({ logoName }: Props) => {
  const src = () => {
    switch (logoName) {
      case 'speedPuzzling': {
        return speedPuzzling
      }
      case 'sliceAndDice': {
        return sliceAndDice
      }
      case 'rioRanchoLibrary': {
        return rioRanchoLibrary
      }
      default: {
        return nmjpaTmp
      }
    }
  }
  return (
    <Box
      component="img"
      src={src()}
      sx={{
        width: 70,
        height: 70,
        borderRadius: 2,
        objectFit: 'cover',
        flexShrink: 0,
      }}
    />
  )
}

export default Logo
