// basic react component starting template
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TransactionHistory extends Component {
    render() {
        return (
            <div>{this.transactionHistory()}</div>
        )
    }
    transactionHistory() {
        let transactions = [
            {
                'transactionId': '23464657',
                'name': 'book-my-show-voucher',
                'category': 'Movie',
                'amount': '500'
            },
            {

                'transactionId': '2346784657',
                'name': 'food-panda-voucher',
                'category': 'Food',
                'amount': '300'
            }
        ]
        
            return <div>
                <h2 style={{color:'#9de0ad'}}>Transaction History</h2>
                <Table style={{width:'70%',marginLeft:'18%'}}>
                    <TableHead style={{backgroundColor:'#E5FCC2'}}>
                        <TableRow>
                            <TableCell>TransactionId</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell >Category (g)</TableCell>
                            <TableCell >Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map(transaction => {
                            return (
                                <TableRow >
                                    
                                    <TableCell >{transaction.transactionId}</TableCell>
                                    <TableCell >{transaction.name}</TableCell>
                                    <TableCell >{transaction.category}</TableCell>
                                    <TableCell >{transaction.amount}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        
    }
}

export default TransactionHistory;