import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import * as classes from './payment.scss';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { postTransactions } from '../../actions/postTransactions';
class Payment extends Component{
    constructor(){
        super();
        this.state={
            dc_number:'' ,
            gift_type:'sjkj',
            availablePoints:"200",
            requiredPoints:"400",
            addMoneyFlag:false,
            addedAmount: '',
            addressSectionFlag: false,
            product_id:'12345',
            sender_id:'100',
            receiver_name:'',
            receiver_address:'',
            receiver_email:'',
            receiver_contact:''
        }
    }

    handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value});
    }

    handleAddMoney=()=>{
        this.setState({addMoneyFlag:true})
    }
    handleCancel=()=>{
        this.setState({addMoneyFlag:false})
    }

    handleApply=()=>{
        let availablePoints= parseInt(this.state.availablePoints)+parseInt(this.state.addedAmount);
        let obj ={
            user_id:this.state.sender_id,
            points:parseInt(this.state.availablePoints)
        }

        //Patch Call Update AvailablePoints 
        if(availablePoints>=parseInt(this.state.requiredPoints)){
            this.setState({addressSectionFlag:true})
        }
        else{
            this.setState({errorFlag:true})
        }
        this.setState({availablePoints, addedAmount:''});
    }
    handleSubmit=()=>{
        let obj = {
            id: 'id' + (new Date()).getTime(),
            product_id:this.state.product_id,
            sender_id:this.state.sender_id,
            gift_type:this.state.gift_type,
            points_used:this.state.requiredPoints,
            receiver_name:this.state.receiver_name,
            receiver_address:this.state.receiver_address,
            receiver_email:this.state.receiver_email,
            receiver_contact:this.state.receiver_contact
        }

        //Post Call transaction
        this.props.postTransactions(obj);

        console.log(obj);
        this.setState({})
    }


    render(){
        let ProductForm='';
        if(this.state.gift_type==='product'){
            ProductForm=<div>
            <label for="input_name" className={classes.dc_number_label }>Receiver Name</label>
            <input id="input_name" name="receiver_name" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            <label for="receiver_email" className={classes.dc_number_label }>Receiver Email</label>
            <input id="receiver_email" name="receiver_email" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            <label for="receiver_phone" className={classes.dc_number_label }>Receiver Phone</label>
            <input id="receiver_phone" name="receiver_contact" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            <label for="receiver_address" className={classes.dc_number_label }>Receiver Address</label>
            <input id="receiver_address" name="receiver_address" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            <Button variant="contained" className={classes.add_money_button} color="primary"  name="shipToThisAddress" onClick={this.handleSubmit}> 
                Deliver to this address
            </Button>
        </div>
        }
        else{
            ProductForm=<div>
            <label for="input_name" className={classes.dc_number_label } >Receiver Name</label>
            <input id="input_name" name="receiver_name" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            <label for="receiver_email" className={classes.dc_number_label }>Receiver Email</label>
            <input id="receiver_email" name="receiver_email" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            <label for="receiver_phone" className={classes.dc_number_label }>Receiver Phone</label>
            <input id="receiver_phone" name="receiver_contact" className={classes.dc_number_input} onChange={this.handleInput} autocomplete="off"/>
            {/* <input type="button" className={classes.submit_button_with_name} name="shipToThisAddress" value="Send through Email" onClick={this.handleSubmit}   /> */}
            <Button variant="contained" className={classes.submit_button_with_name} color="primary"  name="shipToThisAddress" onClick={this.handleSubmit}> 
                    Send through Email
            </Button>
         </div>
        }


        return(
            <div>
                <Row>
                    <Col xsOffset={1} xs={11}>
                       <p className={classes.pointsAvailableTitle}> Available Points: {this.state.availablePoints} </p>
                    </Col>
                    <Col xsOffset={1} xs={11}>
                    <p className={classes.pointsRequiredTitle}> Required Points: {this.state.requiredPoints}</p>
                    </Col>
                    <Col xsOffset={1} xs={11} sm={11} md={6} lg={6}>
                    {!this.state.addMoneyFlag ? 
                    parseInt(this.state.availablePoints)<=parseInt(this.state.requiredPoints ) ? 
                    <div>
                        
                        <p>
                             <Button variant="contained" className={classes.add_money_button} color="primary"  name="addedAmount" onClick={this.handleAddMoney}> 
                                Add money
                            </Button>
                            </p>

                        <p >You are short of <b>{parseInt(this.state.requiredPoints)-parseInt(this.state.availablePoints)} </b> points</p>
                    </div>
                    :
                    <Col xsOffset={1} lgOffset={0} xs={11} sm={11} md={6} lg={11}>
                    <div className={classes.directProductForm}>
                        {ProductForm}
                    </div>
                    </Col> 
                
            :""}
                </Col>
                </Row>

         {/* ADD MONEY SECTION        */}
        {this.state.addMoneyFlag ? 
        <div><Row>
                    <Col xsOffset={1} xs={11}>
                        <h1 className={classes.title}>Select a payment option</h1>
                    </Col>
                    <Col xsOffset={1} xs={11}>
                        <h3 className={classes.subtitle}>YoYo Gifts accepts all major credit cards and debit card</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xsOffset={1} xs={11} sm={12} md={6} lg={6}>
                        <Row>
                            <Col  xs={12} sm={8} md={6} lg={8}>
                                <p className={classes.formGroup}>
                                    <label for="dc_number" className={classes.dc_number_label}>Add Amount</label> 
                                    <input id="dc_number" className={classes.dc_number_input } type="text" name="addedAmount" value={this.state.addedAmount} onChange={this.handleInput} autocomplete="off" placeholder="Amount"/> 
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col  xs={12} sm={8} md={6} lg={8}>
                                <p className={classes.formGroup}>
                                    <label for="dc_number" className={classes.dc_number_label}>Credit/Debit Card Number</label> 
                                    <input id="dc_number" className={classes.dc_number_input } type="text" name="dc_number"  onChange={this.handleInput} maxlength="20" autocomplete="off"/> 
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col  xs={12} sm={8} md={6} lg={8}>
                                <p className={classes.formGroup}>
                                    <label for="expiration_year" className={classes.dc_number_label }>Expiration Year</label> 
                                    <input id="expiration_year" className={classes.dc_number_input} type="text"  placeholder="mm/yy"  autocomplete="off"/> 
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col  xs={12} sm={8} md={6} lg={8}>
                                <p className={classes.formGroup}>
                                    <label for="cvv_card" className={classes.dc_number_label }>CVV</label> 
                                    <input id="cvv_card" className={`${classes.dc_number_input} ${this.state.flag ? classes.is_error : ""}`} type="password"  placeholder="cvv" maxlength="3"  autocomplete="off"/> 
                                </p>
                            </Col>
                            <Col xs={12} sm={8} md={6} lg={8}>
                            <Button variant="contained" className={classes.submit_button_with_name}  name="shipToThisAddress" onClick={this.handleCancel}> 
                                Cancel
                            </Button>

                            <Button variant="contained" className={classes.submit_button_with_name} color="primary" name="shipToThisAddress" onClick={this.handleApply}> 
                                Apply
                            </Button>

                            </Col>
                            
                        </Row>
                    </Col>
                    {this.state.addressSectionFlag? 
                    <Col xsOffset={1} lgOffset={0} xs={11} sm={12} md={6} lg={3}>
                            {ProductForm}
                            
                        </Col> 
                        :
                        this.state.errorFlag ?
                        <Col xsOffset={1} lgOffset={0} xs={11} sm={12} md={6} lg={3}>
                            <p style={{color:"red",float:"left",fontSize:"20px"}}>You are short of <b>{parseInt(this.state.requiredPoints)-parseInt(this.state.availablePoints)} </b> points</p>
                            </Col>
                        :""}
                        </Row></div> :""}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allProducts: state.allProductsReducer
})
export default connect(mapStateToProps, {postTransactions}) (Payment);