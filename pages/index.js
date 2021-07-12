import Head from 'next/head';
import Image from 'next/image';
import Chats from '../components/chats';
import Details from '../components/details';
import Messages from '../components/messages';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex h-full p-3 gap-2">
        <div className="flex-none h-full w-1/4">
          <Chats />
        </div>
        <div className="flex-grow h-full rounded-lg bg-gray-100">
          <Messages />
        </div>
        <div className="flex-none h-full w-1/4">
          <Details />
        </div>
      </div>
    </div>
  );
}
