import axios from "axios";

export const getConversionRates = async() => {
    const response = await axios.get('https://v6.exchangerate-api.com/v6/cd69df0b1f51760fdc64a530/latest/USD');
    return response;
}