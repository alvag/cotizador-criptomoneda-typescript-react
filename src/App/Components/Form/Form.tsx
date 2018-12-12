import React, { Component, FormEvent } from 'react';

import { ICryptoCurrency } from '../../Interfaces';
import './Form.css';

interface IProps {
    cryptoCurrencies: ICryptoCurrency[];
}

class Form extends Component<IProps> {

    public currency = React.createRef<HTMLSelectElement>();
    public cryptoCurrency = React.createRef<HTMLSelectElement>();

    public render() {
        return (
            <form onSubmit={this.cotizar}>
                <div className="form-group">
                    <label htmlFor="currency">Moneda:</label>
                    <select ref={this.currency} id="currency" className="form-control">
                        <option value="" disabled={true} defaultValue="true">Elige tu moneda</option>
                        <option value="USD">Dólar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBO">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="cryptoCurrency">Criptomoneda</label>
                    <select ref={this.cryptoCurrency} id="cryptoCurrency" className="form-control">
                        <option value="" disabled={true} defaultValue="true">Elige tu criptomoneda</option>
                        {this.props.cryptoCurrencies.map((cryptoCurrency, index) => (
                            <option key={index} value={cryptoCurrency.id}>{cryptoCurrency.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar" />
                </div>
            </form>
        );
    }

    private cotizar = (e: FormEvent) => {
        e.preventDefault();
        const currency = this.currency.current!.value;
        const cryptoCurrency = this.cryptoCurrency.current!.value;

        console.log(currency);
        console.log(cryptoCurrency);
    }
}

export default Form;
