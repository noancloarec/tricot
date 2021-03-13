import ColorPicker from "./color-picker";

interface Props{
    colorPattern : string[]
    onColorPatternChange : (pattern : string[]) => void
}

const ColorPatternInput = ({colorPattern, onColorPatternChange} : Props) => {
    return(
        <div>
            {colorPattern.map((_, index) => (
                <ColorPicker key={index} onChange={color => onColorPatternChange(
                    [...colorPattern.slice(0, index) , color, ...colorPattern.slice(index+1) ]
                    )} />
            ))}
        </div>
    );
};

export default ColorPatternInput;
