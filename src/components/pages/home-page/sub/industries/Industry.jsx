// import AccountBalance from '@mui/icons-material';
// import EmojiTransportation from '@mui/icons-material';
// import Commute from '@mui/icons-material';
// import Language from '@mui/icons-material';
// import Public from '@mui/icons-material';

import { Icon } from '@iconify/react';

export default function Industry() {

  const title = "Public"
  const blurb = "Help government agencies modernize critical systems, strengthen operations, and service their communities with experienced technology professionals and tailored consulting solutions.​"

  const icons = ["AccountBalance", "EmojiTransportation", "Commute", "Language", "Public"]
  const iconComponents = icons.map((icon, index) => {
        // 1. Convert PascalCase to kebab-case
    const kebabCase = icon.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    
    // 2. Prepend 'ic:baseline-' for Google's official Material UI set
    const iconId = `ic:baseline-${kebabCase}`;
    return <Icon key={index} icon={iconId} className={`inline w-6 h-auto mx-1`} />;
  })

  console.log(iconComponents)

  return (
    <div className="">
      
      {iconComponents}
      <h2 className="inline text-3xl font-bold ml-4 align-middle">{title}</h2>
      
      <p className="mt-4">{blurb}</p>
    </div>
  )
}