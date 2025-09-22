function castValue(value) {
    if (typeof value === "string") {
        var stringValue = value;
        console.log(stringValue);
    }
    else if (typeof value === "number") {
        var numberValue = value;
        console.log(numberValue);
    }
    else {
        console.error("Sorry, this is an unsupported type.");
    }
}
castValue("Word");
castValue(525);
castValue(false);
