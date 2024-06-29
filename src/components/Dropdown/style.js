import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/style/scaling";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fae6f5',
        padding: 10,
        marginHorizontal:horizontalScale(13)
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width:250,
        backgroundColor:'#fae6f5'
        // marginRight:105
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
        color:'#000'
      },
      selectedTextStyle: {
        fontSize: 20,
        color:'#000',
        fontWeight:'500'
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default style;