function ladybugs(input) {
  let n = Number(input.shift());
  let indexes = input.shift().split(" ").map(x => Number(x));
  let bugs = [];

  for (let i = 0; i < n; i++) {
    bugs[i] = 0;
  }

  for (let index of indexes) {
    if (0 <= index <= bugs.length) {
      bugs[index] = 1;
    }
  }

  let command = input.shift();
  while (command) {
    command = command.split(/\ /);
    command[0] = Number(command[0]); // curr index
    command[2] = Number(command[2]); // fly length

    if (command[1] === "right") {
      if (0 <= command[0] <= bugs.length) {
        bugs[command[0]] = 0;

        let nextIndex = command[0] + command[2];
        if (nextIndex < bugs.length) {
          if (bugs[nextIndex] === 0) {
            bugs[nextIndex] = 1;
          } else {
            while (bugs[nextIndex] === 1) {
              nextIndex += command[2];
            }
            if (nextIndex < bugs.length) {
              bugs[nextIndex] = 1;
            }
          }
        }
      }
    } else if (command[1] === "left") {
      if (0 <= command[0] <= bugs.length) {
        bugs[command[0]] = 0;

        let nextIndex = command[0] - command[2];
        if (nextIndex < bugs.length) {
          if (bugs[nextIndex] === 0) {
            bugs[nextIndex] = 1;
          } else {
            while (bugs[nextIndex] === 1) {
              nextIndex -= command[2];
            }
            if (nextIndex < bugs.length) {
              bugs[nextIndex] = 1;
            }
          }
        }
      }
    }

    command = input.shift();
  }

  console.log(bugs.join(" "));
}

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);

/*

function ladybugs(arr) {
  let sizeOfField = arr[0];
  let initialIndexes = arr[1];
  initialIndexes = initialIndexes.split(" ");
  let commands = arr.slice(2);
  let field = [];
 
  for (let i = 0; i < sizeOfField; i++) {
    field.push(0);
  }
 
  for (let i = 0; i < initialIndexes.length; i++) {
    let position = Number(initialIndexes[i]);
    if (position > field.length - 1) {
      continue;
    }
    field[position] = 1;
  }
 
 
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i];
    currentCommand = currentCommand.split(" ");
 
    let position = Number(currentCommand[0]);
    let direction = currentCommand[1];
    let flyCount = Number(currentCommand[2]);
 
    if (field[position] === 0
      || position < 0
      || position > field.length - 1) {
      continue;
    }
 
    field[position] = 0;
   
    if (flyCount < 0) {
      direction = direction === "right" ? "left" : "right";
      flyCount = Math.abs(flyCount);
    }
   
    let nextPosition = 0;
 
    if (direction === "right") {
      nextPosition = position + flyCount;
    } else if (direction === "left") {
      nextPosition = position - flyCount;
    }
 
    while (field[nextPosition] === 1) {      
      if (direction === "right") {
        nextPosition += flyCount;
      } else if (direction === "left") {
        nextPosition -= flyCount;
      }
    }
   
    if (nextPosition > field.length - 1 || nextPosition < 0) {
      continue;
    }
 
    field[nextPosition] = 1;
  }
 
  console.log(field.join(" "));
}

*/
