import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../component/features/counter/counterSlice'
import postsReducer from '../../component/features/posts/postsSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  }
})