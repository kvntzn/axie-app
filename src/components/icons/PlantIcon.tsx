import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox='0 0 16 16' fill='#fff' opacity={0.4} {...props}>
      <Path d='M14.205 4.357c-.796-.634-1.882-.941-2.89-.74C9.764 3.926 8.53 5.31 8 6.757c-.53-1.447-1.764-2.831-3.314-3.14-1.009-.201-2.095.106-2.891.74C.847 5.112.5 6.291.836 7.45c.255.879 1.11 1.204 1.933 1.364.912.178 1.906.33 2.617.997a4.745 4.745 0 011.233 1.946c.073.218.137.44.19.665.049.203.056.415.096.62.036.19.112.106.19.01.392-.485.692-1.08.905-1.696.213.616.513 1.21.905 1.695.078.097.154.18.19-.01.04-.204.048-.416.096-.619a7.64 7.64 0 01.19-.665 4.745 4.745 0 011.234-1.946c.71-.666 1.703-.82 2.616-.997.823-.16 1.678-.485 1.933-1.364.335-1.16-.011-2.338-.959-3.093' />
    </Svg>
  )
}

export default SvgComponent
