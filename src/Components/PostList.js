import React, { Component } from 'react';

import PostItem from './PostItem';
import './PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://i.pravatar.cc/150?img=1',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=1',
            },
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi odit earum, similique quas consequatur, aperiam, quam molestias dolores voluptatibus vel rerum hic! Consequatur repellendus alias magnam veritatis non in.',
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=1',
            },
            content:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi odit earum, similique quas consequatur, aperiam, quam molestias dolores voluptatibus vel rerum hic! Consequatur repellendus alias magnam veritatis non in.',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://i.pravatar.cc/150?img=2',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://i.pravatar.cc/150?img=3',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map((post) => (
          <PostItem key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
