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
    return <Icon key={index} icon={iconId} className={`inline w-8 h-auto mr-2`} />;
  })

  return (
    <>
    {industry.id == 7 &&
      <div className="hidden lg:inline col-span-1"></div>
    }
    <div className="col-span-2">
      <div className="mb-4">
        {iconComponents}
      </div>
      <h2 className="text-3xl font-bold mt-2">{industry.title}</h2>
      
      <p className="mt-4">{industry.blurb}</p>
    </div>
    {industry.id == 8 &&
      <div className="hidden lg:inline col-span-1"></div>
    }
    </>
  )
}