export default function Tablez({theadData, tbodyData, custHdrLabels}) {
    return (
      <table style={{'margin': '0 auto'}}>
          <thead>
             <tr>
              {custHdrLabels.map(heading => {
                return <th key={heading}>{heading}</th>
              })}
            </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
                  return <tr key={index}>
                      {theadData.map((key) => {
                           return <td key={row[key]}>{row[key]}</td>
                      })}
                </tr>;
              })}
          </tbody>
      </table>
   );
   }