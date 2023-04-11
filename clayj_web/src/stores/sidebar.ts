import { writable } from 'svelte/store';

export const isOpened = writable<boolean>(false);
