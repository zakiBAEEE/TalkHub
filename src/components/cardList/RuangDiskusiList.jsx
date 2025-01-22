import PropTypes from 'prop-types'
import { CardRuangDiskusi } from '../card/CardRuangDiskusi'
// import { Separator } from '../separator/separator'


function RuangDiskusiList({ ruangDiskusis }) {
    return (
        <>
            {/* <Separator namaSeparator={"Teknologi"} /> */}
            <div className='flex w-full flex-wrap justify-start gap-4 mt-4'>
                {
                    ruangDiskusis.map((ruangDiskusi) => {
                        return (
                            <CardRuangDiskusi key={ruangDiskusi.id} {...ruangDiskusi} />
                        )
                    })
                }
                <CardRuangDiskusi handlerDetailRuangDiskusi={() => { }} />
            </div>
        </>

    )
}


RuangDiskusiList.propTypes = {
    ruangDiskusis: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,          // ID harus berupa angka dan wajib
            nama: PropTypes.string.isRequired,        // Nama harus berupa string dan wajib
            deskripsi: PropTypes.string,              // Deskripsi opsional, berupa string
            thread: PropTypes.array,                  // Thread berupa array
            pengguna: PropTypes.arrayOf(PropTypes.string), // Pengguna berupa array string
            gambarProfile: PropTypes.string,          // URL gambar profil berupa string
        })
    ).isRequired, // `ruangDiskusis` wajib diisi
};


export { RuangDiskusiList }