//! 배열 메소드와 제네릭를 사용한 회원 관리 프로그램 구현

//, Todo 관리 프로그램을 구현

//, Todo 항목은 title(제목: string), done(완료 상태: boolean - 초기값 false)의 속성
//,  Todo 관리 프로그램은 Todo 항목을 
// 추가(addTodo), 검색(findTodo), 제거(removeTodo), 완료 항목만 필터링(filterDoneTodos)하는 기능을 제공

//, Todo 항목을 관리하기 위한 Todo 클래스를 정의
class Todo {
  constructor(public title: string, public done: boolean = false) {}
}

//, Todo 관리 기능을 제공하는 TodoList 클래스를 제네릭을 사용하여 정의

class TodoList<TodoItem extends Todo> {
  private todos: TodoItem[] = [];

  addTodo(todo: TodoItem): void {
      this.todos.push(todo);
  }

  findTodo(title: string): TodoItem | undefined {
      return this.todos.find(todo => todo.title === title);
  }

  removeTodo(title: string): void {
      const index = this.todos.findIndex(todo => todo.title === title);
      if (index !== -1) {
          this.todos.splice(index, 1);
      }
  }

  filterDoneTodos(): TodoItem[] {
      return this.todos.filter(todo => todo.done);
  }
}
// ( TodoList 클래스는 Todo 객체의 리스트를 관리 )
// 위의 Todo클래스를 확장

let todoList = new TodoList<Todo>();
todoList.addTodo(new Todo("Buy milk"));
todoList.addTodo(new Todo("Clean the house", true));
todoList.addTodo(new Todo("Study TypeScript"));

console.log(todoList.findTodo("Clean the house"));  // Output: Todo { title: 'Clean the house', done: true }
todoList.removeTodo("Clean the house");
console.log(todoList.findTodo("Clean the house"));  // Output: undefined

let doneTodos = todoList.filterDoneTodos();
console.log(doneTodos);  // Output: []