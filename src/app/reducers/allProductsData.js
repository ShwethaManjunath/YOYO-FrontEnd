
export default function AllProductsReducer(state = [], action) {
    switch (action.type) {
        case 'SUCCESS':
            state = action.payload
            return state;

        default:
            return state;
    }
}