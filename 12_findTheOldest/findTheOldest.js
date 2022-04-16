const findTheOldest = function(obj) {
    const oldest = obj.sort(function(a, b) {
        if(!a.yearOfDeath){
            a.yearOfDeath = 2022 // Technically current age
        }
        else if(!b.yearOfDeath){
            b.yearOfDeath = 2022 // Technically current age
        }
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        if(lastGuy > nextGuy){
          return -1;
        }
        else{
          return 1;
        }
      })

    //   console.log(oldest)
     return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
