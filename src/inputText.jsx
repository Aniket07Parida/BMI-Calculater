export default function InputText({ ref, text,onChange }) {
    return (
        <div>
            <input type="text" name="text" placeholder={text} className="w-[350px] h-[200px] border-2 bg-stone-50 rounded-md flex justify-start items-start" ref={ref} onChange={onChange} />
        </div>
    )
}