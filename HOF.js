const user=[
    {firstName:"Akshay",lastName:"Kumar",age:45},
    {firstName:"Sumit",lastName:"Kumar",age:25},
    {firstName:"Deepak",lastName:"Kumar",age:26},
    {firstName:"Elon",lastName:"musk",age:50}
];

// Map
const out=user.map((x)=>x.firstName+" "+x.lastName);
console.log(out);

const arr=[4,5,6,3];
 const res=arr.map((x)=>x.toString(2));
 console.log(res);

 // filter
 const res1=arr.filter((y)=>y<4);
 console.log(res1);

 //reduce

 