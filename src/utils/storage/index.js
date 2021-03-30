import AsyncStorage from '@react-native-async-storage/async-storage';
import {INITIAL_STATE, SOLID_STORAGE_KEYS} from '../../constants/constants';
const findItemByID = (id,array=[])=>{
    const temp = [...array]
    const item = temp.findIndex(item=>{
        return item.ID === id
    })
    return item
}
const _SAVE_DATA = async (key,value)=>{
    try {
        const stringified = JSON.stringify(value)
        await AsyncStorage.setItem(key,stringified)
    } catch (error) {
        throw new Error("błąd przy Zapisywaniu danych" + error);
    }
}
const _GET_DATA = async (key)=>{
    try {
        const response = AsyncStorage.getItem(key)
        if(response){
            const data = JSON.parse(response)
            return data
        }
        return false
    } catch (error) {
        throw new Error("błąd przy odczytywaniu danych" + error);
    }
}
const getSettings = async () => {
  try {
    const response = await _GET_DATA(SOLID_STORAGE_KEYS.SETTINGS)
    if (response) {
        return response
    }
    await saveSettings(INITIAL_STATE.settings);
    return INITIAL_STATE.settings
   
  } catch (error) {
    console.log(
      'Wystąpił błąd przy próbie pobrania danych z lokalnej bazy danych',
      error,
    );
  }
};
const saveSettings = async (settings) => {
  try {
    await _SAVE_DATA(SOLID_STORAGE_KEYS.SETTINGS,settings)
  } catch (error) {
      console.log("Błąd przy próbie zapisu ustawień do pamięci urzadzenia",error);
};}
const getCourses = () => {
    try {
        const response = await _GET_DATA(SOLID_STORAGE_KEYS.COURSES)
        if (response) {
            return data 
        }
        await saveCourses(INITIAL_STATE.COURSES)
        return INITIAL_STATE.COURSES
    } catch (error) {
        
    }
};
const saveCourses = async courses => {
try {
    await _SAVE_DATA(SOLID_STORAGE_KEYS.COURSES,courses)
} catch (error) {
    console.log("Błąd przy próbie zapisu Kursów",error);
}
};
const saveSingleCardToStorage = async (card)=>{
    try {
        const { parentID,ID } = card
        const courses = await getCourses() 
        const coursIndex = findItemByID(parentID,courses)
        const cardIndex = coursIndex >-1? findItemByID(ID,courses[coursIndex].cards):-1
        if(cardIndex>-1){
            courses[coursIndex].cards[cardIndex] = card
            await saveCourses(courses)
        }
    } catch (error) {
        console.log("Błąd podczas próby zapisu pojedyńczego kursu do pamięci urządzenia",error);
    }

}
const addCardToStorage = async (card)=>{
    try {
        const { parentID } = card
        const courses = await getCourses() 
        const coursIndex = findItemByID(parentID,courses)
        if(coursIndex>-1){
            courses[coursIndex].cards.push(card)
            await saveCourses(courses)
        }else{
            console.log(`Nie znaleziono kursu o id ${parentID}`);
        }
    } catch (error) {
        console.log("Wystąpił błąd przy próbie dodania karty",error);
    }
}
const editCourse = async (course)=>{
    try {
        const {ID}=course
        const courses = await getCourses()
        const coursIndex = findItemByID(ID,courses)
        if(coursIndex>-1){
            courses[coursIndex] = course
            await saveCourses(courses)
        }else{
            console.log(`Nie znaleziono kursu o id: ${ID}`);
        }
    } catch (error) {
        console.log(`Przy próbie Edycji kursu o doszło do błędu`,error);
    }
}
export {getCourses, getSettings, saveCourses, saveSettings, saveSingleCardToStorage, addCardToStorage,editCourse};
