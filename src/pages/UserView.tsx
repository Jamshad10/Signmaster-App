import React, { useEffect, useState } from 'react';
import SignatureCanvas from './SignatureCanva';
import { useDispatch, useSelector } from 'react-redux';
import { FetchUserObj} from 'Redux/Action';
import {useParams, Link } from 'react-router-dom';


const UserList: React.FC = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [mobile, setMobile] = useState('');
    const [signature, setSignature] = useState('');

    const dispatch: any = useDispatch();
    const { code } = useParams();
    const userobj = useSelector((state: any) => state.user.userobj)

    useEffect(() => {
        dispatch(FetchUserObj(code))
    }, [code]);

    useEffect(() => {
        if (userobj) {
            setId(userobj.id);
            setName(userobj.name);
            setDate(userobj.date);
            setMobile(userobj.mobile);
            setSignature(userobj.signature);
        }
    }, [userobj]);

    return (
      <div className="max-w-md mx-auto my-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signature">
            Signature
          </label>
          <div className='border border-gray-600 rounded-xl'>
          <img 
          src={signature} 
          alt="signature" 
          />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <h2>{name}</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date collected
          </label>
          <h2>{date}</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile
          </label>
          <h2>{mobile}</h2>
        </div>

        <div className="flex items-center justify-end">
          <Link to={'/'}>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default UserList;
