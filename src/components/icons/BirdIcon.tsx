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
      <Path d='M9.745 12.248a4.564 4.564 0 01-1.948.837c-.424.076-.857.046-1.278-.036-.386-.074-.86-.148-1.193-.36-.142-.089-.588.97-.645 1.075-.301.554-.783 1-1.357 1.238-.026.011-.056.021-.081.01-.029-.014-.038-.05-.043-.082-.088-.57.1-1.144.433-1.606.085-.117 1.03-1.065.876-1.168-.328-.221-.586-.626-.809-.949-.244-.353-.445-.737-.546-1.157a4.562 4.562 0 01-.014-2.12c.061-.286.246-.661.499-.824.068-.043.487.468.533.519.277.307.504.588.86.818L4.387 6.78c-.04-.102-.08-.212-.058-.32a.579.579 0 01.123-.222c1.52-1.988 3.078-4.134 5.606-4.845.189-.053 2.254-.687 2.36-.452.556 1.222.73 2.593.585 3.923-.128 1.167-.61 2.34-1.004 3.407-.275.743-.846 1.401-1.23 2.096a.58.58 0 01-.154.202c-.09.064-.207.07-.317.076l-1.782.075c.354.234.702.33 1.094.46.065.022.702.2.69.28-.048.297-.317.616-.555.788' />
    </Svg>
  )
}

export default SvgComponent
