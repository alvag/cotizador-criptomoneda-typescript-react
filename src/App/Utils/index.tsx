import { Constants } from '../Constants';

export default class Utils {
    public static getAPIUrl = (params?: any): string => {
        let url = `${Constants.COINMARKET_API}/ticker`;

        if (params) {
            url += `/${params.cryptoCurrency}/?convert=${params.currency}`;
        }
        return url;
    }

    public static objectToArray = (object: any): any[] => {
        const arr = Object.keys(object).map((key) => {
            return object[key];
        });

        return arr;
    }
}
