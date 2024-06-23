function cone(r, h) {   // V=(πr²h)/3     S1 = πr² + πrl      l² = r² + h²      
    let l = Math.sqrt(r*r + h*h);
    let pi = Math.PI;
    let volume = (pi*r*r*h) / 3;
    let area = pi*r*(r+l);


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);