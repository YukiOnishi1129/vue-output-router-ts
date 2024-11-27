import { ref, computed } from "vue";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useTodoProvider = () => {
  const originTodoList = ref(INIT_TODO_LIST);
  const uniqueId = ref(INIT_UNIQUE_ID);
  const searchKeyword = ref("");

  // 表示用のTodoリストを返す算出プロパティ
  const showTodoList = computed(() => {
    return originTodoList.value.filter((todo) => {
      // 検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp("^" + searchKeyword.value, "i");
      return todo.title.match(regexp);
    });
  });

  const handleAddTodo = (title: string, content: string) => {
    if (title.trim() !== "" && content.trim() !== "") {
      const nextUniqueId = uniqueId.value + 1;
      originTodoList.value.push({
        id: nextUniqueId,
        title: title.trim(),
        content: content.trim(),
      });

      // 採番IDを更新
      uniqueId.value = nextUniqueId;
    }
  };

  const handleUpdateTodo = (
    targetId: string,
    title: string,
    content: string
  ) => {
    originTodoList.value = originTodoList.value.map((todo) => {
      if (String(todo.id) === targetId) {
        return {
          ...todo,
          title: title.trim(),
          content: content.trim(),
        };
      }
      return todo;
    });
  };

  const handleDeleteTodo = (targetId: string, targetTitle: string) => {
    if (window.confirm(`「${targetTitle}」を削除しますか？`)) {
      const newTodoList = originTodoList.value.filter((todo) => {
        return String(todo.id) !== targetId;
      });
      originTodoList.value = newTodoList;
    }
  };

  return {
    originTodoList,
    showTodoList,
    searchKeyword,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };
};
