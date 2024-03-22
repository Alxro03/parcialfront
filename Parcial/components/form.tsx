import { FunctionComponent } from "preact";

const Addform: FunctionComponent= () =>{
    return(
        <form className="addform" action="/add" method="post">
            <input className="textbox"
                type="text"
                size="60"
                placeholder="name" required
                name="name1"
                >
                </input>
                
                <input className="textbox"
                type="email"
                size="60"
                placeholder="email" required
                name="email"
                >
                </input>

                <button type="submit"
                className="submitbutton"
                >
                    Submit
                </button>
        </form>
    );
}

export default Addform;