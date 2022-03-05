

const helloWorld = () => {
  const name = 'me';
  return `Hello ${name}`; //this is a template!!
};

const powers =
  [1,2,3,4,5].map((number, index) => Math.pow(number, index));


const add = (n1, n2) => n1 + n2;



log(hello());
log(powers);
log(add(100,100));

