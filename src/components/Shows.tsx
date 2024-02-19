import "./Shows.css";
interface showHistory {
  venue: string;
  town: string;
  type: string;
}

const showHistoryDat: showHistory[] = [
  {
    venue: "Galway Horse Farms",
    town: "Long Grove",
    type: "Event",
  },
  {
    venue: "LaGrange Mural and Arts Fest",
    town: "LaGrange",
    type: "Event",
  },
  {
    venue: "Buckledown Brewery",
    town: "Lyons",
    type: "",
  },
  {
    venue: "Stadium Club",
    town: "Hodgkins",
    type: "",
  },
  {
    venue: "MadCats",
    town: "Palatine",
    type: "*",
  },
  {
    venue: "Miss Kittys",
    town: "Naperville",
    type: "*",
  },
  {
    venue: "Ballydoyles",
    town: "Downers Grove",
    type: "*",
  },
  {
    venue: "On Tour Brewing",
    town: "Chicago",
    type: "*",
  },
];

const custHdrLabels: string[] = ["Venue", "Location", "Type"];

function Shows() {
  return (
    <>
      <h2>Shows</h2>
      <p>
        <div>
          After a brief hiatus for the winter, we will be getting out playing -
          actively booking and playing events as they come up
        </div>
        <div>
          As you can see below - there are many areas - venues, we would
          consider, so Help us Schedule something! We hope to see you soon
        </div>
      </p>
      <br />
      <br />
      <table id="showHist" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            {custHdrLabels.map((heading) => {
              return <th key={heading}>{heading}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {showHistoryDat.map((row, index) => {
            return (
              <tr key={index}>
                {Object.entries(row).map((v, ndx: number) => {
                  return <td key={ndx}>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>* - indicates informal, impromtu appearance or open-mic</div>
    </>
  );
}

export default Shows;
