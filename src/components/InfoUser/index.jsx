
import { Link } from 'react-router-dom';
import { EditRouter } from '../InfoAndEdit';


export const InfoUser = () => {



    return (
        <>
            <aside className=' w-[390px] h-[640px] bg-slate-300 rounded-3xl flex flex-col  gap-4 ' >
                <div>
                    <div className=' flex justify-end px-9 mt-4 ' >
                        <Link to='/app/dashboard/editinfo' >
                            <button className='h-9 w-20 bg-slate-400 rounded-lg font-bold text-white ' >Edit</button>
                        </Link>
                    </div>

                </div>
                <div className=' flex flex-col justify-center items-center gap-2 ' >

                    <EditRouter />

                </div>

            </aside>
        </>
    )
}
