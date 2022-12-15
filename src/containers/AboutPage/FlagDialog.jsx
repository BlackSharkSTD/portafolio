import React from 'react';
import '../../assets/styles/components.css';
import { flags } from '../../services/xconfig.jsx';
import { ProgressBar } from '../../components/ProgressBar';

export default function FlagDialog() {
    function myFunction() {
        var modal = document.getElementById("FlagModal");
        if (modal.style.display === "none") {
            modal.style.display = "block";
            console.clear();
        } else {
            modal.style.display = "none";
            console.clear();
        }
    }
  return (
    <>
        <button id="myBtn" className="btn-showi" onClick={myFunction}>Ver</button>
        <div id="FlagModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Idiomas</h2>
                </div>
                <div className="modal-body">
                    <p>Estos son algunos conocimiento que he adquirido en el área de la programación</p>
                    <div className="spacing5" />
                    {flags.map((e) => {
                        return(
                            <>
                                <div className="spacing10" />
                                <div className="cart" key={e.id}>
                                    <div className="divicon">
                                        <img src={e.icon} color={e.color} />
                                    </div>
                                    <ProgressBar title={e.title} size={e.porcent} color={e.color} />
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    </>
  )
}