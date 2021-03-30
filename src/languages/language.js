import {languagePrefixes} from "../constants/constants"

const language = languagePrefixes.pl_PL // temporary variable - implemet react redux mechanism to manage global variable value 
const createDictionary = (dictionary={})=>{
const copy = {...dictionary}
return (textID)=>{
    return copy[textID][language]
}
}
export default createDictionary