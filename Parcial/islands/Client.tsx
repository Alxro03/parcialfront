import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";


export default function Home() {

    const showinfobox = (name: string, email: string) => {
        return(
            <div>

            </div>
        );
    }


    return (
      <div className="bigcontainer">
        <div className="mainheader">
        <a href="/agendacsr" className="mainlink">
          Agenda client side
        </a>
        <a href="/agendassr" className="mainlink">
          Agenda server side
        </a>
        </div>
        <div className="form">
            <h1 className="formheader">
                Add new Contact
            </h1>

            <form method= "post">
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

                <input type="submit"
                className="submitbutton"
                value="submit"
                >
                </input>
            </form>
            
        </div>
      </div>
    );
  }
  