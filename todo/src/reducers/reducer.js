export const initialState = [
  {
    task: "todo item 1",
    id: 1,
    completed: false
  },

  {
    task: "todo item 2",
    id: 2,
    completed: false
  },

  {
    task: "todo item 3",
    id: 3,
    completed: false
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.payload, ...state];
    case "TOGGLE_TASK":
      return state.map(item => {
        return action.payload === item.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    case "CLEAR_COMPLETED":
      return state.filter(task => !task.completed);
    default:
      return state;
  }
};
