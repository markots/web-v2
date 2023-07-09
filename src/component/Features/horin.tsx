import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const HorizontalScrollContainer = ({ children }: Props) => {
    return (
        <div className="flex overflow-x-auto whitespace-nowrap">
            {children}
        </div>
    );
};

export default HorizontalScrollContainer;
