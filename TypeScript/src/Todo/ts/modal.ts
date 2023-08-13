//, Todo 형태 정의 - 인터페이스
interface Todo {
  todoDate: string;
  todoDateTime: string;
  todoContent: string;
}

// ModalEvent 클래스 정의
class ModalEvent {
  private static instance: ModalEvent | null = null;

  public static getInstane(): ModalEvent {
    if (!this.instance) {
      this.instance = new ModalEvent();
    }
    return this.instance;
  }
}

// MocalService 클래스 정의
