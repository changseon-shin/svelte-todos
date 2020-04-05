<script>
    import {storeTodos} from '../stores';
    export let todo;

    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    const toggleTodo = () => {
        dispatch('toggle', {id: todo.id});
    };

    const removeTodo = () => {
        dispatch('remove', {id: todo.id});
    };

    const toggleStoreTodo = () => {
        storeTodos.update(storeTodos => storeTodos.map(storeTodo => ({...storeTodo, done: storeTodo.id === todo.id ? !todo.done : todo.done})));
    };

    const removeStoreTodo = () => {
        storeTodos.update(storeTodos => storeTodos.filter(storeTodo => storeTodo.id !== todo.id));
    };
</script>

<li class="todoItem">
<!--    <input type="checkbox" bind:checked={todo.done} name={todo.id}>-->
<!--    <label for={todo.id} on:click={toggleTodo} class={todo.done && 'done'}>{todo.content}</label>-->
<!--    <button on:click={removeTodo}>X</button>-->

    <input type="checkbox" bind:checked={todo.done} name={todo.id}>
    <label for={todo.id} on:click={toggleStoreTodo} class={todo.done && 'done'}>{todo.content}</label>
    <button on:click={removeStoreTodo}>X</button>
</li>

<style>
    .todoItem {
        margin: 15px 0;
    }
    label {
        margin-left: 10px;
    }
    label.done {
        text-decoration: line-through;
    }
    button {
        margin-left: 15px;
    }
</style>