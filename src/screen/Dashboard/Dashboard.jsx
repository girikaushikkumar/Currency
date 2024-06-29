import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {getConversionRates} from '../../api/apis';
import InputText from '../../components/TextInput/InputText';
import DropdownList from '../../components/Dropdown/DropdownList';
import { horizontalScale } from '../../assets/style/scaling';

const Dashboard = () => {
  const [fcurrency, setfCurrency] = useState('');
  const [Tcurrency, settCurrency] = useState('');
  const [amount, setAmount] = useState();
  const [conversionRates, setConversionRates] = useState({});
  const [showConversion, setShowConversion] = useState(
    '1 USD is equal to 83.42 INR',
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await getConversionRates();
      setConversionRates(response.data.conversion_rates);
      // console.log(response.data.conversion_rates);
    };
    fetchData();
  }, []);

  function convertCurrency(amount, fromCurrency, toCurrency, rates) {
    if (!rates) return 0;
    const amountInUSD = amount / rates[fromCurrency];
    const convertedAmount = amountInUSD * rates[toCurrency];
    return convertedAmount;
  }

  const handleSubmit = async () => {
    if (fcurrency && Tcurrency && amount) {
      const convertedAmount = convertCurrency(
        amount,
        fcurrency,
        Tcurrency,
        conversionRates,
      );
      setShowConversion(
        `${amount} ${fcurrency} is equal to ${convertedAmount.toFixed(
          2,
        )} ${Tcurrency}`,
      );
      console.log(
        `${amount} ${fcurrency} is equal to ${convertedAmount.toFixed(
          2,
        )} ${Tcurrency}`,
      );
    } else {
      Alert.alert('Please select both currencies and enter an amount.');
    }
  };

  return (
    <SafeAreaView style={[style.background, style.flex,style.mainContainer]}>
     <View style={{alignItems:'center',margin:horizontalScale(20)}}>
     <Text style={style.textHeader}>Currency Converter</Text>

     </View>
      <View style={style.container}>
        <InputText value={amount} setValue={setAmount} />
        <Text style={style.text}>From</Text>
        <DropdownList
          placeholderName={'Select currency'}
          value={fcurrency}
          setValue={setfCurrency}
        />
        <Text style={style.text}>To</Text>
        <DropdownList
          placeholderName={'Select currency'}
          value={Tcurrency}
          setValue={settCurrency}
        />
        <Text style={style.showText}>{showConversion}</Text>
        <TouchableOpacity onPress={handleSubmit} style={style.btn}>
          <Text style={style.btnText}>CONVERT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
