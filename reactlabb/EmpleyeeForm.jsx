import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Input from "./Input";

function EmployeeForm(props) {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = data => {
        props.onSubmit(data); // send form data to parent
    }

    useEffect(() => {
        // fill form fields if data is set (edit)
        if (props.data) {
            Object.entries(props.data).map((kvPair) => setValue(kvPair[0], kvPair[1])); 
        }
    }, [props.data, setValue]);

    return (
        <div className={props.className}>
            <img className="exit icon" onClick={() => props.onExit()} alt="close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABYElEQVRYR92Y0Q3CMAxErxswCiuwCYzAJIwAm7ACozACykek0jbxne1Ihfy1is6vl8SOO2HnY9o5HxjAA4AbgCuAd9IH0ZoWYBF6AjgCeAE4JUBKmj3AuVA1Lgopa7YAt4SikC7NLcCekBfSrbkEZIRUyJDmHFARYiHDmnPAO4CzI420Do4HroZ/ALiUh6iDLScjcF8fHNmDS7OrcHlfc6e6IKvV8J7iVuASoIyS2NWxuVU8eVANzMxvFgC1kjDB1Dnd6qTUYjUwM98snRZgCRI5kT1IE26ZZnpi2ZAUnAKY6SQNpwJmQEpwfweYtQ8lF5lTnLG0rbJo9jgMYJZzLkgLcBRc6xa0SnU/W+pGO0cv989dtyLODb+wZsDVtJGm9fdNk1UVPE6mNU0WXD2pCmRa08TCKZBpTZMKx0CmNU1euB5kWtMUhduCNDWty0K9au32FzDTOg6dwzg4FMAS/wCCTKIpRugyiAAAAABJRU5ErkJggg==" />
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    props.inputs.map((input) => {
                        return <Input key={input} data={input} reg={register} />;
                    })                
                }
                <input ref={register} type="hidden" name="index" />
                <input className="button" type="submit" value={props.buttonValue} />
            </form>
        </div>
    );
}

export default EmployeeForm;