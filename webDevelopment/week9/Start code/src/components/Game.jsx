import React from "react";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------
import Entity from './Entity'
import GameResult from "./GameResult";
import Controls from "./Controls";
import Logs from "./Logs";

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHp, setPlayerHp] = React.useState(100);
  const [enemyHp, setEnemyHp] = React.useState(100);
  const [logs, setLogs] = React.useState([]);
  const isGameOver = playerHp <= 0 || enemyHp <= 0;
  
  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function handleRestart() {
    setPlayerHp(100);
    setEnemyHp(100);
    setLogs([]);
  }

  function handleAttack() {
    const playerDamage = getRandomValue(5, 12);
    const enemyDamage = getRandomValue(5, 12);
    setPlayerHp((prev) => prev - enemyDamage);
    setEnemyHp((prev) => prev - playerDamage);
    setLogs((prev) => [
      createLogAttack(true, playerDamage),
      createLogAttack(false, enemyDamage),
      ...prev,
    ]);
  }

  function handleHeal() {
    if(playerHp === 100) {
      return;
    }
    const playerHealing = getRandomValue(8, 15);
    if (playerHp > 100) {
      setEnemyHp(100);
    }
    const enemyDamage = getRandomValue(5, 12);
    setPlayerHp((prev) => prev - enemyDamage);
    setPlayerHp((prev) => prev + playerHealing);
    setLogs((prev) => [
      createLogHeal(playerHealing),
      createLogAttack(false, enemyDamage),
      ...prev,
    ]);
  }

  function killYourSelf() {
    setPlayerHp(0);
    const log = "Surrender";
    setLogs((prev) => [
      {
        isPlayer: true,
        isDamage: false,
        text: log
      },
      ...prev
    ]);
  }

  function handleSpecialAttack() {
    const playerDamage = getRandomValue(8, 25);
    const enemyDamage = getRandomValue(5, 12);
    setPlayerHp((prev) => prev - enemyDamage);
    setEnemyHp((prev) => prev - playerDamage);
    if(playerHp < 0) setPlayerHp(0);
    if(enemyHp < 0) setEnemyHp(0);
    setLogs((prev) => [
      createLogAttack(true, playerDamage),
      createLogAttack(false, enemyDamage),
      ...prev,
    ]);
  }

  function handleControl(action) {
    if(action === "attack") {
      handleAttack();
    } else if(action === "heal") {
      handleHeal();
    } else if(action === "surrender") {
      killYourSelf();
    } else if(action === "special-attack") {
      handleSpecialAttack();
    }
  }
  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
  <>
    <div>
      <Entity name="Player" hp={playerHp} />
      <Entity name="Enemy" hp={enemyHp} />      
    </div>
    <GameResult playerHp={playerHp} enemyHp={enemyHp}  onRestart={handleRestart} />
    {!isGameOver &&
      <Controls onControl={handleControl} />
    }
    <Logs logs={logs} />
  </>
  );
}

export default Game;
