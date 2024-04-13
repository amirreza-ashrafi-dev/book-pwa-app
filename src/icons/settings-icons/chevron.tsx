interface Chevron {
  width?: number;
  height?: number;
}

const Chevron = ({ width, height }: Chevron) => {
  return (
    <svg
      width={width ? width : "20"}
      height={height ? height : "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4248 16.6L12.8581 11.1667C13.4998 10.525 13.4998 9.47503 12.8581 8.83336L7.4248 3.40002"
        stroke="#2E3731"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
