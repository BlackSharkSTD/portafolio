import React from 'react';
import '../../assets/styles/components.css';
import { programs } from '../../services/xconfig.jsx';
import { ProgressBar } from '../../components/ProgressBar';

export default function CodeDialog() {
    function myFunction() {
        var modal = document.getElementById("CodeModal");
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }
  return (
    <>
        <button id="myBtn" onClick={myFunction}>Ver</button>
        <div id="CodeModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Programación</h2>
                </div>
                <div className="modal-body">
                    <p>Estos son algunos conocimiento que he adquirido en el área de la programación</p>
                    <div className="spacing5" />
                    {programs.map((e) => {
                        return(
                            <>
                                <div className="spacing10" />
                                <div className="cart" key={e.id}>
                                    <div className="divicon" key={e.id}>
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