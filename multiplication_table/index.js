for (let i = 1; i < 10; i++) {
    let items = [];
    for (let j = 1; j <= i; j++) {
        items.push(i + '*' + j + '=' + (i*j));
    }
    console.log(items.join(' '));
}

