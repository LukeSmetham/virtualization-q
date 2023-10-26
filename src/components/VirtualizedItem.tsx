import { ChangeEvent, HTMLAttributes, useRef } from "react";

interface VirtualizedItemProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    checked?: boolean;
    onCheckboxChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const VirtualizedItem = ({ label, checked, onCheckboxChange, style }: VirtualizedItemProps) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className="virtual-item" onClick={() => ref.current?.click()} style={style}>
            <input
                id={`checkbox-${label}`}
                ref={ref}
                type="checkbox"
                onChange={onCheckboxChange}
                checked={checked}
            />
            {label}
        </div>
    )
};

export default VirtualizedItem;