function suma(a,b){
  console.log (`La suma de ${a} mas ${b} es ${a+b}`)
}
suma(10,84)

function resta(a,b){
  console.log (`La resta de ${a} menos ${b} es ${a-b}`)
}
resta(15,5)

const multiplicacion=(a,b)=> console.log (`La multiplicacion de ${a} por ${b} es ${a*b}`)

multiplicacion(10,5)

const division=(a,b)=> console.log (`La division de ${a} entre ${b} es ${a/b}`)

multiplicacion(100,25)

const resta1=(a,b)=> console.log(`La resta de ${a} menos ${b} es ${a-b}`)
resta1(40,3)
function multiplicacion1 (a,b){
  console.log (`La multiplicacion de ${a} por ${b} es ${a*b}`)
}
multiplicacion1(5,7)

function division1(a,b){
  console.log (`La division de ${a} entre ${b} es ${a/b}`)
}
division1(50,2);


const getGreater = (a,b)=>{
  const getNum=a>b? a:b;
  console.log(`El numero mayor es ${getNum}`);
  return getNum;
}

const getGreater1 = (a,b)=>{
  const getNum=Math.max(a,b);
  console.log(`El numero mayor es ${getNum}`);
  return getNum;
}

getGreater1(2000,2001)
git 
const minNumber =(a,b)=>{
  const getNum=Math.min(a,b);
  console.log(`The The smallest number between ${a}  and ${b} is ${getNum}`);
  return getNum;
}

const getSquare= (n)=>{
  const q= Math.sqrt(n);
  /*if(typeof n==="string"){
    if(parseFloat(n)==="NaN")
    console.error("getSquare solo recibe un int");
  }*/
  console.log(`la raiz cuadrada de ${n} es ${q}`)
  return q;
}

getSquare(144);
getSquare(133);


