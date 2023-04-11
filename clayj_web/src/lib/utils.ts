import { isOpened } from "../stores/sidebar.ts"

export function toggleSideBar(): void {
    isOpened.update((state:boolean) => !state);
}