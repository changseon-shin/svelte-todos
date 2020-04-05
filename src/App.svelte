<script>
	import TodoList from './components/TodoList.svelte';
	import TodoInput from "./components/TodoInput.svelte";

	import {storeTodos} from './stores';
	$: console.log(`storeTodos === ${$storeTodos}`);
</script>

<main>
	<header>
		<h1>SVELTE TODO LIST</h1>
	</header>
	<TodoInput />
	<TodoList />
</main>

<style>
	header {
		text-align: center;
		margin-top: 30px;
	}
</style>