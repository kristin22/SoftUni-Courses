function createSortedList() {

    return {
        collection: [],
        size: 0,

        add(element) {
            nums.push(element);
        },

        remove(index) {

        },

        get(index) {
            
        },

        

    }
}

let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
