
export const generateRandomString = (length) => {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const generateRandomData = (length) => {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push({
            imdbID: Math.floor(Math.random() * 1000),
            photo: 'asdas',
            Title: generateRandomString(15),
            Year: Math.floor(Math.random() * 2000 + 1),
        });
    }
    return result;
};