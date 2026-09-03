// Public Sector


// Higher Ed
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DrawIcon from '@mui/icons-material/Draw';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const higherEdIcons = [SchoolIcon, EditIcon, EditNoteIcon, DrawIcon, MenuBookIcon, LocalLibraryIcon, LibraryBooksIcon, AutoStoriesIcon];

// Healthcare
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicationIcon from '@mui/icons-material/Medication';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
const healthcareIcons = [MedicalInformationIcon, LocalHospitalIcon, MedicationIcon, VolunteerActivismIcon, MonitorHeartIcon];

// Financial
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PaymentsIcon from '@mui/icons-material/Payments';
import PaymentIcon from '@mui/icons-material/Payment';
import SavingsIcon from '@mui/icons-material/Savings';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
const financialIcons = [MonetizationOnIcon, AttachMoneyIcon, AccountBalanceIcon, LocalAtmIcon, PaymentsIcon, PaymentIcon, SavingsIcon, CreditScoreIcon];

// Aerospace & Defense
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ShieldIcon from '@mui/icons-material/Shield';
import FlightIcon from '@mui/icons-material/Flight';
import RadarIcon from '@mui/icons-material/Radar';
const aerospaceDefenseIcons = [MilitaryTechIcon, ShieldIcon, FlightIcon, RadarIcon];

// Cybersecurity
import SecurityIcon from '@mui/icons-material/Security';
import PrivateConnectivityIcon from '@mui/icons-material/PrivateConnectivity';
import PatternIcon from '@mui/icons-material/Pattern';
import LockIcon from '@mui/icons-material/Lock';
import LockPersonIcon from '@mui/icons-material/LockPerson';
const cybersecurityIcons = [SecurityIcon, PrivateConnectivityIcon, PatternIcon, LockIcon, LockPersonIcon];

// Retail & Hospitality
import StorefrontIcon from '@mui/icons-material/Storefront';
import StoreIcon from '@mui/icons-material/Store';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LuggageIcon from '@mui/icons-material/Luggage';
import VillaIcon from '@mui/icons-material/Villa';
const retailHospitalityIcons = [StorefrontIcon, StoreIcon, LocalMallIcon, ShoppingBagIcon, LocalGroceryStoreIcon, LocalOfferIcon, ShoppingCartIcon, RoomServiceIcon, LuggageIcon, VillaIcon];

// Exec Leadership
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupsIcon from '@mui/icons-material/Groups'; // Note: This duplicate import was in your snippet
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
const execLeadershipsIcons = [LeaderboardIcon, GroupsIcon, SupervisedUserCircleIcon, RecentActorsIcon];


export default function Industries() {

  const iconArrays = [publicSectorIcons, higherEdIcons, healthcareIcons, financialIcons, aerospaceDefenseIcons, cybersecurityIcons, retailHospitalityIcons, execLeadershipsIcons]



  return (
    <div className="bg-[radial-gradient(#ffffff,#DCDECD)] py-6 px-12" >
      <h1 className="text-center text-4xl md:text-5xl font-semibold tracking-wide ">Industries</h1>

      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="">
          <img></img>
          <p>Lorem ipsum.</p>
        </div>
        <div className="">
          <img></img>
          <p>Lorem ipsum.</p>      
        </div>
        <div className="">
          <img></img>
          <p>Lorem ipsum.</p>
        </div>
        <div className="">
          <img></img>
          <p>Lorem ipsum.</p>
        </div>
        <div className="">
          <img></img>
          <p>Lorem ipsum.</p>
        </div>
      </div>
    </div>
  )
}