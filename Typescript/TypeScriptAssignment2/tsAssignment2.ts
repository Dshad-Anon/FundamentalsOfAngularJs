function convertShoeSize(sizeInUS: number): number {
    const offset = 33;
    const sizeInEU = (sizeInUS + offset);
    return sizeInEU;
}

console.log(convertShoeSize(8));
