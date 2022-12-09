import React from 'react';
import { programs } from '../../services/xconfig';
import { ProgressBar } from '../../components/ProgressBar';
import { FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import '../../assets/styles/components.css';

export default function CodeSection() {
  return (
    <>
        <div className="spacing10" />
        <div className="cart">
            <div className="divicon">
                <FaHtml5 className="icon-html" />
            </div>
            <ProgressBar title="HTML" size="95%" color="#FF5722" />
        </div>
        <div className="spacing10" />
        <div className="cart">
            <div className="divicon">
                <FaCss3Alt className="icon-css" />
            </div>
            <ProgressBar title="CSS3" size="85%" color="#2196F3" />
        </div>
        <div className="spacing10" />
        <div className="cart">
            <div className="divicon">
                <FaJsSquare className="icon-js" />
            </div>
            <ProgressBar title="Javascript" size="80%" color="#F7DE1F" />
        </div>
        <div className="spacing10" />
            <div className="cart">
            <div className="divicon">
                <FaNodeJs className="icon-node" />
            </div>
            <ProgressBar title="NodeJS" size="50%" color="#82C000" />
        </div>
        <div className="spacing10" />
            <div className="cart">
            <div className="divicon">
                <FaReact className="icon-react" />
            </div>
            <ProgressBar title="React" size="90%" color="#61DAFB" />
        </div>
        {programs.map((e) => {
            return(
                <>
                    <div className="spacing10" />
                    <div className="cart">
                        <div className="divicon">
                            
                        </div>
                        <ProgressBar title={e.title} size={e.porcent} color={e.color} />
                    </div>
                </>
            );
        })};
    </>
  )
}