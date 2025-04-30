import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface Props {
  onClick: (status: boolean) => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toogle = () => {
    setStatus(!status);
    onClick(!status);
  };

  if (status) return <AiFillHeart color="#ff6b81" size={40} onClick={toogle} />;
  else return <AiOutlineHeart size={40} onClick={toogle} />;
};

export default Like;
