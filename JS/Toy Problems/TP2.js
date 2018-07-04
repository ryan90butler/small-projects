const str = 'hi my name is ryan. i am a boy and this is my project';

function capitalize (data){
  return data.split(' ').map((e) => e[0].toUpperCase() + e.slice(1) ).join(' ');
}
const result = capitalize(str);
console.log(result);


const sent = 'this is my name. my name is Ryan. here i am'
function grammarStuff(data){
  return data.split('.').map((e) =>e[0].toUpperCase()+ e.slice(1)).join(' ');
 return const result = grammarStuff(sent);
}
console.log(result);