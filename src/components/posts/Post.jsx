import '../styles.css'

export default function Post({ post, user }) {
    return (
        <div className='post-container' >
          <p className={'post-username'}>{user.name} <span style={{color: '#666'}}>@{user.username}</span></p>
        <div className={'post-header'}>
            <h2>{post.title}</h2>
        </div>
        <p className='post-body'>{post.body}</p>
      </div>
    );
  }