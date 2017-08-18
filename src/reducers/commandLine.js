const addProgram = (state, action) => {
  const {id} = action;
  const allPrograms = state.allPrograms || [];
  return {
    ...state,
    allPrograms: [...allPrograms, id],
    [id]: {
      id,
      created: Date.now(),
      allOptions: [],
      options: {}
    }
  }
};

const addOption = (state, action) => {
  const {programId, id, displayFormat} = action;
  const currentOptions = state[programId].options;
  return {
    ...state,
    [programId]: {
      ...state[programId],
      updated: Date.now(),
      allOptions: [...state[programId].allOptions, id],
      options: {
        ...currentOptions,
        [id]: {
          id,
          displayFormat,
          created: Date.now(),
          separator: '='
        }
      }
    }
  }
};

const setOptionValue = (state, action) => {
  const {programId, id, value} = action;
  const currentOptions = state[programId].options || [];
  return {
    ...state,
    [programId]: {
      ...state[programId],
      updated: Date.now(),
      options: {
        ...currentOptions,
        [id]: {
          ...state[programId].options[id],
          value,
          updated: Date.now()
        }
      }
    }
  }
};

/*
const resetOptions = (state, action) => {

};

const resetPrograms = (state, action) => {

};
*/

const resetCli = (state) => {
  return {};
};

const commandLineReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_PROGRAM': return addProgram(state, action.payload);
    case 'ADD_OPTION': return addOption(state, action.payload);
    case 'SET_OPTION_VALUE': return setOptionValue(state, action.payload);
    case 'RESET_CLI': return resetCli(state);
    /*
    case 'RESET_OPTIONS':
    case 'RESET_PROGRAMS':
    case 'SAVE_COMMAND':
    case 'FORK_COMMAND':
    case 'DELETE_COMMAND':
    */
    default:
      return state;
  }
};

export default commandLineReducer;
