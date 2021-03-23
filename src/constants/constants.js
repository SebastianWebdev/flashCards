'use-strict'
const theme = "dark"
const _COLORS = {
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
}
const fontSizes = {
    XS: 14,
    S: 16,
    M: 18,
    L: 20,
    XL: 22,
}
const fontSizesCards = {
    default: 18,
    XS: 14,
    S: 16,
    L: 20,
    XL: 22
}
const fonts = {
    poppins: { extraLight: "Poppins-ExtraLight", light: "Poppins-light", medium: "Poppins-Medium", regular: "Poppins-Regular", SemiBold: "Poppins-SemiBold" }
}
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
export { colors, fontSizes, fonts, fontSizesCards, getColors }