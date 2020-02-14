import React,{Component} from 'react';
import './Layout.css';
import Header from './Header/Header'
import MainPage from './MainPage/MainPage';


class Layout extends Component { 
 
  render(){

    

      return(
          <div className="Layout">
                <Header></Header>
                <MainPage currencies={this.props.currencies}></MainPage>
          </div>
      )
  }
 
  } 
export default Layout;