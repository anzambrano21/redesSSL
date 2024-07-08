import React, {useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio,Registro } from './inicio'
import ExamplecontexProvier, {Exaplecontect}from "../context/contexto"
import {Adimistrador} from "./adimistrador";
import { Concepto } from './conceptos';
import {Cambiardat} from './usuario.jsx';
export default function Prin() {
   console.log(1234);
    
    return (

        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Concepto/>}/>
                <Route path='/edit' element={<Cambiardat/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/registro/*' element={<Registro/>} />
                <Route path='/admin/*' element={<Adimistrador/>} />
                
                
            </Routes>

            
        </BrowserRouter>
    );
}
