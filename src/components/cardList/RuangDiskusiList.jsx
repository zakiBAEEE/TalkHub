import { CardRuangDiskusi } from '../card/CardRuangDiskusi'
import { Separator } from '../separator/separator'


function RuangDiskusiList() {
    {/* {
            Penggunas.map((Pengguna) => {
                return <CardPengguna/>
            })
        } */}
    return (
        <>
            <Separator namaSeparator={"Teknologi"} />
            <div className='flex w-full flex-wrap justify-start gap-4 mt-4'>
                <CardRuangDiskusi handlerDetailRuangDiskusi={() => { }} />
                <CardRuangDiskusi handlerDetailRuangDiskusi={() => { }} />
            </div>
        </>

    )
}

export { RuangDiskusiList }