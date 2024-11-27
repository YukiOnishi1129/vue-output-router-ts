import { describe, it, expect, beforeEach, vi } from "vitest";
import { useTodoProvider } from "./useTodoProvider";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

describe("useTodoProvider", () => {
  let todoProvider: ReturnType<typeof useTodoProvider>;

  beforeEach(() => {
    todoProvider = useTodoProvider();
    // 初期化
    todoProvider.originTodoList.value = [...INIT_TODO_LIST];
    todoProvider.searchKeyword.value = "";
  });

  it("初期状態を確認する", () => {
    expect(todoProvider.originTodoList.value).toEqual(INIT_TODO_LIST);
    expect(todoProvider.searchKeyword.value).toBe("");
  });

  it("Todoを追加する", () => {
    const newTitle = "New Todo";
    const newContent = "New Content";

    todoProvider.handleAddTodo(newTitle, newContent);

    const lastTodo = todoProvider.originTodoList.value.at(-1);
    if (lastTodo === undefined) {
      throw new Error("lastTodo is undefined");
    }
    expect(todoProvider.originTodoList.value.length).toBe(
      INIT_TODO_LIST.length + 1
    );
    expect(lastTodo.title).toBe(newTitle);
    expect(lastTodo.content).toBe(newContent);
    expect(lastTodo.id).toBe(INIT_UNIQUE_ID + 1);
  });

  it("検索キーワードでTodoをフィルタリングする", () => {
    todoProvider.searchKeyword.value = "Todo1";

    const filteredTodos = todoProvider.showTodoList.value;

    expect(filteredTodos.length).toBe(1);
    expect(filteredTodos[0].title).toBe("Todo1");
  });

  it("Todoを更新する", () => {
    const targetId = INIT_TODO_LIST[0].id;
    const updatedTitle = "Updated Title";
    const updatedContent = "Updated Content";

    todoProvider.handleUpdateTodo(
      String(targetId),
      updatedTitle,
      updatedContent
    );

    const updatedTodo = todoProvider.originTodoList.value.find(
      (todo) => todo.id === targetId
    );

    if (updatedTodo === undefined) {
      throw new Error("updatedTodo is undefined");
    }

    expect(updatedTodo).toBeDefined();
    expect(updatedTodo.title).toBe(updatedTitle);
    expect(updatedTodo.content).toBe(updatedContent);
  });

  it("Todoを削除する (削除確認をモック)", () => {
    const targetId = INIT_TODO_LIST[0].id;
    const targetTitle = INIT_TODO_LIST[0].title;

    // window.confirmをモック化
    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(true);

    todoProvider.handleDeleteTodo(String(targetId), targetTitle);

    expect(todoProvider.originTodoList.value.length).toBe(
      INIT_TODO_LIST.length - 1
    );
    expect(
      todoProvider.originTodoList.value.find((todo) => todo.id === targetId)
    ).toBeUndefined();

    // モックをリストア
    confirmSpy.mockRestore();
  });

  it("Todo削除をキャンセル (削除確認をモック)", () => {
    const targetId = INIT_TODO_LIST[0].id;
    const targetTitle = INIT_TODO_LIST[0].title;

    // window.confirmをモック化
    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(false);

    todoProvider.handleDeleteTodo(String(targetId), targetTitle);

    expect(todoProvider.originTodoList.value.length).toBe(
      INIT_TODO_LIST.length
    );
    expect(
      todoProvider.originTodoList.value.find((todo) => todo.id === targetId)
    ).toBeDefined();

    // モックをリストア
    confirmSpy.mockRestore();
  });
});
