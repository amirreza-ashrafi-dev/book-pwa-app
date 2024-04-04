const CircularProgres = () => {
  return (
    <div>
      <svg width={35} height={35}>
        <circle
          cx={17}
          cy={15}
          r={15}
          style={{
            strokeDasharray: "503",
            strokeDashoffset: "400",
          }}
          className="-ml-4 stroke-slate-400 stroke-[2px] fill-none stroke-"
        ></circle>
      </svg>
    </div>
  );
};

export default CircularProgres;
