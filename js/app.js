console.log('App was loaded');

function cl(text){
    console.log(text);
}

const getArrayOfRandomNumbers = (arr_size=1) => {
    let res = [];
    for(let i=0;i<arr_size;i++){
        res.push(Math.round(Math.random()*100));
    }
    return res;
}

const firstName = [
    'Oleh', 'John', 'Ivan', 'Met', 'Tom'
]

const lastName = [
    'Ben', 'White', 'Black', 'Cooper', 'Harries'
]

const getRandomArrayElement = arr => {
    return arr[Math.floor(Math.random()*arr.length)]
}

const getRandomPerson = () => ({
    fullName:`${getRandomArrayElement(firstName)} ${getRandomArrayElement(lastName)}`,
    salary:Math.round(Math.random()*1000)
})

const getArrayOfRandomObjects = count => [...new Array(count)].map(()=>getRandomPerson())



// getArrayOfRandomNumbers(10).sort((a,b)=>{return a-b});

// const x = getArrayOfRandomNumbers(100);
// for(let i=0;i<x.length;i++){
//     for(let j=0;j<x.length;j++){
//        if(x[i] < x[j]) {
//         let temp = x[j];
//         x[j] = x[i];
//         x[i] = temp;
//        }
//     }
// }
// cl(x);

// ((arr_size=1) => {
//     let res = [];
//     for(let i=0;i<arr_size;i++){
//         res.push(Math.round(Math.random()*100));
//     }
//     cl(res);
// })(10)

// ((t)=>{})('text')

// const arr = getArrayOfRandomNumbers(10)
// cl(arr)

// arr.forEach((item,i, ar)=>cl(`${item} : ${i} : ${ar[i]}`))
// const ret = arr.map((item,i, ar)=>`${item} : ${i} : ${ar[i]}`)

// function foo(a){
//     cl(a)
//     cl(arguments)
//     // arguments.map(el => cl(el))
// };

// const bar = (a,b, ...tttt) => {
//     cl(a)
//     cl(b)
//     cl(tttt)
//     tttt.map(el => cl(el))
// }

// foo(4)
// bar(4,10,3,67)

// const copyArray = arr => arr.map(el => el);

// const a = [1,2,3];
// // const b = copyArray(a);
// const b = [...a];



// function foo(arr){
//     arr[0] = 'TEST'
//     cl(arr)
// };
// foo(b)
// cl(a)

// cl(a.concat(b))
// cl([...a, ...b])

const stuff = getArrayOfRandomObjects(10);

// const filterRes = stuff.filter((el) => el.salary < 500)

let sum = 0;
for(let i = 0; i<stuff.length;i++){
    sum += stuff[i].salary;
}
cl(sum)

cl(stuff.reduce((acc,el)=>acc + el.salary,0));

avgSalaryStuff(stuff)