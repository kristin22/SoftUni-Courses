function argumentInfo(...args) {
    const counter = {}

    args.forEach(el => {
        const type = typeof el
        console.log(`${type}: ${el}`)

        counter[type] = (counter[type] || 0) + 1
    })
    
    Object.entries(counter).sort((a, b) => b[1] - a[1])
                           .map(([tp, cnt]) => console.log(`${tp} = ${cnt}`))
    
}

(argumentInfo('cat', 42, function () { console.log('Hello world!'); }));
