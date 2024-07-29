function extract(content) {
    let paragraph = document.getElementById(content).textContent;

    let pattern = /(?<=\().+?(?=\))/gm;
    let arr = [...paragraph.matchAll(pattern)].map(x => {return x[0]})
                                              .join("; ");

    return arr;
}
