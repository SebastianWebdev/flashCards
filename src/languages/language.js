const language = "pl_PL"
const createDictionary = (dictionary={})=>{
const copy = {...dictionary}
return (textID)=>{
    return copy[textID][language]
}
}
export default createDictionary