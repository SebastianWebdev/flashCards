'use-strict'
const theme = "dark"
const _COLORS = Object.freeze({
    themes: {
        dark: {
            backgroundDark: "#171721",
            backgroundLight: "#2D303A",
            backgroundPurpleDark: "#4A0329",
            backgroundPurpleLight: "#9D0355",
            text: "#E5E5E5",
            red: "#A8071A",
            green: "#7CB305"
        }
    }
}) 
const fontSizes = Object.freeze({
    XS: 14,
    S: 16,
    M: 18,
    L: 20,
    XL: 22,
}) 
const fontSizesCards = Object.freeze({
    default: 18,
    XS: 14,
    S: 16,
    L: 20,
    XL: 22
}) 
const fonts = Object.freeze(
    {
        poppins: { extraLight: "Poppins-ExtraLight", light: "Poppins-light", medium: "Poppins-Medium", regular: "Poppins-Regular", SemiBold: "Poppins-SemiBold" }
    }
) 
const languagePrefixes = Object.freeze({pl_PL:"pl_PL",en_EN:"en_EN"})
const getColors = () => {
    switch (theme) {
        case "dark":
            return _COLORS.themes.dark
            break;
        default:
            break;
    }
}
const colors = getColors()
export { colors, fontSizes, fonts, fontSizesCards,languagePrefixes, getColors }