import React from 'react'
import { TombolBack } from '../components/tombol/TombolBack'
import { TombolFollow } from '../components/tombol/TombolFollow'
import { Typography } from '@material-tailwind/react'

class DetailHalamanRuangDiskusi extends React.Component {
    render() {
        return (
            <div className="relative flex flex-col w-full h-full">
                <div className="absolute top-[2rem] left-[2rem]">
                    <TombolBack handler={() => { }} />
                </div>
                <div className="w-2/3 bg-amber-700 h-[14rem] m-auto">
                    <div className="w-[12rem] bg-teal-600 h-[12rem] relative top-[9rem] left-[4rem]"></div>
                    <div className='relative top-[3rem] flex justify-end w-auto'>
                        <TombolFollow warna="blue" label="Follow" handler={() => { }} />
                    </div>
                </div>
                <div className='mt-[8rem] w-2/3 m-auto flex flex-col gap-2'>
                    <Typography variant="h3">Judul Diskusi</Typography>
                    <Typography variant="paragraph" className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quaerat dolores earum natus libero, pariatur fuga distinctio sequi quo deserunt, at sint atque nostrum! Aliquam, sint assumenda! Quod animi sit exercitationem quaerat dolores eos tenetur ut repudiandae, ad veritatis? Amet accusamus explicabo error quae quasi soluta officiis impedit quis dolorem.</Typography>
                </div>
            </div>


        )
    }
}
export { DetailHalamanRuangDiskusi }
