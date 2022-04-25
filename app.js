// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log('Qustion 1');
console.log(jokeJS1);

const {setup} = jokeJS1;
p1.innerText = setup;

const {punchline} = jokeJS1;
p2.innerText = punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

axios.get('https://friends-quotes-api.herokuapp.com/quotes/random')

.then(friendsJS2 => {
    console.log(friendsJS2.data.character);
    console.log(friendsJS2.data.quote);
    p3.innerText = friendsJS2.data.character;
    p3.innerText = friendsJS2.data.quote;
})

.catch (rejected => {
    console.log("Try again");
    console.log(rejected);
    alert('TRY AGAIN!!');
})


// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

async function quoteFunc(){
    try{
    const quoteJS3 = await axios.get('https://friends-quotes-api.herokuapp.com/quotes/random');
    p5.innerText = quoteJS3.data.character;
    p5.innerText = quoteJS3.data.quote;

} catch (err){
    console.log(err);
}
}

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

async function tvMaze(){
    try {
        const episodeByNum = await axios.get('https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8');
        p7.innerText = episodeByNum.data.name;
    } catch (err){
        console.log(err);
    }
}
tvMazeFunc();