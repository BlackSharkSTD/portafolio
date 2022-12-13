import React from 'react';
import { design } from '../../services/xconfig.jsx';
import { ProgressBar } from '../../components/ProgressBar';

export default function DesignPanel() {
    return (
        <>
            {design.map((e) => {
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
        </>
    )
}