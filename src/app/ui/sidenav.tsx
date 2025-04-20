import NavLinks from './nav-links';
import ProfilePicture from './profile-picture';
import SocialLinks from './social-links';


export default function SideNav() {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-3 py-4 md:px-2">
      <div
      className="mb-2 flex items-center justify-center rounded-md bg-indigo-950 p-2 h-[12rem] md:h-[18rem]"
      >
          <ProfilePicture />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="hidden md:block">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
