import { ITask } from "@/types/@types";

export const getTasks = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await res.json();
    return data as ITask[];
}
export const getTaskById = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return data as ITask;
}