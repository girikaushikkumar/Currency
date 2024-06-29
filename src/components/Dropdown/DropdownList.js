import { Text, View } from 'react-native';
import React, { useState } from 'react';
import style from './style';
import { Dropdown } from 'react-native-element-dropdown';
const countryList = [
  { label: 'AED', value: '1' },
  { label: 'AFN', value: '2' },
  { label: 'XCD', value: '3' },
  { label: 'ALL', value: '4' },
  { label: 'AMD', value: '5' },
  { label: 'ANG', value: '6' },
  { label: 'AOA', value: '7' },
  { label: 'AQD', value: '8' },
  { label: 'ARS', value: '9' },
  { label: 'AUD', value: '10' },
  { label: 'AZN', value: '11' },
  { label: 'BAM', value: '12' },
  { label: 'BBD', value: '13' },
  { label: 'BDT', value: '14' },
  { label: 'XOF', value: '15' },
  { label: 'BGN', value: '16' },
  { label: 'BHD', value: '17' },
  { label: 'BIF', value: '18' },
  { label: 'BMD', value: '19' },
  { label: 'BND', value: '20' },
  { label: 'BOB', value: '21' },
  { label: 'BRL', value: '22' },
  { label: 'BSD', value: '23' },
  { label: 'NOK', value: '24' },
  { label: 'BWP', value: '25' },
  { label: 'BYR', value: '26' },
  { label: 'BZD', value: '27' },
  { label: 'CAD', value: '28' },
  { label: 'CDF', value: '29' },
  { label: 'XAF', value: '30' },
  { label: 'CHF', value: '31' },
  { label: 'CLP', value: '32' },
  { label: 'CNY', value: '33' },
  { label: 'COP', value: '34' },
  { label: 'CRC', value: '35' },
  { label: 'CUP', value: '36' },
  { label: 'CVE', value: '37' },
  { label: 'CYP', value: '38' },
  { label: 'CZK', value: '39' },
  { label: 'DJF', value: '40' },
  { label: 'DKK', value: '41' },
  { label: 'DOP', value: '42' },
  { label: 'DZD', value: '43' },
  { label: 'ECS', value: '44' },
  { label: 'EEK', value: '45' },
  { label: 'EGP', value: '46' },
  { label: 'ETB', value: '47' },
  { label: 'EUR', value: '48' },
  { label: 'FJD', value: '49' },
  { label: 'FKP', value: '50' },
  { label: 'GBP', value: '51' },
  { label: 'GEL', value: '52' },
  { label: 'GGP', value: '53' },
  { label: 'GHS', value: '54' },
  { label: 'GIP', value: '55' },
  { label: 'GMD', value: '56' },
  { label: 'GNF', value: '57' },
  { label: 'GTQ', value: '58' },
  { label: 'GYD', value: '59' },
  { label: 'HKD', value: '60' },
  { label: 'HNL', value: '61' },
  { label: 'HRK', value: '62' },
  { label: 'HTG', value: '63' },
  { label: 'HUF', value: '64' },
  { label: 'IDR', value: '65' },
  { label: 'ILS', value: '66' },
  { label: 'INR', value: '67' },
  { label: 'IQD', value: '68' },
  { label: 'IRR', value: '69' },
  { label: 'ISK', value: '70' },
  { label: 'JMD', value: '71' },
  { label: 'JOD', value: '72' },
  { label: 'JPY', value: '73' },
  { label: 'KES', value: '74' },
  { label: 'KGS', value: '75' },
  { label: 'KHR', value: '76' },
  { label: 'KMF', value: '77' },
  { label: 'KPW', value: '78' },
  { label: 'KRW', value: '79' },
  { label: 'KWD', value: '80' },
  { label: 'KYD', value: '81' },
  { label: 'KZT', value: '82' },
  { label: 'LAK', value: '83' },
  { label: 'LBP', value: '84' },
  { label: 'LKR', value: '85' },
  { label: 'LRD', value: '86' },
  { label: 'LSL', value: '87' },
  { label: 'LTL', value: '88' },
  { label: 'LVL', value: '89' },
  { label: 'LYD', value: '90' },
  { label: 'MAD', value: '91' },
  { label: 'MDL', value: '92' },
  { label: 'MGA', value: '93' },
  { label: 'MKD', value: '94' },
  { label: 'MMK', value: '95' },
  { label: 'MNT', value: '96' },
  { label: 'MOP', value: '97' },
  { label: 'MRO', value: '98' },
  { label: 'MTL', value: '99' },
  { label: 'MUR', value: '100' },
  { label: 'MVR', value: '101' },
  { label: 'MWK', value: '102' },
  { label: 'MXN', value: '103' },
  { label: 'MYR', value: '104' },
  { label: 'MZN', value: '105' },
  { label: 'NAD', value: '106' },
  { label: 'XPF', value: '107' },
  { label: 'NGN', value: '108' },
  { label: 'NIO', value: '109' },
  { label: 'NPR', value: '110' },
  { label: 'NZD', value: '111' },
  { label: 'OMR', value: '112' },
  { label: 'PAB', value: '113' },
  { label: 'PEN', value: '114' },
  { label: 'PGK', value: '115' },
  { label: 'PHP', value: '116' },
  { label: 'PKR', value: '117' },
  { label: 'PLN', value: '118' },
  { label: 'PYG', value: '119' },
  { label: 'QAR', value: '120' },
  { label: 'RON', value: '121' },
  { label: 'RSD', value: '122' },
  { label: 'RUB', value: '123' },
  { label: 'RWF', value: '124' },
  { label: 'SAR', value: '125' },
  { label: 'SBD', value: '126' },
  { label: 'SCR', value: '127' },
  { label: 'SDG', value: '128' },
  { label: 'SEK', value: '129' },
  { label: 'SGD', value: '130' },
  { label: 'SKK', value: '131' },
  { label: 'SLL', value: '132' },
  { label: 'SOS', value: '133' },
  { label: 'SRD', value: '134' },
  { label: 'STD', value: '135' },
  { label: 'SVC', value: '136' },
  { label: 'SYP', value: '137' },
  { label: 'SZL', value: '138' },
  { label: 'THB', value: '139' },
  { label: 'TJS', value: '140' },
  { label: 'TMT', value: '141' },
  { label: 'TND', value: '142' },
  { label: 'TOP', value: '143' },
  { label: 'TRY', value: '144' },
  { label: 'TTD', value: '145' },
  { label: 'TWD', value: '146' },
  { label: 'TZS', value: '147' },
  { label: 'UAH', value: '148' },
  { label: 'UGX', value: '149' },
  { label: 'USD', value: '150' },
  { label: 'UYU', value: '151' },
  { label: 'UZS', value: '152' },
  { label: 'VEF', value: '153' },
  { label: 'VND', value: '154' },
  { label: 'VUV', value: '155' },
  { label: 'YER', value: '156' },
  { label: 'ZAR', value: '157' },
  { label: 'ZMK', value: '158' },
  { label: 'ZWD', value: '159' }
];


const DropdownList = ({placeholderName,value,setValue}) => {
    const [isFocus, setIsFocus] = useState(false);

    
    return (
      <View style={style.container}>
      
        <Dropdown
          style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={style.placeholderStyle}
          selectedTextStyle={style.selectedTextStyle}
          inputSearchStyle={style.inputSearchStyle}
          data={countryList}
          search
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder={!isFocus ? placeholderName : '...' }
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.label);
            setIsFocus(false);
          }}
          
        />
      </View>
    );
};

export default DropdownList;

