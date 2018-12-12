import React, { Component } from 'react';

import axios from 'axios';

import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import { ICryptoCurrency } from './Interfaces';
import Utils from './Utils';

interface IAppState {
    cotizacion: any;
    cryptoCurrencies: ICryptoCurrency[];
    currency: string;
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        cotizacion: {},
        cryptoCurrencies: [],
        currency: ''
    };

    public async componentDidMount() {
        this.getCryptoCurrency();
    }

    public render() {
        return (
            <div className="App">
                <Header />

                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light pb-4 contenido-principal">
                        <Form
                            cryptoCurrencies={this.state.cryptoCurrencies}
                            getValues={this.getValues}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private getValues = async (params: any) => {
        const url = Utils.getAPIUrl(params);

        await axios.get(url).then((response) => {
            this.setState({
                cotizacion: response.data.data,
                currency: params.currency
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    private getCryptoCurrency = async () => {
        const url = Utils.getAPIUrl();
        await axios.get(url).then((response) => {
            const cryptoCurrencies = Utils.objectToArray(response.data.data);
            this.setState({ cryptoCurrencies });
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default App;
