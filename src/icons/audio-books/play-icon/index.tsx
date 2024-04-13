interface play {
  width?: number;
  height?: number;
}

const Play = ({ width, height }: play) => {
  return (
    <svg
      width={width ? width : "23"}
      height={height ? height : "26"}
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 9.5359C23.6667 11.0755 23.6667 14.9245 21 16.4641L5.99999 25.1244C3.33333 26.664 0 24.7395 0 21.6603V4.33974C0 1.26054 3.33333 -0.663956 6 0.875644L21 9.5359Z"
        fill="#A3470A"
      />
    </svg>
  );
};

export default Play;
