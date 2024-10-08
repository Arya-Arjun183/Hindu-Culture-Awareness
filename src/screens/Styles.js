import { StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
var scale = (Math.pow(width/1728, 0.4)); // Base width for scaling
const styles = StyleSheet.create({
    background:{
      color:'#007FFF',
    },
    imageStyle: {
      resizeMode: "stretch",
      flex: 1, 
      alignSelf: 'center',
      height: 400*scale,
      width: 550*scale,
      borderWidth: 1,
      borderRadius: 0
    },
    textTitle: {
      resizeMode: "stretch",
      flex: 1, 
      fontSize: 50*scale,
      fontFamily: 'EB Garamond',
      color:'#007FFF',
      textAlign:'center',
      margin: 20*scale,
    },
    textInfo: {
      resizeMode: "stretch",
      flex: 1, 
      fontSize: 35*scale,
      fontFamily: 'cursive',
      color:'#007FFF',
      textAlign: 'center',
      margin: 20*scale
    },
    textButton:{
      resizeMode: "stretch",
      flex: 1, 
      fontSize: 40*scale,
      color: '#ff8c04',
      fontFamily:'EB Garamond',
      textAlign:'center',
      margin: 10*scale,
    },
    textStyle:{
      resizeMode: "stretch",
        flex: 1, 
        fontSize:50*scale,
        fontFamily: 'EB Garamond',
        textAlign: 'center',
        color: '#ff8c04',
    },
    textStyleHeader:{
      textAlign: 'center',
      fontFamily: 'EB Garamond',
    },
    mainText:{
        fontSize: 30*scale,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color:'#007FFF',
    },
    dateText:{
        resizeMode: "stretch",
        flex: 1, 
        fontSize: 30*scale,
        textAlign: 'center',
        fontStyle:'italic',
        fontFamily: 'Helvetica',
        color: '#71797E',
    },
    quote:{
        resizeMode: "stretch",
        flex: 1, 
        fontSize: 25*scale,
        fontStyle:'italic',
        fontFamily: 'Helvetica',
        color: '#007FFF',
        textAlign: 'center',
    },
  });


export default styles;