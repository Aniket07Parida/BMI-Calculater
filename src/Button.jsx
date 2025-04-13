

export default function Button({ children, image }) {
    return (
        <div className="ml-10 mt-5">
            <button type="submit" className="text-xs border border-black p-1 rounded-2xl flex justify-center items-center w-[300px]"><img src={image} alt="my-icons" className="w-3.5 mr-2" /> {children}</button>
        </div>
    )
} 