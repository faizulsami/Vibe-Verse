import { useState } from 'react';
import ProfileModal from '../Profile Modal/ProfileModal';
import { MdEditSquare } from 'react-icons/md'
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div style={{ backgroundColor: 'var(--cardColor)', width: '90%' }} className="flex flex-col gap-3 p-4 rounded-2xl my-5">
      <div className="flex justify-between items-center">
        <h4 className='font-bold lg:text-xl md:text-md'>Your Info</h4>
        <div className='cursor-pointer'>
          <MdEditSquare
            size={20}
            style={{ color: '#a6ddf0' }}
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info lg:text-xl md:text-sm">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info lg:text-xl md:text-sm">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info lg:text-xl md:text-sm">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <a href="#_" className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#a6ddf0] text-[#a6ddf0] hover:text-white lg:w-24 md:w-20 text-center lg:mt-10 md:mt-4 md:ms-14 lg:ms-0">
        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#a6ddf0] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span className="relative text-[#a6ddf0] transition duration-300 group-hover:text-white ease">Login</span>
      </a>
    </div>
  );
};

export default InfoCard;