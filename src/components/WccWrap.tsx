import { useEffect, useState } from "react";
import { WordCloudChart, WordData } from "./WordCloudChart";

const cloudWordsMetro: WordData[] = [
  { text: "Palatine", value: 10 },
  { text: "Oak Lawn", value: 4 },
  { text: "Oak Park", value: 7 },
  { text: "Schaumburg", value: 10 },
  { text: "Brookfield", value: 7 },
  { text: "Oak Brook", value: 9 },
  { text: "Crystal Lake", value: 2 },
  { text: "Franklin Park", value: 6 },
  { text: "Northbrook", value: 3 },
  { text: "Cary", value: 2 },
  { text: "Dundee", value: 2 },
  { text: "Elmhurst", value: 5 },
  { text: "Plainfield", value: 4 },
  { text: "Naperville", value: 9 },
  { text: "Chicago", value: 9 },
  { text: "MVP", value: 8 },
  { text: "Des Plaines", value: 5 },
  { text: "Long Grove", value: 5 },
  { text: "Addison", value: 5 },
  { text: "Park Ridge", value: 8 },
  { text: "Barrington", value: 1 },
  { text: "Downers Grove", value: 4 },
  { text: "Woodridge", value: 4 },
  { text: "Lisle", value: 4 },
  { text: "Joliet", value: 5 },
  { text: "Orland Park", value: 5 },
  { text: "Lockport", value: 9 },
];

function WccWrap() {
  const [addRmv, setAddRmv] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (addRmv) {
        cloudWordsMetro.push({ text: "MyTown", value: 1 });
      } else {
        cloudWordsMetro.pop();
      }
      setAddRmv(!addRmv);
    }, 2 * 1000);
    return () => clearInterval(interval);
  }, [addRmv]);

  return (
    <div className="  block border m-10 border-indigo-500">
      <WordCloudChart data={cloudWordsMetro}></WordCloudChart>
    </div>
  );
}

export default WccWrap;
