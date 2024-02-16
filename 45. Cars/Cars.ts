//Written by: Taha Ahmed
// Roll No. : 00298983

function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return carInfo;
}

const car = storeCarInfo('Toyota', 'Camry', {color: 'blue'}, {features: ['navigation', 'sunroof']});
console.log(car);
