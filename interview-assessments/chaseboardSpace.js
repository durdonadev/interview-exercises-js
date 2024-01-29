var chaseboardSpace = function (numOfGrains) {
    let spaces = 1;
    let placedGrains = 1;
    while (placedGrains < numOfGrains) {
        placedGrains *= 2;
        spaces++;
    }
    return spaces;
};

console.log(chaseboardSpace(64));
