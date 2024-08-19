import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MentionsInput, Mention } from "react-mentions";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css"; // Import the styles
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { useProfileData } from "../../contexts/ProfileDataContext";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  // Access popularProfiles from the context
  const { popularProfiles } = useProfileData();

  // Generate the mentions data using only profile IDs and usernames
  const mentionableUsers = useMemo(() => {
    if (!popularProfiles?.results) return [];
    return popularProfiles.results.map((profile) => {
      const username = profile.owner || ""; // Fallback to an empty string if owner is undefined or null
      const id = profile.id || "";
      return {
        id: String(id), // Ensure the id is always a string
        display: String(username), // Ensure the display is always a string
      };
    });
  }, [popularProfiles]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      // Handle errors (like network issues or server errors)
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <div className={styles.Form} style={{ flex: 1 }}>
            <MentionsInput
              value={content}
              onChange={handleChange}
              placeholder="Mention @someone and write a comment..."
              className={styles.mentionsInput}
              markup="@__display__"
            >
              <Mention
                trigger="@"
                data={mentionableUsers} // Use the fetched users
                style={{
                  backgroundColor: "#d1c4e9",
                }}
              />
            </MentionsInput>
          </div>
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
