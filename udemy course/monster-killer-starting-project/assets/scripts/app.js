const ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 35;
const MONSTER_STRONG_ATTACK_VALUE = 35;
const Heal_Value = 25;
const enteredValue = prompt("Max life for monster.",'100');//100 will be like placeholder initial value

let chosenMaxLife = parseInt(enteredValue); //since health will be changed many times so it will be let not const. and changing the string from entered value into int
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
// if choosen max life is not a number than we will use default chosen max life
if(isNaN(chosenMaxLife) || chosenMaxLife <=0  ){
    chosenMaxLife = 100; 
}

function endRound(){
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
      LOG_EVENT_MONSTER_ATTACK,
      playerDamage,
      currentMonsterHealth,
      currentPlayerHealth
    );


if(currentMonsterHealth <= 0)
 {
  alert("You Won!");
  window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
 }else if(currentPlayerHealth <= 0) 
    {
      alert("You Lost!");
      window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
    }
    else if(currentMonsterHealth <=0 && currentPlayerHealth <= 0){
      alert("Draw!");
      window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
    }
}

adjustHealthBars(chosenMaxLife);

// Making Attack and Strong atack
function attackHandler(){
 const damage = dealMonsterDamage(ATTACK_VALUE);
 currentMonsterHealth = currentMonsterHealth - damage;
 /*
 const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
 currentPlayerHealth -= playerDamage;


if(currentMonsterHealth <= 0)
 {
  alert("You Won!");
  window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
 }else if(currentPlayerHealth <= 0) 
    {
      alert("You Lost!");
      window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
    }
    else if(currentMonsterHealth <=0 && currentPlayerHealth <= 0){
      alert("Draw!");
      window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
    }
    */
   endRound();
}
function strongattackHandler(){
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth = currentMonsterHealth - damage;
    const playerDamage = dealPlayerDamage(MONSTER_STRONG_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    if(currentMonsterHealth <= 0){
        alert("You WON by strong Attack!");
        window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
    }else if(currentPlayerHealth <= 0){
        alert("You Lost by Strong Attack")
        window.location.href = "index.html"; //This line of code is commonly used in web development to redirect the user to a different page or to reload the current page with a new URL.
    }


}
attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongattackHandler);

// Healing Player function
function HealPlayer(){

    increasePlayerHealth(Heal_Value);
    currentPlayerHealth = currentPlayerHealth + Heal_Value;
    endRound();

}
healBtn.addEventListener('click',HealPlayer);

//Making Battle log
const LOG_EVENT_PLAYER_ATTACK = 'Player_Attack'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'Player_Strong_Attack'
const LOG_EVENT_MONSTER_ATTACK = 'Monster_Attack'
const LOG_EVENT_PLAYER_HEAL = 'Player_Heal'
const LOG_EVENT_GAME_OVER = 'Game_Over'
let battlelog = []; 
function writeToLog(event, value) 
{
  if(event === LOG_EVENT_PLAYER_ATTACK  )
  {
    LogEntry ={
    event: event, //string describing the event from const here
    value : value, //value of the input field
    target: 'MONSTER',
    finalMonsterHealth: MonsterHealth,
    finalPlayerHealth: PlayerHealth
  }
  } 
else if( event === LOG_EVENT_PLAYER_STRONG_ATTACK)
  {
    LogEntry ={
    event: event, //string describing the event from const here
    value : value, //value of the input field
    target: 'MONSTER',
    finalMonsterHealth: MonsterHealth,
    finalPlayerHealth: PlayerHealth
    };
  
    }
   else if( event === LOG_EVENT_MONSTER_ATTACK)
     {
       LogEntry ={
       event: event, //string describing the event from const here
       value : value, //value of the input field
       target: 'PLAYER',
       finalMonsterHealth: MonsterHealth,
       finalPlayerHealth: PlayerHealth
     };
      }
      else if( event === LOG_EVENT_PLAYER_HEAL)
        {
          LogEntry ={
          event: event, //string describing the event from const here
          value : value, //value of the input field
          finalMonsterHealth: MonsterHealth,
          finalPlayerHealth: PlayerHealth
        };
         }
         
    else if( event === LOG_EVENT_GAME_OVER)
    {
      LogEntry ={
      event: event, //string describing the event from const here
      value : value, //value of the input field
      target: 'MONSTER',
      finalMonsterHealth: MonsterHealth,
      finalPlayerHealth: PlayerHealth
    };
  }
  battlelog.push(LogEntry);
}
//In the above multiple if-else if are used so that makes are code messy but to solve this what we can do is we can make that if-else a seperate function and call that same function (funtion for player and monster seperate)
function printLogHandler(){
  console.log(battlelog)
}

logBtn.addEventListener("click", printLogHandler);
