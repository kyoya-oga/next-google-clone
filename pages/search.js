import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';

export default function search() {
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>
      <SearchHeader />
    </>
  );
}
