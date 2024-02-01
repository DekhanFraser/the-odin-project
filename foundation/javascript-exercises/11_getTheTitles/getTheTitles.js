const getTheTitles = function(arrBooks) {
    const arrTitles = [];
    for (let index = 0; index < arrBooks.length; index++) {
        arrTitles.push(arrBooks[index].title);
    }
    return arrTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
