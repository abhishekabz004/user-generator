
import { ADD_USER, REMOVE_USER} from '../actions/actionsTypes'

const INITIAL_DATA = []

// Reducer defined to implement the maintainance of store. Involves adding and deleting user data in it. 

const UserReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_USER: // add the fetched user data into the existing state 
      return [
        ...state, {
          id: action.id,
          name: action.userData.name.first.charAt(0).toUpperCase()+action.userData.name.first.substr(1).toLowerCase()+" "+action.userData.name.last.charAt(0).toUpperCase()+action.userData.name.last.substr(1).toLowerCase(),
          location: action.userData.location.city.charAt(0).toUpperCase()+action.userData.location.city.substr(1).toLowerCase()+", "+action.userData.location.state.charAt(0).toUpperCase()+action.userData.location.state.substr(1).toLowerCase(),
          pic: action.userData.picture.medium,
        }
      ]
    case REMOVE_USER: // delete the user data based on user Id sent in form of action
      const numIndex = parseInt(action.id);
      return state.filter(user => user.id !== numIndex);
    default:
      return state
  }
}

export default UserReducer