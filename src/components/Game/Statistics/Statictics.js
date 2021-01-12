import React, { useEffect } from "react";
import styles from './Statistics.module.css';
import { winstreak } from "../../utils/utils"

function Statistics (props) {

  const [ ...result ] = props.result;

  const totalWin = result.filter((item => item === 'win')).length
  const totalLose = result.filter((item => item === 'lose')).length
  const winrate = ((Math.round((totalWin / result.length).toFixed(2)*100)))
  const winstreakMax = winstreak(result).max;
  const winstreakCurrent = winstreak(result).current;

  useEffect(() => {
      renderLine(result)
  }, [result])

  function renderLine (result) {
    let lines = [];
    for (let i = 0; i < result.length; i++) {
      let lineCl = [];
      if (result[i] === 'none') {
        lineCl[i] = styles.neutral
      } else if (result[i] === 'win') {
        lineCl[i] = styles.win
      } else lineCl[i] = styles.lose

      lines.unshift(<li key={i} className={lineCl[i]}>
        {`Round ${i + 1}: ${(result[i] === 'none') ? 'skipped' : result[i]}`}</li>)
    }
      return lines;
    }

    return (
      <div className={styles.wrapper}>
        <h3 style={{width: '250px'}}>Statistics</h3>
        <div className={styles.statWrapper}>
        <div className={styles.titles}>
        <p>Rounds played: <span>{result.length}</span></p>
        <p>Win: <span>{totalWin}</span></p>
        <p>Lose: <span>{totalLose}</span></p>
        <p>Winrate: <span>{(isNaN(winrate)) ? '0%' : `${winrate}%`}</span></p>
        <p>Maximum winstreak: <span>{(winstreakMax)}</span></p>
        <p>Current winstreak: <span>{(winstreakCurrent)}</span></p>
        </div>
        <ul className={styles.lines}>
          {renderLine(result)}
        </ul>
      </div>
      </div>
    )
  }
export default Statistics;
