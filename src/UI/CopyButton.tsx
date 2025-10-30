import { PiCopySimpleBold } from "react-icons/pi";
import copyToClipboard from "../helpers/copyToClipboard";

export default function CopyButton({copyRef, language}:{copyRef: React.RefObject<HTMLElement | null>, language:"ar" | "en"}) {
  return (
    <button onClick={() => copyToClipboard(copyRef, language)}>
      <PiCopySimpleBold style={{ fill: "white", width:"2rem", height:"2rem"}} />
    </button>
  );
}
