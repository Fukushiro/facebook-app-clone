import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.385 13.446a6.75 6.75 0 111.06-1.06l5.156 5.155a.75.75 0 11-1.06 1.06l-5.156-5.155zM4.46 11.884a5.25 5.25 0 117.43-.005l-.005.005-.005.004a5.25 5.25 0 01-7.42-.004z"
        fill="#384CFF"
        stroke="#384CFF"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;
