<script lang="typescript">
	import TodoList from './components/TodoList.svelte';
	import TodoInput from "./components/TodoInput.svelte";
	import {storeTodos} from './stores.ts';

	$: console.log(`storeTodos === ${$storeTodos}`);
</script>

<template>
	<main>
		<header>
			<h1>SVELTE TODO LIST</h1>
		</header>
		<TodoInput />
		<TodoList />
	</main>
</template>

<style>
	header {
		text-align: center;
		margin-top: 30px;
	}
</style>