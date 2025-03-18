import { client } from '@repo/db';

const Page = async () => {
  const data = await client.user.findMany();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10rem',
      }}
    >
      {data.map(data => (
        <h1>{data.name}</h1>
      ))}
    </div>
  );
};

export default Page;
