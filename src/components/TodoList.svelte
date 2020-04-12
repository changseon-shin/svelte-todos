<script lang="typescript">
    import TodoItem from './TodoItem.svelte';
    import {storeTodos, ITodos} from '../stores.ts';

    let todos: Array<ITodos> = [{
        id: 1,
        content: 'learn svelte',
        done: false,
    }, {
        id: 2,
        content: 'learn sapper',
        done: false,
    }];

    const handleToggleTodo = (event): void => {
        todos = todos.map(todo => ({...todo, done: todo.id === event.detail.id ? !todo.done : todo.done}));
    };

    const handleRemoveTodo = (event): void => {
        todos = todos.filter(todo => todo.id !== event.detail.id);
    };
</script>

<template>
    <ul class="todoList">
        {#each $storeTodos as todo (todo.id)}
            <TodoItem
                todo={todo}
            />
        {/each}
    </ul>
</template>

<style src="../styles/todoList.css"></style>