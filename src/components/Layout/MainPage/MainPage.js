import React, { Component } from 'react';
import './MainPage.css';

class MainPage extends Component{


constructor(props){
    super(props);
    this.myRef= React.createRef();
    this.myDropdown = React.createRef();
    this.state = {
        result:0
    }
    
}

   componentDidMount(){


    
       

        // {"rates":{"CAD":1.4363,"HKD":8.4214,"ISK":137.5,"PHP":54.806,"DKK":7.4713,"HUF":335.67,"CZK":24.828,"AUD":1.6151,"RON":4.7684,"SEK":10.5085,"IDR":14870.88,"INR":77.466,"BRL":4.6927,"RUB":68.9116,"HRK":7.449,"JPY":119.11,"THB":33.848,"CHF":1.0641,"SGD":1.509,"PLN":4.249,"BGN":1.9558,"TRY":6.5735,"CNY":7.5757,"NOK":10.0258,"NZD":1.6864,"ZAR":16.1139,"USD":1.0842,"MXN":20.1606,"ILS":3.7177,"GBP":0.83208,"KRW":1283.75,"MYR":4.4886},"base":"EUR","date":"2020-02-14"}

    }

    changeValue = ()=>{

        //Read dropdown value;
        //Read Input value;

        //set result to dropdown value * input value

        let inputFieldValue = this.myRef.current.value
     

        // console.log(dropdownValue)
        
         this.setState({
             result:inputFieldValue*this.myDropdown.current.value
        
         })

        // // this.setState({

        // // })

   

    }
    
  
    
    render(){
        if(this.props.currencies[0] !== undefined){

            console.log(this.props.currencies);
        }


 
       


        return(
            <div className="MainPage"> 
            
                <div className="inputFields">
                    
                    <input className="inputF" id="some" placeholder="Enter Amount" ref={this.myRef} onChange={this.changeValue} /> 

                    <select className="inputG" ref={this.myDropdown} onChange={this.changeValue} > 
                         {
                              this.props.currencies.map(res=>{
                                return <option  key={res[0]} value={res[1]} >{res.rate[1].currencyName}</option>
                             })
                         }
                    </select>

                    <div className="result">
                        Result: {this.state.result.toFixed(3)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
