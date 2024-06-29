import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/style/scaling';
const style = StyleSheet.create({
  mainContainer:{
    // justifyContent:'center'
    // alignItems:'center'
  },
  container:{
    alignItems:'center',
    borderWidth:1,
    marginHorizontal:10,
    borderRadius:10,
    paddingVertical:15,
    backgroundColor:'#fae6f5',
    // borderColor:'#f0ebef'
  },
  textHeader:{
    fontSize:scaleFontSize(35),
    fontWeight:'bold',
    color:'#f542cb'
  },
  text: {
    color: 'black',
  },
  background: {
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
  },
  gap: {
    marginVertical:30
  },
  text:{
    marginHorizontal:horizontalScale(23),
    fontSize:scaleFontSize(24),
    fontWeight:'bold',
    color:'#42e0f5'
  },
  btn:{
    // marginLeft:horizontalScale(50),
    width:150,
    height:55,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#5CF9CA'
  },
  btnText:{
    fontSize:scaleFontSize(27),
    fontWeight:'bold',
  },
  showText:{
    marginVertical:verticalScale(10),
    fontSize:20,
    fontWeight:'bold',
    color:'#ce42f5'
  }
});
export default style;
