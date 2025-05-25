// Input will be passed as arguments to your function through a call() invocation -> call(object, arguments)
//! NOT FINISHED !!!

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');

let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

function solution(arg) {
    if (arg === 'upvote') {
        return this.upvotes++
    } else if (arg === 'downvote') {
        return this.downvotes++
    }
    
    let total = this.upvotes - this.downvotes
    if (total > 50) {
        // the numbers must be obfuscated
        // reported numbers only change
    }

}

// total score (positive minus negative votes). 

// if a post has more than 50 total votes, the numbers must be obfuscated – the stored values remain the same, but the reported amounts of upvotes and downvotes have a number added to them. 

// This number is 25% of the greater number of votes (positive or negative), rounded up. The actual numbers should not be modified, just the reported amounts.

