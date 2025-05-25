function createSortedList() {
    return {
        collection: [],

        add(element) {
            this.collection.push(element);
            this.collection.sort((a, b) => a - b);
        },
        remove(index) {
            if (0 <= index && index < this.collection.length) {
                this.collection.splice(index, 1);
            }
        },
        get(index) {
            if (0 <= index && index < this.collection.length) {
                return this.collection[index];
            }
        },
        get size() {
            return this.collection.length;
        }
    };
}

let list = createSortedList();

list.add(5);
list.add(6);
list.add(7);

console.log(list.get(1)); // Should print 6
list.remove(1);
console.log(list.get(1)); // Should print 7 after removing the element at index 1
