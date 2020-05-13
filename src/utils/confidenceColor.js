export const confidenceColor = (num = 0, element) => {
    let color = '0,171,132';
    if (num <= 90) {
        color = '141,119,187';
    }
    if (num <= 50) {
        color = '250,128,114';
    }
    let opacity = 0.17;
    if (element === 'text') {
        opacity = 1;
    }
    if (element === 'bgHover') {
        opacity = 0.3;
    }

    return `rgba(${color},${opacity})`;
};
