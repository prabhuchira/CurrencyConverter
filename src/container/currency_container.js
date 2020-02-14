import React,{Component} from 'react';
import Layout from '../components/Layout/Layout';
import Axios from 'axios';


class CurrencyContainer extends Component{

    state={
        currencies:[]
    }
   async componentDidMount(){
       let allRates = [];
       let needRates = [];
       let finalarray=[];

        needRates = await Axios.get('https://api.exchangeratesapi.io/latest')

        needRates = Object.entries(needRates.data.rates)

        allRates = await Axios.get('https://free.currconv.com/api/v7/currencies?apiKey=059886669d4814ce9282')

        allRates  = Object.entries(allRates.data.results)

        needRates.forEach(res=>{
           allRates.forEach(rate=>{
                if(rate[0]==res[0]){
                    finalarray.push({rate,...res})
                
                }
           })
        })


       this.setState({
           currencies:finalarray
       })
      
        
    }

    render(){

      


        return(
            <div>
                <Layout currencies={this.state.currencies}></Layout>
            </div>
        )
    }
}

export default CurrencyContainer;