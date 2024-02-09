import "./Music.css";
import {songArtist} from "./SongList.ts";
import Tablez from "./Tablez.tsx";

// const getHeaders = ():string[] => ['Song', 'Artist'];
const getHeaders = ():string[] => ['song', 'by'];

const getKeyz = ():string[] => ['by', 'artist'];

const getData = () => {
        return [
            { 'song':'TELL IT LIKE IT IS', 'by':'Aaron Neville' },
            { 'song':'TENNESSEE WHISKEY', 'by':'cs'}
        ];
};


const getMUOHeadings = () => {
    return Object.keys(songArtist[0]);
}

const abc:string[] = ['by', 'artist'];


function Music() {
    // const songBy = songArtist;
    return (
      <div className="big-dv">
          <h2>Music</h2>
          <div>Coming Soon: Hold tight, we are curating our songs for Soundcloud and Spotify and can include a link soon.</div>
          <br/>
            <div className="bordered-display">
                <div className="fancy-font">The MarJay's Sample Song List</div>
                <div className="double-bord">

                <div className="hz-cent">
                    <Tablez theadData={getMUOHeadings()} tbodyData={songArtist} /> 
                </div>
                </div>
            
            </div>

      </div>
    )
}

export default Music