import React, { useContext, useState, useCallback } from 'react';

import { Link } from 'react-router-dom';
import "../../css/home.css"
import { useDropzone } from "react-dropzone";
import { Exaplecontect } from "../context/contexto";
import axios from 'axios';

import { Navigate } from 'react-router-dom';

export const Cambiardat = () => {
    const example = useContext(Exaplecontect)
    console.log(example);
    if (example.datos==='null'){
        return (<Navigate to="/inicio" />);
    }
    
    const guardar = async () => {
        let nom = document.getElementById("nombre").value
        let nombreUse= document.getElementById('nombreUse').value
        let ape = document.getElementById("apellido").value
        
        let email = document.getElementById("correo").value
        
        let conA = document.getElementById("conA").value
        let conN = document.getElementById("conN").value
        let Actu={
            nombre:nom,
            nombreUse: nombreUse,
            apellido:ape,
            Email: email,
            ConA:conA,
            ConN:conN
        }
        const formData = new FormData();
        formData.append('nombre', nom);
        formData.append('nombreUse', nombreUse);
        formData.append('apellido', ape);
        
        formData.append('Email', email);
        
        formData.append('ConA', conA);
        formData.append('ConN', conN);
         // Añade el archivo al FormData

        const response = await axios.put(`api/usuario/${example.datos.email}`, Actu);
        console.log(response);
    }
    const cargar = async () => {
        const response = await axios.get(`api/usuario/${example.datos.email}`);
        console.log(response);
        document.getElementById("nombreUse").value = response.data.nombreUser
        if (response.data.apellido !== "null") {
            document.getElementById("apellido").value = response.data.apellido
        }
        document.getElementById("correo").value = response.data.correo



    }
    const Usuario=()=>{
        if (example.datos.rol==="admin") {
            return(
                <a href="https://redes/admin">Admin</a>
            )
            
        }
        
    }
    const cerrarSesion=()=>{
        example.setDatos('null')
        location.reload();
    }
    cargar();
    return (
        <div className="min-h-screen bg-yellow-400 ">
            <nav className="bg-purple-700 text-yellow-400 shadow-md p-4 flex justify-between items-center borderInfer navar">
                <div className="text-xl font-bold">SSl</div>
                <div className="space-x-4">

                    <Usuario/>
                    <a href="/" className="hover:underline">Home</a>
                </div>
            </nav>
            <div className="containe bg-purple-700" >
                <div className='ubicacion'>
                <div className="row">
                        <p className='col-7 text-yellow-400' >Nombre de Usuario</p>
                        <input type="text" id="nombreUse" className="col-7" />
                    </div>
                    <div className="row">
                        <p className='col-7 text-yellow-400' >Nombre</p>
                        <input type="text" id="nombre" className="col-7" />
                    </div>
                    <div className="row">
                        <p className='col-7 text-yellow-400' >Apellido</p>
                        <input type="text" id="apellido" className="col-7" />
                    </div>

                    <div className="row">
                        <p className="col-7 text-yellow-400" >Correo</p>
                        <input type="email" className="col-7" id='correo' />
                    </div>

                    <div className="row">
                        <p className='col-7 text-yellow-400' >Contraseña actual</p>
                        <input type="text" className='col-7' id='conA' />

                    </div>
                    <div className="row">
                        <p className='col-7 text-yellow-400' >Contraseña nueva</p>
                        <input type="text" className='col-7' id='conN' />
                    </div>
                    <div className="row justify-content-end">
                    <input type="button" value="Cerrar Sesion" className='col-3 ' onClick={cerrarSesion} />
                        <input type="button" value="guardar" className='col-3 ' onClick={guardar} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export const GuardarV = () => {
    const example = useContext(Exaplecontect)
    const guardar = async () => {
        let nom = document.getElementById("nomV").value
        let des = document.getElementById("desV").value
        let file = document.getElementById("fileV").files[0]


        // Crea una instancia de FormData
        const formData = new FormData();

        // Añade el archivo y los otros campos a FormData
        formData.append('video', file);
        formData.append('nombreV', nom);
        formData.append('desc', des);
        formData.append('email', example.datos.email);
        // Añade el archivo a FormData

        console.log(...formData); // Para ver los valores de formData
        let res = await axios.post(`api/video`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res);


    }
    function Admin() {
        if (example["datos"]["rol"] === 1) {
            return (
                <a href="/admin" className="hover:underline">Admin</a>



            )
        }
        return null;
    }
    return (
        <div className="min-h-screen bg-yellow-400 ">
            <nav className="bg-purple-700 text-yellow-400 shadow-md p-4 flex justify-between items-center borderInfer navar">
                <div className="text-xl font-bold">Youtube</div>
                <div className="space-x-4">

                    <Admin />
                    <a href="/Home" className="hover:underline">Home</a>
                </div>
            </nav>

            <div className="containe2 bg-purple-700" >

                <div className='Invideo'>
                    <div className='row mb-2'>
                        <input className='col-4' id='nomV' type="text" />
                        <p className='col-3'>Nombre del video</p>
                    </div>
                    <div className='row mb-2'>
                        <input className='col-4' id='desV' type="text" />
                        <p className='col-3'>Descripcion</p>
                    </div>
                    <div className="row mb-2">
                        <input className='col-4' type="file" accept=".mp4" name="video" id="fileV" />
                        <p className='col-3'>Video a subir</p>

                    </div>
                    <div className="row mb-2">
                        <input className="boton col-4" type="button" value="Guardar" onClick={guardar} />
                    </div>
                </div>




            </div>
        </div>
    )

}