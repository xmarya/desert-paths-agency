import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import dictionary from "../dictionary/dictionary";

export default function copyToClipboard(copyRef: React.RefObject<HTMLElement | null>, language:"ar" | "en") {
  const {toastMessage} = dictionary[language];
  if (!copyRef.current) return "";
  const copyText = copyRef.current.textContent;
  const isCopied = copy(copyText);

  if(isCopied) toast.success(toastMessage)
}
