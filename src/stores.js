import {writable} from 'svelte/store';

export const storeTodos = writable([{
    id: 1,
    content: 'store - learn svelte',
    done: false,
}, {
    id: 2,
    content: 'store - learn sapper',
    done: false,
}]);