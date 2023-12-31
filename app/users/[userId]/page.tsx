import getUser from '@/lib/getUser';
import getUserPost from '@/lib/getUserPost';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    userId: string;
  };
};

// dynamic metadata
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  // handle an error response
  if (!user) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  // set Promise data
  // const [user, userPosts] = await Promise.all([userData, userPostData]);

  const user = await userData;

  if (!user) return notFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}

// SSG Render
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map((user) => ({ userId: user.id.toString() }));
}
