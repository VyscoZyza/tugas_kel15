import React from "react";
import { useState } from "react";
import Random from "./Random";
import Tag from "./Tag";

export default function Index() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [status, setStatus] = useState(true);

  return (
    <div className="container">
      {status && (
        <>
          <div>
            <input
              className="form__input"
              placeholder="Nama"
              size="50"
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
          </div>
        </>
      )}
      {show && (
        <>
          <p className="title">Hello {user}</p>
          <Random />
          <Tag />
        </>
      )}

      <button
        className="Button mt"
        onClick={() => {
          setShow(!show);
          setStatus(!status);
        }}
      >
        {show ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
