import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function CardRuangDiskusi({ id, nama, deskripsi, gambarProfile }) {
    const navigate = useNavigate();

    function onClickHandler() {
        navigate(`/diskusi/halamanDetail/${id}`)
    }

    return (
        <Card className="w-64 h-72 overflow-hidden flex flex-col cursor-pointer" onClick={onClickHandler}>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none h-[45%]"
            >
                <img
                    src={gambarProfile}
                    alt="ui/ux review check"
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody className="h-2/3 overflow-auto">
                <Typography variant="h5" color="blue-gray">
                    {nama}
                </Typography>
                <Typography variant="small" color="gray" className="mt-3 font-normal">
                    {deskripsi}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between h-12">
                <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="natali craig"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
            </CardFooter>
        </Card>

    );
}

CardRuangDiskusi.propTypes = {
    id: PropTypes.string.isRequired,
    nama: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
    gambarProfile: PropTypes.string.isRequired
}

export { CardRuangDiskusi }