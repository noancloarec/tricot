import React from 'react';

interface Props {
    colorPattern: string[];
    zoom: number;
}
const ColorPatternDisplay = ({ colorPattern, zoom }: Props) => {
    const height = 10; //* zoom / 100;
    const nbRows = 100;// Math.floor( 130 / height) + 1;
    const colorsDisplayed = Array(nbRows).fill(0).map((_, i) => colorPattern[i % colorPattern.length]);
    return (
        <svg viewBox={`0 0 100 ${130 * 100/zoom}`} preserveAspectRatio="none">
            {colorsDisplayed.map((color, i) => (
                <rect key={i} width="100" height={height} x="0" y={height * i} fill={color} stroke={color} />
            ))}
        </svg>
    );
};

export default  React.memo(ColorPatternDisplay, (prevprops : Props, props : Props)=> {
    return prevprops.colorPattern.length === props.colorPattern.length && prevprops.colorPattern.every((color, i) => color === props.colorPattern[i]) && prevprops.zoom===props.zoom;
});