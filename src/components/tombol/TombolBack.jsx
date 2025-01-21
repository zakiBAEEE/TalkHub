
import PropTypes from 'prop-types'
import { FaArrowLeft } from 'react-icons/fa'
function TombolBack({ handler }) {
    return (
        <FaArrowLeft size={30} onClick={handler} className='cursor-pointer border-2 border-black p-1 rounded-lg hover:bg-blue-gray-200' />
    )
}

TombolBack.propTypes = {
    handler: PropTypes.func.isRequired
}

export { TombolBack }