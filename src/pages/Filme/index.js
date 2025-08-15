import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";


function Filme(){
    const {id} = useParams();

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "41cc98c8327a81134f528d684b42ea6e",
                    language: "pt-BR",
                }
            })
        }
        loadFilme();
    })
    return(
        <div>
            <h1> Acessando filme {id}</h1>
        </div>
    )
}

export default Filme