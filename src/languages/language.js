import pl from "./pl"
const langMap = new Map()
langMap.set("pl_PL", pl)
const language = "pl_PL"
const getText = (route = "") => {
    if (route !== "") {
        if (langMap.has(language)) {
            const langObject = langMap.get(language)
            const arr = route.split(" ")
            let value = langObject;
            arr.forEach(item => {
                value = value[item]
            })
            if (!value) {
                console.log(`Language Function - Can not find Route: ${route}`);
                return "";
            }
            return value
        }
    }
    return langMap.has(language) ? langMap.get(language) : langMap.get("pl_PL")
}
export default getText