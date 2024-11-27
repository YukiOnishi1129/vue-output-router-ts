import { InjectionKey, Ref, ComputedRef } from "vue";
import { TodoType } from "../types/todo";

export const originTodoListInjectionKey: InjectionKey<Ref<TodoType[]>> =
  Symbol() as InjectionKey<Ref<TodoType[]>>;

export const showTodoListInjectionKey: InjectionKey<Ref<TodoType[]>> =
  Symbol() as InjectionKey<ComputedRef<TodoType[]>>;

export const searchKeywordInjectionKey: InjectionKey<Ref<string>> =
  Symbol() as InjectionKey<Ref<string>>;

export const handleAddTodoInjectionKey: InjectionKey<Function> =
  Symbol() as InjectionKey<Function>;

export const handleUpdateTodoInjectionKey: InjectionKey<Function> =
  Symbol() as InjectionKey<Function>;

export const handleDeleteTodoInjectionKey: InjectionKey<
  (targetId: string, targetTitle: string) => void
> = Symbol() as InjectionKey<(targetId: string, targetTitle: string) => void>;
