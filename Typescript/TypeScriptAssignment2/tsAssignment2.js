function convertShoeSize(sizeInUS) {
    var offset = 33;
    var sizeInEU = (sizeInUS + offset);
    return sizeInEU;
}
console.log(convertShoeSize(8));
