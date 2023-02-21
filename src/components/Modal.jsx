import * as React from 'react';
import Codes from '../containers/AboutPage/CodeSection';
import '../assets/styles/components.css';

export default function Modal() {
    function myFunction() {
        var modal = document.getElementById("myModal");
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }
  return (
    <>
        <button id="myBtn" onClick={myFunction}>Open Modal</button>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={myFunction}>&times;</span>
                    <h2>Programación</h2>
                </div>
                <div className="modal-body">
                    <p>Estos son algunos conocimiento que he adquirido en el área de la programación</p>
                    <div className="spacing5" />
                    <Codes />
                </div>
            </div>
        </div>
    </>
  )
}
