import React from 'react';
import { systems } from '../../services/xconfig.jsx';
import { ProgressBar } from '../../components/ProgressBar';

export default function OSPanel() {
    return (
        <>
            {systems.map((e) => {
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