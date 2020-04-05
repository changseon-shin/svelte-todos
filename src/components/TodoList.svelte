<script>
    import TodoItem from './TodoItem.svelte';
    import {storeTodos} from '../stores';

    let todos = [{
        id: 1,
        content: 'learn svelte',
        done: false,
    }, {
        id: 2,
        content: 'learn sapper',
        done: false,
    }];

    /* 리액트의 방식을 그대로 사용했더니 안된다 ㅠ
    const toggleTodo = (id) => {
        todos = todos.map(todo => ({...todo, done: todo.id === id ? !todo.done : todo.done}));
    };
    const removeTodo = (id) => {
        todos = todos.filter(todo => todo.id !== id);
    };
     */

    const handleToggleTodo = (event) => {
        todos = todos.map(todo => ({...todo, done: todo.id === event.detail.id ? !todo.done : todo.done}));
    };

    const handleRemoveTodo = (event) => {
        todos = todos.filter(todo => todo.id !== event.detail.id);
    };

    // $: console.log(`todos === ${todos}`);

</script>

<ul class="todoList">
<!--    {#each todos as todo (todo.id)}-->
<!--        <TodoItem-->
<!--                todo={todo}-->
<!--                on:remove={handleRemoveTodo}-->
<!--                on:toggle={handleToggleTodo}-->
<!--        />-->
<!--    {/each}-->
    {#each $storeTodos as todo (todo.id)}
        <TodoItem
            todo={todo}
        />
    {/each}
</ul>

<style>
    .todoList {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>