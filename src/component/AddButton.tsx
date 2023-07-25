import { Link } from "react-router-dom";


const AddButton = () => {
    return (
        <div>
            <Link to={'/user/add'} className="flex items-center justify-end">
                <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mr-28  rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Add +
                </button>
            </Link>
        </div>
    )
}

export default AddButton;