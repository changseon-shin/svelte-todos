<script lang="typescript">
  import { storeTodos, ITodos } from "../stores.ts";
  let input: string = "";

  const generateId = (todos): number => {
    const current: number = todos.reduce((acc, todo) => {
      if (acc < todo.id) acc = todo.id;
      return acc;
    }, 0);

    return current + 1;
  };

  const addTodo = (): void => {
    const newTodo: ITodos = {
      id: generateId($storeTodos),
      content: input,
      done: false
    };
    storeTodos.update(todos => [...todos, newTodo]);
    input = "";
  };

  $: console.log(`input === ${input}`);
</script>

<template>
  <div class="todoInput">
    <input
      type="text"
      bind:value={input}
      on:keypress={e => e.key === 'Enter' && addTodo()} />
    <button on:click={addTodo}>ADD</button>
  </div>
</template>

<style src="../styles/todoInput.css"></style>