import React, { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import './styles.css'; // Add your custom styles here if needed

const users = [
  { id: '1', display: 'John Doe' },
  { id: '2', display: 'Jane Smith' },
  { id: '3', display: 'Mary Johnson' },
];

const HomeDecorBlog = () => {
  const [value, setValue] = useState('');

  return (
    <div className="home-decor-blog">
      <h2>Write a Comment</h2>
      <MentionsInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Mention @someone in your comment..."
        style={{
          control: {
            fontSize: 16,
            fontWeight: 'normal',
          },
          highlighter: {
            overflow: 'hidden',
          },
          input: {
            margin: 0,
          },
        }}
      >
        <Mention
          trigger="@"
          data={users}
          style={{
            backgroundColor: '#d1c4e9',
          }}
        />
      </MentionsInput>
    </div>
  );
};

export default HomeDecorBlog;
