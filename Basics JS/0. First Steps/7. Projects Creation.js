function projectCreate(input) {
    let name = input[0];
    let projectCnt = input[1];
    let hours = 3 * projectCnt;

    console.log( "The architect " + name + " will need " + hours + " hours to complete " + projectCnt + " project/s." );
}

 projectCreate(["George", "4"]);
 projectCreate(["Sanya", "9"]);
