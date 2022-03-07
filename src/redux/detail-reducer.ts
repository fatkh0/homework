
const UPDATE_DETAILS = 'UPDATE_DETAILS'

interface State {
  details: object
}

const initialState: State = {
  details: []
}



const todoReducer = (state: any = initialState, action: any) => {
  switch (action.type){
    case UPDATE_DETAILS:
        return {...state, details: [...state.details, action.details]}
      default:
        return state
  }
}
export default todoReducer

export const updateDetails = (details: string) => ({type: UPDATE_DETAILS, details})




