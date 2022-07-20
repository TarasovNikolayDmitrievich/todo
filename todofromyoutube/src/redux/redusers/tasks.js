
const ADD = 'ADD'
const DELETE = 'DELETE'
const IMPORTANT = 'IMPORTANT'
const DONE = 'DONE'

const initialState = {
  todos: [{
    title: 'fuck Maksat',
    isDelete: false,
    isImportant: false,
    isDone: false,
    id: 1111
  }],
  title: 'Elbrus',
  count: 1
}



export const addTask = (title) => {
  return (dispath) => {
    return dispath({ type: ADD, title })
  }
};


export const deleteTask = (id) => {
  return (dispatch) => {
    return dispatch({
      type: DELETE,
      id
    })
  }
}

export const doImportant = (id) => {

  return (dispatch) => {
    dispatch({
      type: IMPORTANT,
      id
    })
  }
}

export const doDone= (id) => {

  return (dispatch) => {
    dispatch({
      type: DONE,
      id
    })
  }
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        todos: [...state.todos, {
          title: action.title,
          isDelete: false,
          isImportant: false,
          isDone: false,
          id: Math.floor(Math.random() * 100000)
        }],
        count: state.count + 1
      }
    }
    case 'DELETE': {
      return {
        ...state,
        todos: state.todos.filter((item) =>
          item.id !== action.id),
        count: state.count - 1
      }
    }
    case 'IMPORTANT':{ 
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id == action.id) {
            return { ...item, isImportant: !item.isImportant }
          }
          return item
        })
      }
      
    }
    case 'DONE':{
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id == action.id) {
            return { ...item, isDone: !item.isDone}
          }
          return item
        })
      }
    }
    default: return state
  }
}
