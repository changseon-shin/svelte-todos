<script lang="typescript">
    import { storeTodos } from "../stores.ts";
    export let todo;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    const toggleTodo = (): void => {
        dispatch("toggle", { id: todo.id });
    };

    const removeTodo = (): void => {
        dispatch("remove", { id: todo.id });
    };

    const toggleStoreTodo = (): void => {
        storeTodos.update(storeTodos =>
            storeTodos.map(storeTodo => ({
                ...storeTodo,
                done: storeTodo.id === todo.id ? !storeTodo.done : storeTodo.done
            }))
        );
    };

    const removeStoreTodo = (): void => {
        storeTodos.update(storeTodos =>
            storeTodos.filter(storeTodo => storeTodo.id !== todo.id)
        );
    };
</script>

<template>
    <li class="todoItem">
        <input type="checkbox" bind:checked={todo.done} name={todo.id} />
        <label for={todo.id} on:click={toggleStoreTodo} class={todo.done && 'done'}>
            {todo.content}
        </label>
        <button on:click={removeStoreTodo}>X</button>
    </li>
</template>

<style src="../styles/todoItem.css"></style>