function solve() {
  const text = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;

  let result;
  if (namingConvention === "Camel Case") {
    result = text.split(" ").map((word, i) => {
      if (i === 0) {
        word = word.toLowerCase();
      } else {
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word;
    });
  } else if (namingConvention === "Pascal Case") {
    result = text.split(" ").map((word, i) => {
      return word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
  } else {
    result = ["Error!"];
  }

  document.getElementById("result").innerHTML = result.join("");
  
}



