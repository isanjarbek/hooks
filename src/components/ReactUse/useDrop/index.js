import { useDropArea } from "react-use";

const Demo = () => {
  const [bond, state] = useDropArea({
    onFiles: (files) => console.log("files", files),
    onUri: (uri) => console.log("uri", uri),
    onText: (text) => console.log("text", text),
  });
  console.log(state);
  return <div {...bond}>Drop something here.</div>;
};
export default Demo;
