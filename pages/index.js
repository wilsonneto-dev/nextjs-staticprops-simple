export default function DataContent({ readText }) {
  console.log(readText);
  return <>{ readText }</>;
}

export async function getServerSideProps() {
  const readText = "This is a test";
  return {
    props: {
      readText,
    },
  };
}