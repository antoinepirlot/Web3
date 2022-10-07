const StatisticLine = ({text, value}) => <tr>
  <td>{text} : {value} {text === "Positive" && "%"}</td>
</tr>

export default StatisticLine;