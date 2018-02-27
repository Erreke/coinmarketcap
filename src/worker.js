self.addEventListener('message', function (e) {
    const {title, coins, sortDirection} = e.data;

    const sortedCoins = coins.sort((coinA, coinB) => {
        let a = coinA[title],
            b = coinB[title];

        if(title === 'name' || title === 'symbol') {
            a = a.toUpperCase();
            b = b.toUpperCase();

        } else {
            a = parseFloat(a);
            a = isNaN(a) ? 0 : a;

            b = parseFloat(b);
            b = isNaN(b) ? 0 : b;

        }

        if (sortDirection === 'desc') {
            if (a < b) {
                return -1;

            } else if (a > b) {
                return 1;
            }

            return 0;

        } else {
            if (a > b) {
                return -1;

            } else if (a < b) {
                return 1;
            }

            return 0;
        }
    });

    self.postMessage({
        title: title,
        coins: sortedCoins,
        direction: sortDirection === 'desc' ? 'asc' : 'desc'
    });

}, false);