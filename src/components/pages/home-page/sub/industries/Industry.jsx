// import AccountBalance from '@mui/icons-material';
// import EmojiTransportation from '@mui/icons-material';
// import Commute from '@mui/icons-material';
// import Language from '@mui/icons-material';
// import Public from '@mui/icons-material';

import { Icon } from '@iconify/react';

export default function Industry({ industry }) {

  const iconComponents = industry.iconNames.map((iconName, index) => {
    // 1. Convert PascalCase to kebab-case
    const kebabCase = iconName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    
    // 2. Prepend 'ic:baseline-' for Google's official Material UI set
    const iconId = `ic:baseline-${kebabCase}`;
    return <Icon key={index} icon={iconId} className={`inline w-8 h-auto md:mr-2`} />;
  })

  return (
    <>
    {/* Empty grid cell in last row to center the distribution on larger screens */}
    {industry.id == 7 &&
      <div className="hidden lg:inline col-span-1"></div>
    }

    <div className="col-span-2">
      <div>
        <div className="hidden md:flex mb-4 place-content-center md:place-content-start bg-gradient-to-r from-black to-white bg-clip-text">
          {iconComponents}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mt-2"><span className="mr-3 md:hidden">{iconComponents}</span><span className="align-sub">{industry.title}</span></h2>
      </div>
      
      
      <p className="mt-4">{industry.blurb}</p>
    </div>

    {/* Empty grid cell in last row to center the distribution on larger screens */}
    {industry.id == 8 &&
      <div className="hidden lg:inline col-span-1"></div>
    }
    </>
  )
}