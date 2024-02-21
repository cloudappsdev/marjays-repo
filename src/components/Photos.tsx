const styleDim = {
  width: "100%",
  minHeight: "800px",
  height: "100%",
};

function Photos() {
  return (
    <>
      <div>Photos</div>
      <iframe
        style={styleDim}
        src="https://mysrv.info/MarJays/Photos/TMJM_Photos_fb.html"
      />
    </>
  );
}

export default Photos;
