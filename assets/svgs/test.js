import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width="100"
      height="100"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zM9.25 3.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 8H9.419l1.786 5H9.08L8 9.973 6.919 13H4.795l1.786-5H4V6h8v2z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
