export const generateColorHex: () => string = () => {
    const hexString: string = '#';
    let randomNum: number;

    for (let index = 0; index < 6; index++) {
        randomNum = Math.floor(Math.random() * 15);

        if (randomNum < 10) {
            hexString.concat(randomNum.toString(10)); 
        } else {
            switch (randomNum) {
                case 10:
                    hexString.concat('A');
                    break;
                case 11:
                    hexString.concat('B');
                    break;
                case 12:
                    hexString.concat('C');
                    break;
                case 13:
                    hexString.concat('D');
                    break;
                case 14:
                    hexString.concat('E');
                    break;
                case 15:
                    hexString.concat('F');
                    break;
                default:
                    break;
            };
        };
    };

    if (hexString.length !== 7) {
        return '#FFFFFF';
    };

    return hexString;
};