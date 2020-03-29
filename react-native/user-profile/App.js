import React from "react";
import UserProfile from "./components/UserProfile";

const harriet = {
  name: "Harriet Potter",
  avatar: "http://files.pauek.info/harriet.jpg",
  background: "http://files.pauek.info/hogwarts.jpg",
  followers: 57891,
  following: 571,
  about:
    "Duis laboris eu incididunt laboris. " +
    "Enim duis ipsum ea anim deserunt cillum " +
    "nostrud mollit sint velit pariatur ullamco. " +
    "Est nisi culpa sint dolor sint incididunt in esse est duis aliquip. " +
    "Elit consequat consequat ad eiusmod ullamco. " +
    "Nisi ad dolor eu cillum velit id minim consequat Lorem aliquip amet. " +
    "Culpa adipisicing pariatur labore ipsum aute officia reprehenderit " +
    "do ullamco dolor qui nostrud nisi velit."
};

export default function App() {
  return <UserProfile user={harriet} />;
}
