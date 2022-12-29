import React from 'react';
import { videoeditor } from '../../../services/xconfig.jsx';
import { ProgressBar } from '../../../components/ProgressBar';
import '../../../assets/styles/components.css';

export default function VideoDialog() {
    function myFunction() {
        var modal = document.getElementById("VideoModal");
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
        <div id="VideoModal" className="modal" style={{display: 'none'}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Edición de video</h2>
                </div>
                <div className="modal-body">
                    {videoeditor.map((e) => {
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