import ColorPicker from "./color-picker";

interface Props{
    colors : string[]
    onColorsChange : (pattern : string[]) => void
}

const MultiColorInput = ({colors, onColorsChange} : Props) => {
    return(
        <div>
            {colors.map((_, index) => (
                <ColorPicker key={index} value={colors[index]} onChange={color => onColorsChange(
                    [...colors.slice(0, index) , color, ...colors.slice(index+1) ]
                    )} />
            ))}
        </div>
    );
};

export default MultiColorInput;
