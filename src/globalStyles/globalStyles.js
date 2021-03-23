import { StyleSheet } from 'react-native';
import { colors, fontSizes, fonts } from "../constants/constants"
const getGlobalStyle = (theme = "dark") => {
    switch (theme) {
        case "dark":
            return darkStyles
            break;

        default:
            break;
    }
}
const darkStyles = StyleSheet.create({
    text: {
        fontFamily: fonts.poppins.extraLight,
        fontSize: fontSizes.M,
        color: colors.text,
    },
    heding1: {
        fontFamily: fonts.poppins.light,
        fontSize: fontSizes.L,
        color: colors.text,
    }
})
export default getGlobalStyle