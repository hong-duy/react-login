import React from 'react';
import '../Loading/Loading.scss';

export default function Loading({ totalItem, col, clsName }: any) {
    const item = (key: number, col: number) => (
        <div className={`col-${col} item `} key={key}>
            <div className="timeline-wrapper">
                <div className="timeline-item">
                    <div className="animated-background">
                        <div className="background-masker header-image"></div>
                        <div className="background-masker content-top"></div>
                        <div className="background-masker content-second-line"></div>
                        <div className="background-masker content-second-end"></div>
                        <div className="background-masker content-third-line"></div>
                        <div className="background-masker desc-first-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )

    function renderItems() {
        if (typeof totalItem === 'undefined') return

        let i = 0, arrItem = [];
        for (; i < totalItem; i++) {
            arrItem.push(item(i, col));
        }

        return arrItem
    }

    return (
        <div className={clsName ?? 'row'}>
            {renderItems()}
        </div>
    );
}
