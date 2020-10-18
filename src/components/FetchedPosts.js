import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../redux/actions";
import { Loader } from "./Loader";

export default function () {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <Loader />
  }

  if (!posts.length) {
    return <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchPosts())}
    >Load</button>
  }

  return posts.map(post => <Post post={post} key={post.id} />)
}