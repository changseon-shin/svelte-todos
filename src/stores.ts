import {Writable, writable} from 'svelte/store';

export interface ITodos {
    id: number;
    content: string;
    done: boolean;
}

export const storeTodos: Writable<Array<ITodos>> = writable([{
    id: 1,
    content: 'learn svelte',
    done: false,
}, {
    id: 2,
    content: 'learn sapper',
    done: false,
}]);