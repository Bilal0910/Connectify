import React, { useEffect, useState } from "react";
import CreateSharpIcon from "@mui/icons-material/CreateSharp";
import ImageSearchSharpIcon from "@mui/icons-material/ImageSearchSharp";
import EventNoteSharpIcon from "@mui/icons-material/EventNoteSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import InputOption from "../InputOption/InputOption";
import "./FeedSection.css";
import Post from "../Posts/Post";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

const FeedSection = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Create a query for the "posts" collection
    const postsCollection = collection(db, "posts");
    const q = query(postsCollection, orderBy("timestamp", "desc"));

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      // Add a new post to the "posts" collection
      await addDoc(collection(db, "posts"), {
        name: "Bilal Nadeem",
        description: "This is a test post.",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
      setInput(""); // Clear input field after posting
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div className="feedsection">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateSharpIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Post something..."
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* Input Options */}
          <InputOption
            title="Photo"
            Icon={ImageSearchSharpIcon}
            color="#70b5f9"
          />
          <InputOption
            title="Video"
            Icon={SubscriptionsSharpIcon}
            color="#e69a37"
          />

          <InputOption
            title="Event"
            Icon={CalendarMonthSharpIcon}
            color="#46db73"
          />
          <InputOption
            title="Write Article"
            Icon={EventNoteSharpIcon}
            color="#eb3b3b"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map(
        ({ id, data: { name, description, message, photoUrl, timestamp } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
};

export default FeedSection;
