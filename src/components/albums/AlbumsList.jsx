import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAlbums } from "../../redux/albums/albumsReducer"
import { getUsers } from "../../redux/users/usersReducer"

import '../styles.css'

export default function AlbumsList () {
    const dispatch = useDispatch()
    const albums = useSelector((state) => state.albums.albums)
    console.log(albums)
    const users = useSelector((state) => state.users.users)

    const url = window.location.href
    const userId = url.split("/")[4]

    const filteredAlbumsByUserId = albums.filter((post) => String(post.userId) === userId)
    const user = users.filter((user) => String(user.id) === userId)[0]

    useEffect(() => {
        dispatch(getAlbums())
        dispatch(getUsers())
    }, [])

    return (
        <div className="albums-container">
            <p style={{fontSize: '30px'}}><strong>@{user?.username}</strong> albums</p>
            <ul>
                {filteredAlbumsByUserId.map(album => (
                    <li key={album?.id}>
                    <h3>{album?.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}