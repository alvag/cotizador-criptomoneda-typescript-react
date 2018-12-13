import React, { Component } from 'react';

interface IProps {
    cotizacion: any;
    currency: string;
}

class Result extends Component<IProps> {

    showResult = () => {
        const cotizacion = this.props.cotizacion;
        const currency = this.props.currency;

        if (cotizacion.name) {

            const { price, percent_change_1h, percent_change_24h } = cotizacion.quotes[currency];

            return (
                <div className="bg-success py-4">
                    <div className="resumen text-light text-center">
                        <h2 className="mb-4">Resumen</h2>
                        <p><span className="font-weight-bold">El precio del {cotizacion.name} en {currency} es de: {price.toFixed(2)}</span></p>
                        <p><span className="font-weight-bold">Porcentaje en última Hora: {percent_change_1h}%</span></p>
                        <p><span className="font-weight-bold">Porcentaje últimas 24h: {percent_change_24h}%</span></p>
                    </div>
                </div>
            );
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.showResult()}
            </React.Fragment>
        );
    }
}

export default Result;
