import styled from "styled-components";

const InputColorLabel = styled.label`
  height: 32px;
  width: 32px;
  background-color : ${props => props.color};
  display : inline-block;
  > input {
      visibility : hidden;
  }
`;
/**
 * Overlay for input color in case enhancement is needed in the future
 */
interface Props{
    onChange : (color : string) => void
    value : string;
}
const ColorPicker = ({onChange, value} : Props) => (
    <InputColorLabel color={value}>
        <input value={value} type="color" onChange={event => onChange(event.target.value)}/>
    </InputColorLabel>
);

export default ColorPicker;
