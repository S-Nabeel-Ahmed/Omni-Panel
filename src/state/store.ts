import { configureStore } from '@reduxjs/toolkit'
import toastsReducer from './toasts'
import userReducer from './user'
import collectionsReducer from './collections'
import tokensReducer from './tokens'
import marketplaceReducer from './marketplace'
import propertiesReducer from './properties'
import blockReducer from './block'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    toasts: toastsReducer,
    user: userReducer,
    collections: collectionsReducer,
    tokens: tokensReducer,
    marketplace: marketplaceReducer,
    properties: propertiesReducer,
    block: blockReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
