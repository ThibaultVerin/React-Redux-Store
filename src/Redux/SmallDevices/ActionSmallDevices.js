import { BUY_PHONE, BUY_TABLET } from './type';

export const buyPhone = (totalAmountPhone) => {
    return {
        type: BUY_PHONE,
        payload: totalAmountPhone
    }
}

export const buyTablet = (totalAmountTablet) => {
    return {
        type: BUY_TABLET,
        payload: totalAmountTablet
    }
}