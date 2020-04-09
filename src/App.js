import React from "react";
import {Cards, Charts, CountryPicker} from './components';
/*
rather tahn using many import statements as in the coursera course export all the components from a folder using a index.js file in that folder
that uses the syntax
benefit of using index.js is that you dont need to specify it in the import statement address
import by default looks for index.js file inia folder if none specified

export {default as NAME-OF-COMPONENT} from 'FILE-LOCATION';

*/
import styles from './App.module.css';
import { FetchData } from './api';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }

    async componentDidMount(){
        const fetchedData = await FetchData();
        console.log(fetchedData);
        this.setState({
            data: fetchedData
        })
        console.log(this.state.data);
    }

    render(){
        return(

            //use {styles.CSSPROPERTY} whenever using .module.css files
            <div className={styles.container}>
                <Cards data={this.state.data}/>
                <Charts/>
                <CountryPicker/>
            </div>
        );
    }
}
export default App;