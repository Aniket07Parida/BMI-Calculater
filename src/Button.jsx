export default function DeleteButton({ButtonName,onDelete}) {
    return (
        <div>
            <button type="submit" className="bg-red-500 text-white rounded px-4 py-2 ml-40 mt-7" onClick={onDelete}>{ButtonName}</button>
        </div>
    )
}