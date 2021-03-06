import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      viewBox='0 0 16 16'
      fill={props.color}
      opacity={props.opacity}
      {...props}
    >
      <Path d='M7.63 1.623a6.394 6.394 0 015.694 2.593c.113.154.217.327.292.502.019.044.041.094.046.142.007.082-.023.076-.09.036-.175-.102-.333-.229-.503-.338a3.8 3.8 0 00-2.377-.589A3.819 3.819 0 007.213 8.1a3.817 3.817 0 006.332 2.535c.142-.124.267-.248.393-.386.019-.02.098-.088.104-.024a.864.864 0 01-.013.223 2.105 2.105 0 01-.183.574c-.087.184-.19.36-.304.528a6.105 6.105 0 01-.816.955c-.227.22-.467.425-.72.615a6.44 6.44 0 01-3.296 1.258A6.394 6.394 0 011.801 8.54 6.398 6.398 0 017.63 1.623zm3.894 3.904c.123 0 .503.803.78 1.428.629.278 1.397.64 1.397.752 0 .112-.785.481-1.417.76-.279.633-.648 1.42-.76 1.42-.11 0-.472-.77-.75-1.4-.625-.277-1.427-.658-1.427-.78s.784-.495 1.406-.772c.277-.623.65-1.408.771-1.408z' />
    </Svg>
  )
}

export default SvgComponent
