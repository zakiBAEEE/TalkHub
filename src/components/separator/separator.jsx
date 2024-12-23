import { Typography } from '@material-tailwind/react'
import React from 'react'

function Separator({ namaSeparator }) {
    return (
        <div className='flex flex-col gap-y-2 mt-5'>
            <Typography variant='h4'>
                {namaSeparator}
            </Typography>
            <div className="border-t border-gray-600 w-[65rem]"></div>
        </div>
    )
}
export { Separator }