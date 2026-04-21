import Link from 'next/link';
import { auth, signIn, signOut } from '@/lib/auth';

function SignInButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <button type="submit" className="text-white">
        ログイン
      </button>
    </form>
  )
}

function SignOutButton({ name }: { name?: string | null }) {
  return (
    <form action={async () => {
      'use server';
      await signOut();
    }}
    >
      <button type="submit" className='text-white'>
        {name}をログアウト
      </button>
    </form>
  )
}

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-gray-800 text-white">
      <div className="mx-auto py-2 px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Forms
        </Link>
        <div>{session?.user ? <SignOutButton name={session.user.name} /> : <SignInButton />}</div>
      </div>
    </header>
  );
}