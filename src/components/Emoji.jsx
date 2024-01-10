import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Emoji = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  return (
    <form className="flex items-start gap-2 pt-2rem">
      <div className="w-full flex items-end p-2 bg-todo rounded-sm relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write your text"
          className="w-full bg-transparent outline-none resize-none text-sm text-white"
          cols="30"
          rows="2"
        ></textarea>

        <span
          onClick={() => setShowEmoji(!showEmoji)}
          className="cursor-pointer hover:text-slate-300 text-white"
        >
          <BsEmojiSmile />
        </span>

        {showEmoji && (
          <div className="absolute top-[100%] right-2">
            <Picker
              data={data}
              emojiSize={20}
              emojiButtonSize={28}
              onEmojiSelect={addEmoji}
              maxFrequentRows={0}
            />
          </div>
        )}
      </div>

      {/* <button
        className="flex items-center capitalize gap-2 bg-yellow-200 text-black py-1.5
          px-3 rounded-sm hover:bg-yellow-100
          "
      >
        <AiOutlinePlus />
        {editTodo ? "update" : "add"}
      </button> */}
    </form>
  );
};

export default Emoji;