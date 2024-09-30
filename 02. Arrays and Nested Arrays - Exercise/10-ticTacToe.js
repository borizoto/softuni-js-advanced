function ticTacToe(arr) {

    function winChek(dashboard, curPlayer) {
 
       if (dashboard[0][0] === curPlayer && dashboard[1][1] === curPlayer && dashboard[2][2] === curPlayer ||
          dashboard[0][2] === curPlayer && dashboard[1][1] === curPlayer && dashboard[2][0] === curPlayer) {
          return true;
       }
 
       for (let i = 0; i < dashboard.length; i++) {
          if (dashboard[i][0] === curPlayer && dashboard[i][1] === curPlayer && dashboard[i][2] === curPlayer ||
             dashboard[0][i] === curPlayer && dashboard[1][i] === curPlayer && dashboard[2][i] === curPlayer
          ) {
             return true;
          }
       }
 
       return false;
    }
 
    const dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
 
    let curPlayer = "X";
    let spacecOccupied = 0;
 
    for (const string of arr) {
       const [row, col] = string.split(" ").map(Number);
 
       if (dashboard[row][col] !== false) {
          console.log("This place is already taken. Please choose another!");
          continue;
       }
 
       dashboard[row][col] = curPlayer;
       spacecOccupied++;
 
       if (winChek(dashboard, curPlayer)) {
          console.log(`Player ${curPlayer} wins!`)
          break;
       } else if (spacecOccupied === 9) {
          console.log("The game ended! Nobody wins :(");
          break;
       }
 
       curPlayer = curPlayer === "X" ? "O" : "X";
    }
    console.log(dashboard.join("\n").split(",").join("\t"));
    }