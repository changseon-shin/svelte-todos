<script>
    import {storeTodos} from '../stores';
    let input = '';

    const generateId = (todos) => {
        const current = todos.reduce((acc, todo) => {
            if(acc < todo.id) acc = todo.id;
            return acc;
        }, 0);

        return current + 1;
    };

    const addTodo = () => {
        const newTodo = {
            id: generateId($storeTodos),
            content: input,
            done: false
        };
        storeTodos.update(todos => [...todos, newTodo]);
        input = '';
    };

    $: console.log(`input === ${input}`);
</script>

<div class="todoInput">
    <input type="text" bind:value={input} on:keypress={(e) => e.key === 'Enter' && addTodo()}>
    <button on:click={addTodo}>ADD</button>
</div>

<style>
    .todoInput {
        display: flex;
        justify-content: center;
        margin: 30px 0;
    }
    input {
        width: 200px;
    }
</style>