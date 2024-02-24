import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Videos.css";

import ghfSet1 from "./galway1.json";
import ghfSet2 from "./galway2.json";
import ClipSetInfo from "./ClipSetInfo";
import { ClipData } from "./ClipData";

const ghfxSet1: ClipData[] = ghfSet1;
const ghfxSet2: ClipData[] = ghfSet2;

const ghfSmpl1 =
  '<iframe width="100%" height="555" src="https://www.youtube.com/embed/5J9kETV83kw" title="The MarJays, Set1 music for Galway Farms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

const ghfSmpl2 =
  '<iframe width="100%" height="555" src="https://www.youtube.com/embed/AufcjqNJBZk" title="The MarJays, full-band, Set2 music for Galway Farms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe';

function Videos() {
  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        Our "set-it and forget-it" videographer, didn't always capture the whole
        stage or all players, <br />
        (that would be me) but we hope you enjoy the Music while you are here!
      </div>
      <Tabs>
        <TabList style={{ width: "50%", margin: "0 auto" }}>
          <Tab style={{ width: "30%" }}>Acoustic 3pc</Tab>
          <Tab style={{ width: "30%" }}>Full-Band</Tab>
        </TabList>

        <TabPanel>
          <br />
          <Tabs className="p-color-active-underline">
            <TabList style={{ width: "50%", margin: "0 auto" }}>
              <Tab style={{ width: "30%" }}>Set 1</Tab>
              <Tab style={{ width: "30%" }}>Set 2</Tab>
            </TabList>

            <TabPanel>
              <iframe
                style={{ marginTop: "8px" }}
                width="100%"
                height="555"
                src="https://www.youtube.com/embed/80m6ENmR45k"
                title="Mural Uno Mix Sampler"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </TabPanel>
            <TabPanel>
              <iframe
                style={{ marginTop: "8px" }}
                width="100%"
                height="555"
                src="https://www.youtube.com/embed/G60jnMDTBLI"
                title="Mix2 of Mural Art Fest, The MarJays"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <br />
          <Tabs className="p-color-active-underline">
            <TabList style={{ width: "50%", margin: "0 auto" }}>
              <Tab style={{ width: "30%" }}>Set 1x</Tab>
              <Tab style={{ width: "30%" }}>Set 2</Tab>
            </TabList>

            <TabPanel>
              <ClipSetInfo smpl={ghfSmpl1} clipInfo={ghfxSet1} />
            </TabPanel>
            <TabPanel>
              <ClipSetInfo smpl={ghfSmpl2} clipInfo={ghfxSet2} />
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Videos;
