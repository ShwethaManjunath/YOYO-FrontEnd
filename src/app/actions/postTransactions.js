import axios from 'axios';

export function postTransactions(obj) {
    return (dispatch) => {
        axios.post('https://rdja9fg5s0.execute-api.us-east-1.amazonaws.com/Prod/postTransactions', obj)
            .then((response) => {
                console.log("res",response);
                dispatch({
                    type: 'SUCCESS',
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log('err:' + error);
            });

    }
}