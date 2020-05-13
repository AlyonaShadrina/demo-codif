const reduceVariableValueToArr = (varValues) => {
    const arrayValues = [];
    if (varValues.values) {
        const { values } = varValues;
        const isDropdown = varValues.type_id === 4;

        if (!isDropdown) {
            arrayValues.push(values);
            return arrayValues;
        }
        return values;
    }
    return arrayValues;
};

export default reduceVariableValueToArr;
