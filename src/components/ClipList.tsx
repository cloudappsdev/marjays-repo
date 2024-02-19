import "./ClipList.css";

const fyRand = (numArr: number[]) => {
  for (let i = numArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = numArr[i];
    numArr[i] = numArr[j];
    numArr[j] = temp;
  }
};

const getRandomlyOrderedPlayList = (cInfo: ClipData[]) => {
  // const arrRS: number[] = fyRand(cInfo.map((x) => x.index));
  // const arrRS: number[] = sortIt(cInfo.map((x) => x.index));  // 'a' is declared but its value is never read.
  // sortIt  :: return arr.sort((a, b) => 0.5 - Math.random());

  const ndxNum: number[] = cInfo.map((x) => x.index);
  fyRand(ndxNum);

  const finalClipInfo: ClipData[] = [];

  ndxNum.forEach((x) => {
    finalClipInfo.push(cInfo.filter((entity) => entity.index == x)[0]);
  });

  return finalClipInfo;
};

// function ClipList(r: boolean, clipInfo: ClipData[]);
const ClipList = (props: { r: boolean; clipInfo: ClipData[] }) => {
  const { r, clipInfo } = props;

  const clipInfoFinal: ClipData[] =
    r == false ? clipInfo : getRandomlyOrderedPlayList(clipInfo);

  return (
    <>
      <div className="link-wrapper">
        {clipInfoFinal.map((xyz: ClipData, ndx: number) => {
          return (
            <div key={ndx} className="linkd">
              <a href={"#" + xyz.label}>
                <span className="link-span">{xyz.song}</span>
              </a>
              <br />
            </div>
          );
        })}
      </div>
      <hr style={{ width: "90%" }} />

      <ul className="big-ul">
        {clipInfoFinal.map((xyz: ClipData, ndx: number) => {
          return (
            <li key={ndx} className="spacer">
              <div id={xyz.label} className="span-wrap">
                <span className="song-link">{xyz.song}</span>
              </div>
              <div dangerouslySetInnerHTML={{ __html: xyz.ytifm }} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ClipList;
