function factory(library, orders) {
    const output =  orders.reduce((a, v) => {    
        let currObj = { name: v.template.name };
        
        v.parts.forEach(part => { 
            currObj[part] = library[part];
         });
        
        a.push(currObj);

        return a;
    } , []);

    return output;
}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];

  const products = factory(library, orders);
  console.log(products);
  