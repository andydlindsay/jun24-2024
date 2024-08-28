"use strict";
const writer = {
    penName: 'agatha christie',
    writeBook: (title) => { return true; }
};
const hof = (cb) => { };
hof((num) => { return ['a', 'b']; });
