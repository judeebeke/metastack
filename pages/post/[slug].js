import React from 'react';
import { Author, Categories, CommentForm, Comments, PostDetail, PostWidgets } from '../components/Index';
import { getPostDetails, getPosts } from '@/services';

const PostDetails = (posts) => {
   
  return (
    <div className="container mx-auto px-10 mb-8"
    >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                <PostDetail post={posts.posts} />
                <Author author={posts.posts.author} />
                <CommentForm slug={posts.posts.slug}  />
                <Comments slug={posts.posts.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                    <PostWidgets slug={posts.posts.slug} categories={posts.posts.categories.map((category) => category.slug)} />
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails;

export const getStaticProps = async ({params}) => {
  const data = (await getPostDetails(params.slug)) || []; 

   return {
   props: {
    posts: data,
     },
   }
  }

  export const getStaticPaths = async () => {
    const posts = await getPosts();
    
    return {
        paths: posts.postsConnection.edges.map(({node: {slug}}) => ({params: {slug}})),
        fallback: false,
    }
  }