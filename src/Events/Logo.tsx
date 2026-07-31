import { Box } from '@mui/material'
import { LogoName } from './structs'

import nmjpaTmp from '../assets/nmjpaTmp.png'
import speedPuzzling from '../assets/speedPuzzling.jpeg'

interface Props {
  logoName?: LogoName
}

const Logo = ({ logoName }: Props) => {
  const src = () => {
    switch (logoName) {
      case 'speedPuzzling': {
        return speedPuzzling
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
