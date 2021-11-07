import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
   
      viewBox='0 0 16 16'
      fill='#FFFFFF'
      opacity={0.4}
      {...props}
    >
      <Path d='M7.933 4.886a1.91 1.91 0 100-3.82 1.91 1.91 0 000 3.82m4.78-2.251a1.91 1.91 0 100 3.82 1.91 1.91 0 000-3.82M5.064 4.544a1.91 1.91 0 10-3.82 0 1.91 1.91 0 003.82 0M7.916 6.11a4.487 4.487 0 100 8.972 4.487 4.487 0 000-8.973' />
    </Svg>
  )
}

export default SvgComponent
