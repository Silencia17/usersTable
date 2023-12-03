import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../../redux/posts/postsReducer"
import { getUsers } from "../../redux/users/usersReducer"
import Post from "./Post"

export default function PostList () {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.posts)
    const users = useSelector((state) => state.users.users)

    const url = window.location.href
    const userId = url.split("/")[4]

    const filteredPostsByUserId = posts.filter((post) => String(post.userId) === userId)
    const user = users.filter((user) => String(user.id) === userId)[0]

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getPosts())
    }, [])

    return (
        <div style={{padding: '40px'}}>
            {filteredPostsByUserId.map((post, index) => <Post key={index} post={post} user={user}/>)}
        </div>
    )
}