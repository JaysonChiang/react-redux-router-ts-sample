import * as React from "react";

interface IProps {
    active: boolean;
    onClick: () => void;
    children: any;
}

/* tslint:disable */
const FilterLink = ({ active, onClick, children }: IProps) => {
    if (active) {
        return <span>{children}</span>;
    }
    return (
        <button
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </button>
    );
};

export default FilterLink;
