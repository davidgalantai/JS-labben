import { cap } from "../helpers/Format";

function Input(props) {
    return (
        <>
            <label>{cap(props.data)}<br />
                <input type="text" name={props.data} ref={props.reg} />
            </label><br />
        </>
    );
}
export default Input;