import { lusitana } from './fonts';

import Image from 'next/image';

export default function ProfilePicture() {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <Image
        src="/profile_picture.jpg"
        alt="My Profile Picture"
        width={100}
        height={100}
        className="
          rounded-full object-cover
          w-28 h-28
          md:w-40 md:h-40
        "
      />
      <div className={`text-center`}>
        <p className={`${lusitana.className} text-purple-200 text-lg md:text-xl`}>
          Mohammed Shabaj Ahmed
        </p>
        <p className="text-indigo-300 text-sm md:text-base italic text-gray-200">
          Professional Problem Solver
        </p>
      </div>
    </div>
  );
}
