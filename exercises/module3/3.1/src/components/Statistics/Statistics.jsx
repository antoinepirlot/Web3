import StatisticLine from "components/Statistics/StatisticLine";

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad;
  return (
      <div>
        <h1>Statistics</h1>
        {sum === 0
            ? <p>No feedback given</p>
            :
            <table>
              <thead></thead>
              <tbody>
              <StatisticLine text={"Good"} value={good}/>
              <StatisticLine text={"Neutral"} value={neutral}/>
              <StatisticLine text={"Bad"} value={bad}/>
              <StatisticLine text={"All"} value={sum}/>
              <StatisticLine text={"Average"} value={(good - bad) / sum}/>
              <StatisticLine text={"Positive"} value={good / sum * 100}/>
              </tbody>
              <tfoot></tfoot>
            </table>
        }
      </div>
  )
}

export default Statistics;