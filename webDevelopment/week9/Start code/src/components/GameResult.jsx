export default function GameResult({playerHp, enemyHp, onRestart }) {
    const isDraw = playerHp <= 0 && enemyHp <= 0;
    const playerLost = playerHp <= 0 && enemyHp > 0;
    const playerWon = enemyHp <= 0 && playerHp > 0;

    return (
      <>
        {(playerHp <= 0 || enemyHp <= 0) && (

          <section className="container">
            <h2>Game Over!</h2>
            {isDraw &&
              <h3>It's a draw!</h3>
            }
            {playerLost &&
              <h3>Monster won!</h3>
            }
            {playerWon &&
              <h3>You won!</h3>
            }
            <button onClick={onRestart}>Start New Game</button>
          </section>
        )}
      </>
    );
}