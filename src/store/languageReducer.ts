type LanguageListStateType = {
    eng: boolean,
    ru: boolean,
}

const defaultLanguageState: LanguageListStateType = {
    eng: true,
    ru: false,
}

export const getLanguageReducer = (state  = defaultLanguageState, action:any):LanguageListStateType  => {
    switch (action.type) {
        case "eng":
            return {...state, 
                eng: true,
                ru: false,
                }
        
        case "ru":
            return {...state, 
                eng: false,
                ru: true,
                }

        default:
            return state
        }
}