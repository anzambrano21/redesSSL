import React,{useContext}  from "react"
import { Exaplecontect } from "../context/contexto"
export const Concepto = () => {
    const example = useContext(Exaplecontect)
    console.log(example);
    const Usuario=()=>{
        if (example.datos.rol==="admin") {
            return(
                <a href="https://redes/admin">Admin</a>
            )
            
        }
        
    }
    return(
        <div>
            <Usuario/>
            <a href="https://redes/edit">Usuario</a>
            <h3>Auditoría de seguridad:</h3>
            <p>Proceso sistemático para evaluar y verificar
             la seguridad de una red, sistemas o aplicaciones.
             Se busca identificar vulnerabilidades, riesgos y
              deficiencias en los controles de seguridad.</p>
            <h3>Análisis de seguridad de redes</h3>
            <p>Evaluación exhaustiva de la infraestructura de red para identificar 
                posibles amenazas, vulnerabilidades y debilidades. Incluye revisión
                de políticas, configuraciones, acceso y detección de anomalías.</p>
            <h3>Análisis forense:</h3>
            <p>Investigación y recopilación de evidencia digital en caso de 
                incidentes de seguridad. Se utiliza para determinarcómo ocurrió
                un ataque, quién lo perpetró y qué daños se produjeron</p>
            <h3>SSL (Secure Sockets Layer)</h3>
            <p>Protocolo de seguridad que cifra la comunicación entre un cliente
                (navegador) y un servidor web. Se utiliza para proteger la transferencia
                 de datos confidenciales, como contraseñas y tarjetas de crédito.</p>
            <h3>Acceso remoto</h3>
            <p>Capacidad de conectarse a una red o sistema desde ubicaciones externas.
                 Puede ser mediante VPN, escritorio remoto o conexiones SSH</p>
            <h3>VPN (Virtual Private Network)</h3>
            <p>Red privada virtual que permite a los usuarios acceder a recursos
                de red de forma segura a través de una conexión cifrada. Se utiliza 
                para proteger la privacidad y la confidencialidad de la información.</p>
        </div>
    )
}