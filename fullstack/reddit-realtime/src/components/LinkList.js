import firebase from "@firebase/app";
import React, { useContext } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import UserContext from "../UserContext";
import Link from "./Link";
import "./LinkList.css";

const Links = ({ links }) => {
  return (
    <div id="linklist">
      {links.docs.map((doc) => (
        <Link key={doc.id} id={doc.id} {...doc.data()} />
      ))}
    </div>
  );
};

const LinksWithVotes = ({ links }) => {
  const { user } = useContext(UserContext);
  const [votes, loadingVotes /*, errorVotes*/] = useDocument(
    firebase.firestore().collection(`/users/${user}/votes`)
  );
  const linksWithVotes = links.docs.map((linkDoc) => {
    const link = linkDoc.data();
    link.id = linkDoc.id;
    link.loading = loadingVotes;
    if (votes) {
      const i = votes.docs.findIndex((voteDoc) => {
        return voteDoc.id === link.id;
      });
      const voteFound = i !== -1;
      if (voteFound) {
        link.upvoted = true;
      }
    }
    return link;
  });

  return (
    <div id="linklist">
      {linksWithVotes.map((link) => (
        <Link key={link.id} {...link} />
      ))}
    </div>
  );
};

function LinkList() {
  const { user } = useContext(UserContext);

  const [links, loadingLinks, errorLinks] = useCollection(
    firebase.firestore().collection("reddit").orderBy("votes", "desc")
  );

  if (errorLinks) {
    return <strong>Error: {JSON.stringify(errorLinks)}</strong>;
  }
  if (loadingLinks) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <LinksWithVotes links={links} />;
  } else {
    return <Links links={links} />;
  }
}

export default LinkList;
