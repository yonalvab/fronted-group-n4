import React from 'react'
import miniatura from '../../assets/61.jpg'

export const Cards = () => {
    return (
        <>
            <div
                class="relative rounded-lg -skew-x-3 -translate-y-2  hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0 duration-500 w-72 h-44 p-2 bg-neutral-50 card-compact hover:bg-base-200 transition-all [box-shadow:10px_10px_#9299A3] hover:[box-shadow:4px_4px_#9299A3]"
            >
                <figure class="w-full h-full">
                    <img
                        src={miniatura}
                        alt="change to a img tag"
                        class=" text-neutral-50 min-h-full rounded-lg border border-opacity-5"
                    ></img>
                </figure>
                <div class="absolute text-neutral-50 bottom-4 left-0 px-4">
                    <span class="font-bold">Tittle</span>
                    <p class="text-sm opacity-80 line-clamp-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
                        feugiat orci. Curabitur efficitur elit arcu, a luctus sapien luctus ut.
                    </p>
                </div>
            </div>
        </>
    )
}
