import { Constants } from '../Constants';

export default class Utils {
    public static getAPIUrl = (type: string): string => {
        return `${Constants.COINMARKET_API}${type}`;
    }

    public static objectToArray = (object: any): any[] => {
        const arr = Object.keys(object).map((key) => {
            return object[key];
        });

        return arr;
    }
}
