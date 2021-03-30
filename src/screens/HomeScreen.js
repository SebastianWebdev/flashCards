import React from "react"
import getGlobalStyle from "../globalStyles/globalStyles"
import {colors, getColors, languagePrefixes} from "../constants/constants"
import createDictionary from "../languages/language"
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
			{getTranslation("header")}
		</Text>
	</ScrollView>
	)
  }
  const dictionary = {
	  header:{
	    pl_PL:"To jest text lokalny po Polsku",
	    en_EN:"This is text in english"
	  }
	}
  const getTranslation = createDictionary(dictionary)
  const styles = StyleSheet.create({
	  mainWrap:{
		  backgroundColor:getColors().backgroundDark
	  }
  })
  export default HomeScreen