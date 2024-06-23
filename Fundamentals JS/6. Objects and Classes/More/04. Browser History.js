function browserHistory(obj, arr) {
    let history = obj;
    let actions = arr;

     actions.forEach(action => {
        if (action === "Clear History and Cache") {
            history["Browser Logs"] = [];
            history["Open Tabs"] = [];
            history["Recently Closed"] = [];
        } else {
            action = action.split(" "); 
            let cmnd = action.shift();
            action = action.join(" ");

            let index = history["Open Tabs"].indexOf(action);
            if (cmnd === "Open") {
                history["Open Tabs"].push(action);
                history["Browser Logs"].push(cmnd + " " + action);
            } else if (cmnd === "Close" && index > -1) {
                let curr = history["Open Tabs"].splice(index, 1).join("");
                history["Recently Closed"].push(curr);
                history["Browser Logs"].push(cmnd + " " + action);
            }
        }
     });

     console.log(history["Browser Name"]);
     console.log(`Open Tabs: ${history["Open Tabs"].join(", ")}`);
     console.log(`Recently Closed: ${history["Recently Closed"].join(", ")}`);
     console.log(`Browser Logs: ${history["Browser Logs"].join(", ")}`);

}

browserHistory(
    {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
        "Recently Closed":["Yahoo","Gmail"],
        "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

console.log("=============");

browserHistory({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);