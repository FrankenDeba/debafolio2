import "./TexturePaper.css";

function TexturePaper({ children }: { children: React.ReactElement }) {
  return (
    <>
      <div className="texture_cont">{children}</div>;
      {/* <svg>
        <filter id="wavy2">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="1"
          ></feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </svg> */}
    </>
  );
}

export default TexturePaper;
