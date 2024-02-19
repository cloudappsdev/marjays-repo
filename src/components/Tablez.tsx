import { SongListDat } from "./SongListDat";

interface Props {
  theadData?: string[];
  tbodyData: SongListDat[];
  custHdrLabels: string[];
}

export default function Tablez(props: Props) {
  const { tbodyData, custHdrLabels } = props;

  return (
    <table style={{ margin: "0 auto" }}>
      <thead>
        <tr>
          {custHdrLabels.map((heading) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((row, index) => {
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
  );
}
