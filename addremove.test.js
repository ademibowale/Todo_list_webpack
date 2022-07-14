import { addItem, todoList } from "./src/modules/code";

test('Add one new item to the list', () => {
  const e = { stopPropagation: jest.fn() };
  const todo = {
    value:'first task'
  }
  const todoObj = {
    description: todo.value,
    completed: false,
    index: todoList.length + 1,
  };
  todoList.push(todoObj);
  localStorage.setItem('data', JSON.stringify(todoList));
  expect(JSON.parse(localStorage.getItem('data')).length).toBe(1);
});