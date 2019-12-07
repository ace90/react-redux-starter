

interface TodoState{
    todo: {
        todoList: []
    }
}
export const getTodoList = (state: TodoState) => state.todo.todoList;