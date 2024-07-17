import { Button } from "@chakra-ui/react";

import HomeIcon from "../assets/icons/home.svg";

import { useNavigate } from "react-router";

export default function GoHomeButton(){
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-5 left-5">
            <Button width="16" height="16" rounded="50%" colorScheme="green" onClick={() => { navigate('/') }}>
                <img src={HomeIcon} alt="go to home page" className="w-10 h-10"/>
            </Button>
        </div>
    );
}