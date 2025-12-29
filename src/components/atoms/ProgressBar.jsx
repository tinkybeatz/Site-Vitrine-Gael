export function ProgressBar({ progress }) {
  //state

  //comportement
  const Parentdiv = {
    height: "xl:30px lg:25px sm:15px",
    width: "100%",
    backgroundColor: "#f3f4f6",
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
    fontWeight: 400,
  };

  //rendu
  return (
    <div class="" style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
}
