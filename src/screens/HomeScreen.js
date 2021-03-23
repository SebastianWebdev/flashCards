import React from "react"
import getGlobalStyle from "../globalStyles/globalStyles"
import {colors,getColors} from "../constants/constants"
import getText from "../languages/language"
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
  } from 'react-native';
  const HomeScreen = ({})=>{

return (
	<ScrollView style={styles.mainWrap}>
		<Text style={getGlobalStyle().text}>
			{getText("HomeScreen mainText")}
		</Text>
	</ScrollView>
	)
  }
  const texts = getText()
  const styles = StyleSheet.create({
	  mainWrap:{
		  backgroundColor:getColors().backgroundDark
	  }
  })
  export default HomeScreen