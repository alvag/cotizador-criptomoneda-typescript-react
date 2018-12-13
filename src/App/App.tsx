import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import { ICryptoCurrency } from './Interfaces';
import Utils from './Utils';
import Result from './Components/Result';

interface IAppState {
    cotizacion: any;
    cryptoCurrencies: ICryptoCurrency[];
    currency: string;
    loading: boolean;
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        cotizacion: {},
        cryptoCurrencies: [],
        currency: '',
        loading: false
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

                        {this.state.loading ? this.spinner() :
                            <Result
                                cotizacion={this.state.cotizacion}
                                currency={this.state.currency}
                            />
                        }

                    </div>
                </div>
            </div>
        );
    }

    spinner = () => {
        return (
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        );
    }

    private getValues = async (params: any) => {
        const url = Utils.getAPIUrl(params);

        this.setState({ loading: true });

        await axios.get(url).then((response) => {
            setTimeout(() => {
                this.setState({
                    cotizacion: response.data.data,
                    currency: params.currency,
                    loading: false
                });
            }, 2000);
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
