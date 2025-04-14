import { useRef, useState } from "react";
import InputText from "./inputText"
import DeleteButton from "./Button";


export default function App() {

  const text = useRef('');

  const [Characters, setCharacter] = useState(0);
  const [Sentences, setSentences] = useState(0);

  const handelChanges = () => {
    const value = text.current.value;
    setCharacter(value.length);
    setSentences(value.split(/[.!?]+/).filter(Boolean).length)
  };

  const handelDelete=()=>{
    text.current.value = '';
    setCharacter(0);
    setSentences(0);
  }

  return (
    <div className="block">
    <div className="flex ml-[10%] mt-[10%]">
      <InputText text={"Type or post your text here......."} onChange={handelChanges} ref={text} />
      <div className="w-[300px] h-[200px] border-2 bg-white ml-2 rounded-md">
        <h1 className="text-2xl font-bold ml-24">Result</h1>
        <div className="flex ml-10">
          <div>
            <h3 className="text-[1rem] font-bold mt-8">Characters</h3>
            <p className="ml-8 text-2xl font-bold">{Characters}</p> 
            </div>
            <div className="ml-9 ">
            <h3 className="text-[1rem] font-bold mt-8">Sentences</h3>
            <p className="ml-8 font-bold text-2xl">{Sentences}</p> 
            </div>
          </div>
        </div>
      </div>
      <DeleteButton ButtonName={"Delete"} onDelete={handelDelete} />
    </div>
    
  )
}