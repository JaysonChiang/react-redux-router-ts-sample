import * as React from "react";

interface IProps {
    active: boolean;
    onClick: () => void;
    children: any;
}

/* tslint:disable */
const FilterLink = ({ active, onClick, children }: IProps) => {
    if (active) {
        return (
            <button className="btn btn-secondary" disabled={true}>
                {children}
            </button>
        );
    }
    return (
        <button
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            className="btn btn-primary"
        >
            {children}
        </button>
    );
};

export default FilterLink;
