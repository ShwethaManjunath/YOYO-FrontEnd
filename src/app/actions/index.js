export const FETCH_DATA = 'fetch_data';
export const FETCH_PRODUCT = 'fetch_product';
export const ADD_COMMENT = 'add_comment';

// mock product object
let item = {
    id: 'a123',
    title: 'iPhone XS',
    description: 'There is absolutely nothing new in the new iphone.',
    points: 1100,
    avgRating: 4,
    comments: [
        {
            id: '23',
            userName: 'UserOne',
            userComment: 'Not as good as Samsung',
            rating: 3
        },
        {
            id: '13',
            userName: 'UserOne',
            userComment: 'Not as good as Samsung',
            rating: 3
        },
        {
            id: '254',
            userName: 'UserOne',
            userComment: 'Not as good as Samsung',
            rating: 3
        },
        {
            id: '231',
            userName: 'UserOne',
            userComment: 'Not as good as Samsung',
            rating: 3
        }
    ]
}

// default function to display redux action format
export function defaultFunction() {
    let testVar = 'Hello';

    // action object format being return to a reducer
    return {
        type: FETCH_DATA,
        payload: testVar
    };
}

// fetch details of a product
export function fetchProduct() {

    return {
        type: FETCH_PRODUCT,
        payload: item
    };
}

export function addNewComment(comment) {

    return {
        type: ADD_COMMENT,
        payload: comment
    };
}