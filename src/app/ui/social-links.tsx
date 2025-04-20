// app/ui/social-links.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-3 mt-2">
      <Link href="https://www.linkedin.com/in/mohammed-shabaj-ahmed/" target="_blank">
        <Image src="/icons/linkedin.png" alt="LinkedIn" width={100} height={100} className="h-10 w-10" />
      </Link>
      <Link href="https://github.com/shabaj-ahmed" target="_blank">
        <Image src="/icons/github.png" alt="GitHub" width={100} height={100} className="h-10 w-10" />
      </Link>
      <Link href="https://orcid.org/0009-0006-6803-6108" target="_blank">
        <Image src="/icons/orcid.png" alt="ORCID" width={100} height={100} className="h-10 w-10" />
      </Link>
      <Link href="https://scholar.google.com/citations?user=EyG48NUAAAAJ&hl=en" target="_blank">
        <Image src="/icons/google-scholar.png" alt="Google Scholar" width={100} height={100} className="h-10 w-10" />
      </Link>
    </div>
  );
}
