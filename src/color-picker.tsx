/**
 * Overlay for input color in case enhancement is needed in the future
 */
interface Props{
    onChange : (color : string) => void
}
const ColorPicker = ({onChange} : Props) => (
    <input type="color" onChange={event => onChange(event.target.value)}/>
);

export default ColorPicker;
