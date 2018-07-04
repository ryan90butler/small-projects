let data = [
  {id:`animal`, parent:null},
  {id:`mammals`, parent:`animal`},
  {id:`cats`, parent:`mammals`},
  {id:`dogs`, parent:`mammals`},
  {id:`German Sheppard`, parent:`dogs`},
  {id:`Pitbull`, parent:`dogs`},
  {id:`Pug`, parent:`dogs`},
  {id:`British Shorthair`, parent:`cats`},
  {id:`Siamese`, parent:`cats`},
  {id:`Russian Blue`, parent:`cats`},
];

const makeCategories = (data, parent) =>{
  let categories = {};
  data
    .filter(c => c.parent === parent)
    .forEach((c) => {
        const prop = c.id.replace(/ /g,"")
        categories[prop] = makeCategories(data, c.id)
      })

  return categories
};


console.log(
  JSON.stringify(makeCategories(data,null), null, 2)
)

///Write a function that takes in data and transforms it into catergories.

// let categories = {
//   animal:{
//     mammals:{
//       dogs:{
//         GermanSheppard: {},
//         Pitbull: {},
//         Pug: {},
//       },
//       cats:{
//         BritishShorthair:{},
//         Siamese: {},
//         RussianBlue:{},
//       }
//     }
//   }
// }

// This function counts down from num to 0;
// const recursionTest = (num)=>{
//   console.log(num);
//   if(num > 0){
//     num--;
//     recursionTest(num)
//   }else{
//     return
//   }
// }

// recursionTest(10)