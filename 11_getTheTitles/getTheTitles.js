const getTheTitles = function(obj) {
    const titles = obj.map(prop => {
    return prop['title']
      });

    return titles
    }

// Do not edit below this line
module.exports = getTheTitles;
