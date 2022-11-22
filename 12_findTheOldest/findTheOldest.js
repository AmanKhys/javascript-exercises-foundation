const findTheOldest = function(people) {

  //storing ages of people in array with same index
  let ageArr = [], oldest;
  for(let i = 0; i<people.length;i++){
    let person = people[i];
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;
    if(!death) death = new Date().getFullYear();
    ageArr[i] = death - birth;
  } 
  //oldest array index number finding
  oldest = 0;
  for(let i = 0;i<people.length - 1;i++)
    if(ageArr[i]<ageArr[i+1]) oldest = i+1;
  
  
  let oldestPerson = people[oldest];
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
