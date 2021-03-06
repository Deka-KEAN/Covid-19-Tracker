import React from "react";
import {Cards, Charts, CountryPicker} from "./components";
import styles from "./App.module.css"
import {fetchData} from "./API";

class App extends React.Component{
    state={
        data:{},
        country:""
    }
    async componentDidMount(){
        const data=await fetchData();
        //console.log(fetchedData);
        this.setState({data});
    }
    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
    }
    render(){
        const {data,country}=this.state;
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>                
            </div>
        );
    }
}
export default App;
