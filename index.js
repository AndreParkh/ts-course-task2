"use strict";
const totalPrice = (props) => {
    let price = props.price * (100 - props.discount) / 100;
    if (props.isInstallment && props.months) {
        price = price / props.months;
    }
    return price;
};
console.log(totalPrice({ price: 100000, discount: 25 })); //, isInstallment: true, months: 12 }))
// 6250
