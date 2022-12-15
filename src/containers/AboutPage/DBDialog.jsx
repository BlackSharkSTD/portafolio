import React from 'react';
import '../../assets/styles/components.css';
import { database } from '../../services/xconfig.jsx';
import { ProgressBar } from '../../components/ProgressBar';

export default function DBDialog() {
    function myFunction() {
        var modal = document.getElementById("dbModal");
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
        <div id="dbModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Base de datos</h2>
                </div>
                <div className="modal-body">
                    <p>Estos son algunos conocimiento que he adquirido en el área de la programación</p>
                    <div className="spacing5" />
                    {database.map((e) => {
                        return(
                            <>
                                <div className="spacing10" />
                                <div className="cart">
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