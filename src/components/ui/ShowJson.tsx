// @ts-ignore
import formatHighlight from "json-format-highlight";

const customColorOptions = {
  keyColor: "#3a3a3a",
  numberColor: "blue",
  stringColor: "red",
  trueColor: "#00cc00",
  falseColor: "#ff8080",
  nullColor: "cornflowerblue",
};
// @ts-ignore
export default function ShowJson({ data }) {
  return (
    <pre
      dangerouslySetInnerHTML={{
        __html: formatHighlight(data && data, customColorOptions),
      }}
    />
  );
}
