'use client'
import Loading from '@/app/loading';
import Task from '@/components/Task/Task';
import TaskCopy from '@/components/TaskCopy/TaskCopy';
import { getTaskById } from '@/services/fetchData.services';
import { ITask } from '@/types/@types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react'
interface IProps {
    params: Promise<{id: number}>
}
const page =  (props: IProps) => {
    const [task ,setTask] = useState<ITask>({id: 0, title: '', completed: false});
    const [id, setId] = useState<number>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        props.params.then(res => setId(res.id));
    }, [])

    useEffect(() => {
    getTaskById(id!).then(task => {
        if(task) {
            setTask(task);
            setLoading(false);
        }
        else
        notFound();
    });
    }, [id]);
    if(loading) return(
        <Loading/>
    )
    return (
        <div className='flex items-center justify-center gap-5 flex-col min-h-[100vh] bg-gradient-to-b from-teal-300 to-teal-400 px-6'>
            <TaskCopy title={task.title}/>
            <Task data={task} />
            <Link href={"/"} className='cursor-pointer text-white underline text-[20px] hover:scale-[1.1] transition-[3]'>Back to Tasks</Link>
        </div>
    )
}

export default page;