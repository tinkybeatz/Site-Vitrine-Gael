export function ProgressBar({ progress }) {
  //state

  //comportement
  const Parentdiv = {
    height: "xl:30px lg:25px sm:15px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#eab308",
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  //rendu
  return (
    <div class="drop-shadow-md" style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}
