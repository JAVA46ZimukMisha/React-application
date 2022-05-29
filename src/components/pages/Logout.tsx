import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../config/routes-config";
import { authService } from "../../config/service-config";
import { ClientData, emptyClientData } from "../../models/ClientData";
import { authAction } from "../../redux/actions";
import { StateType } from "../../redux/store";

const Logout: React.FC = () =>
{
    const clientData = useSelector<StateType, ClientData>(state => state.clientData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    async function onLogout() {
        if (await authService.logout()) {
            dispatch(authAction(emptyClientData));
            navigate(LOGIN_PATH);
        }

    }
    return <Box>
    <Button onClick={onLogout}>Logout from {clientData.displayName}</Button>
    </Box>
}
export default Logout;