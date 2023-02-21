import React from 'react';
import { office } from '../../../services/xconfig.jsx';
import { ProgressBar } from '../../../components/ProgressBar';
import '../../../assets/styles/components.css';

export default function OfficeDialog() {
    function myFunction() {
        var modal = document.getElementById("officeModal");
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
        <div id="officeModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Paqueteria de Office</h2>
                </div>
                <div className="modal-body">
                    {office.map((e) => {
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
