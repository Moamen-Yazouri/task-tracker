import Task from '@/components/Task/Task';
import { getTaskById } from '@/services/fetchData.services';
import Link from 'next/link';
import React from 'react'
interface IProps {
    params: Promise<{id: number}>
}
const page = async (props: IProps) => {
    const id = (await props.params).id;
    const task = await getTaskById(id);
    return (
        <div className='flex items-center min-h-[100vh] bg-gradient-to-b from-teal-300 to-teal-400 px-6'>
            <Task data={task} />
            <Link href={"/"}>Back To the Home page</Link>
        </div>
    )
}

export default page;