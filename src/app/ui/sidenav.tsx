import Link from 'next/link';
import NavLinks from './nav-links';
import ProfilePicture from './profile-picture';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
      className="mb-2 flex items-center justify-center rounded-md bg-indigo-950 p-2 h-[12rem] md:h-[18rem]"
      >
          <ProfilePicture />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex space-x-3 mt-2">
              <Link href="https://www.linkedin.com/in/mohammed-shabaj-ahmed/" target="_blank">
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={100} // These are max dimensions
                  height={100}
                  className="h-10 w-10"
                />
              </Link>
              <Link href="https://github.com/shabaj-ahmed" target="_blank">
                <Image
                  src="/icons/github.png"
                  alt="GitHub"
                  width={100} // These are max dimensions
                  height={100}
                  className="h-10 w-10"
                />
              </Link>
              <Link href="https://orcid.org/0009-0006-6803-6108" target="_blank">
                <Image
                  src="/icons/orcid.png"
                  alt="ORCID"
                  width={100} // These are max dimensions
                  height={100}
                  className="h-10 w-10"
                />
              </Link>
              <Link href="https://scholar.google.com/citations?user=EyG48NUAAAAJ&hl=en" target="_blank">
                <Image
                  src="/icons/google-scholar.png"
                  alt="Google Scholar"
                  width={100} // These are max dimensions
                  height={100}
                  className="h-10 w-10"
                  />
              </Link>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
