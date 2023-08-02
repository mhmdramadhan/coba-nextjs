import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function UserPage() {
  // User definition get from types.d.ts
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <br />
      <h2>
        <Link href="/" className='bg-blue-600 px-2 py-2 text-white rounded-lg mx-2 mt-2'>Back to home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`} className='text-white'>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
