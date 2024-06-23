function deserialize(input) {
    let arr = [];

    for (let line of input) {
        if (line === "end") {
            break;
        }

        let letter = line[0];
        let indexes = line.slice(2, line.length).split("/");

        for (let i = 0; i < indexes.length; i++) {
            let currIndex = Number(indexes[i]);
            arr[currIndex] = letter;
        }

    }

    console.log(arr.join(""));
}

deserialize(['a:0/2/4/6', 'b:1/3/5', 'end']);

deserialize(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']);