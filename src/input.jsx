export default function Input({text}) {
    return (
        <div>
            <input type="text" name="input-userName" placeholder={text} className="border border-black p-2 rounded-sm flex justify-center items-center w-[300px] mx-10" />
        </div>
    )
}