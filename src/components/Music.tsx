import "./Music.css";
import { SongListDat } from "./SongListDat";
import { songArtistRaw } from "./SongList.ts";
const songArtist: SongListDat[] = songArtistRaw;

import Tablez from "./Tablez.tsx";

const getKeyz = () => ["Song", "Artist"];

function Music() {
  return (
    <div className="big-dv">
      <h2>Music</h2>
      <div>
        Coming Soon: Hold tight, we are curating our songs for Soundcloud and
        Spotify and can include a link soon.
      </div>
      <br />
      <div className="bordered-display">
        <div className="fancy-font">The MarJay's Sample Song List</div>
        <div className="double-bord">
          <div className="hz-cent">
            <Tablez tbodyData={songArtist} custHdrLabels={getKeyz()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
