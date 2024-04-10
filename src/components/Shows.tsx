import "./Shows.css";
import WccWrap from "./WccWrap";

const bordOuter = {
  border: "6px solid #42A5F5",
  margin: "0px auto",
  width: "87%",
};

interface LinkDat {
  text: string;
  link: string;
}

interface showDetails {
  bformat: string;
  link: LinkDat;
  town: string;
  venue: string;
  date: string;
  time: string;
}

const showsDat: showDetails[] = [
  {
    bformat: "MarJays - Full Band 5pc",
    link: {
      text: "Park District - Outdoors",
      link: "https://www.facebook.com/BrookfieldRec/",
    },
    town: "Brookfield",
    venue: "Kiwanis Park",
    date: "Fri, July-12",
    time: "7pm",
  },
  {
    bformat: "MarJays - Full Band 5pc",
    link: {
      text: "Real Stadium",
      link: "https://www.facebook.com/stadiumclubatthemax/",
    },
    town: "Hodgkins",
    venue: "The Stadium Club",
    date: "Sat, July-20",
    time: "7pm",
  },
  {
    bformat: "MarJays - Full Band 4pc",
    link: {
      text: "details TBA",
      link: "https://www.facebook.com/p/Fat-Daddyz-Summit-IL-100085706312936/",
    },
    town: "Summit",
    venue: "Fat Daddyz",
    date: "Sun, Aug-04",
    time: "3pm",
  },
  {
    bformat: "",
    link: {
      text: "",
      link: "",
    },
    town: "",
    venue: "",
    date: "",
    time: "",
  },
];

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
    type: "Show",
  },
  {
    venue: "Stadium Club",
    town: "Hodgkins",
    type: "Show",
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

const showHdrLabels: string[] = [
  "Band",
  "Link/Details",
  "Location",
  "Venue",
  "Time",
];

const custHdrLabels: string[] = [
  "Past Shows / Appearances",
  "Location",
  "Type",
];

function Shows() {
  return (
    <>
      <h2>Shows</h2>
      <p>
        <div>We are actively booking and playing events as they come up</div>
        <div>
          We are ready to add to Our List and there are many areas and venues,
          we play at !<br />
          We hope to see you soon
        </div>
      </p>
      <br />
      <div style={bordOuter}>
        <table id="showsTable" style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              {showHdrLabels.map((heading, ndx: number) => {
                if (ndx == 0) {
                  return (
                    <th key={heading} className="firstCol">
                      {heading}
                    </th>
                  );
                } else {
                  return (
                    <th key={heading} className="headSpace">
                      {heading}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {showsDat.map((row, index) => {
              return (
                <tr key={index}>
                  {Object.entries(row).map(([k, v], ndx: number) => {
                    if (ndx == 0) {
                      return (
                        <td key={ndx + k} className="firstCol">
                          {v}
                        </td>
                      );
                    } else if (ndx == 1) {
                      return (
                        <td key={ndx + k}>
                          <a
                            href={v.link}
                            target="_blank"
                            className="event-link"
                          >
                            {v.text}
                          </a>
                        </td>
                      );
                    } else {
                      return <td key={ndx + k}>{v}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
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
                {Object.entries(row).map(([k, v], ndx: number) => {
                  return <td key={ndx + k}>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>* - indicates informal, impromtu appearance or open-mic</div>
      <br />
      <br />
      <WccWrap />
    </>
  );
}

export default Shows;
