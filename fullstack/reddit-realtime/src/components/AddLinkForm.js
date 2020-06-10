import React, { useContext, useRef } from "react";
import firebase from "@firebase/app";
import UserContext from "../UserContext";
import "./AddLinkForm.css";

function AddLinkForm() {
  const { user } = useContext(UserContext);
  const urlRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const url = urlRef.current.value;
    if (url) {
      firebase.firestore().collection(`/reddit/`).doc().set({
        url: urlRef.current.value,
        votes: 0,
        by: user,
      });
      urlRef.current.value = "";
    }
  };

  return (
    <div className="addlink">
      <form onSubmit={submit}>
        <p>
          <input type="text" ref={urlRef} />
        </p>
        <p>
          <button>Add New Link</button>
        </p>
      </form>
    </div>
  );
}

export default AddLinkForm;
