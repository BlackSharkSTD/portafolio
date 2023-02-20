import React from 'react';
import { electronic } from '../../../services/xconfig.jsx';
import { ProgressBar } from '../../../components/ProgressBar';
import '../../../assets/styles/components.css';

export default function ElectronicDialog() {
    function myFunction() {
        var modal = document.getElementById("eleModal");
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
        <div id="eleModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Electronica</h2>
                </div>
                <div className="modal-body">
                    {electronic.map((e) => {
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