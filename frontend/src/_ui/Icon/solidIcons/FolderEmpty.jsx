import React from 'react';

const FolderEmpty = ({ width = '16', className = '', viewBox = '0 0 16 16', style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    className={className}
    style={style}
  >
    <path
      opacity="0.4"
      d="M13.6823 5.33398H2.31431C1.46545 5.33398 0.832714 6.11667 1.01057 6.94669L2.2133 12.5594C2.47677 13.7889 3.56334 14.6673 4.82077 14.6673H11.1759C12.4333 14.6673 13.5199 13.7889 13.7834 12.5594L14.9861 6.94669C15.1639 6.11667 14.5312 5.33398 13.6823 5.33398Z"
      fill="#889096"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.23238 8.23238C6.42765 8.03712 6.74423 8.03712 6.93949 8.23238L8.00015 9.29304L9.06081 8.23238C9.25607 8.03712 9.57266 8.03712 9.76792 8.23238C9.96318 8.42765 9.96318 8.74423 9.76792 8.93949L8.70726 10.0002L9.76792 11.0608C9.96318 11.2561 9.96318 11.5727 9.76792 11.7679C9.57266 11.9632 9.25607 11.9632 9.06081 11.7679L8.00015 10.7073L6.93949 11.7679C6.74423 11.9632 6.42765 11.9632 6.23238 11.7679C6.03712 11.5727 6.03712 11.2561 6.23238 11.0608L7.29304 10.0002L6.23238 8.93949C6.03712 8.74423 6.03712 8.42765 6.23238 8.23238Z"
      fill="#889096"
    />
    <path
      d="M13.3346 5.33398V4.66732C13.3346 3.56275 12.4392 2.66732 11.3346 2.66732H9.4663C9.02093 2.66732 8.58831 2.51866 8.237 2.24492L7.61005 1.75638C7.25874 1.48264 6.82612 1.33398 6.38075 1.33398H4.66797C3.5634 1.33398 2.66797 2.22941 2.66797 3.33398V5.33398H13.3346Z"
      fill="#889096"
    />
  </svg>
);

export default FolderEmpty;
