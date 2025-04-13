export default function NextButton({ ButtonName }) {
    return (
        <div>
            <button className="border border-black p-1.5 rounded-2xl flex justify-center items-center w-[300px] my-4 mx-10 bg-black text-white">{ButtonName}</button>
        </div>
    )
}