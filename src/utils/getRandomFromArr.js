function getRandomFromArr(arr) {
    if (arr.length < 1) {
        return;
    }

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

export default getRandomFromArr