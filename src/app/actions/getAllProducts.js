import axios from 'axios';

export function getAllProducts(){
    return   (dispatch) => {
        axios({
            method : 'get',
            url : 'https://rdja9fg5s0.execute-api.us-east-1.amazonaws.com/Prod/products'
        })
        .then((response) => {
            dispatch({
                type : 'SUCCESS',
                payload : response.data
            })          
        })
        .catch(function (error) {
            console.log('err:'+error);
        });
  
    }
}