import React from 'react'
import { Header } from '../Header'
import { Cards } from '../Cards'
import { InfoUser } from '../InfoUser'

export const Dashboard = () => {
    return (
        <>

            <div className=' flex gap-7 ' >
                <article className='w-full h-[640px] bg-slate-300 rounded-3xl px-16 py-14 grid grid-cols-2 gap-8 overflow-y-auto'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </article>
                <InfoUser />
            </div>
        </>
    )
}
