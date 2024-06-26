import { perfectSize } from "../styles/theme";
import Hide from "../assets/appImages/Hide.svg";
import Eye from "../assets/appImages/Eye.svg";
import Home from "../assets/appImages/Home.svg";
import HomeOutline from "../assets/appImages/HomeOutline.svg";
import FrameOutline from "../assets/appImages/FrameOutline.svg";
import Frame from "../assets/appImages/Frame.svg";
import SettingOutline from "../assets/appImages/SettingOutline.svg";
import Setting from "../assets/appImages/Setting.svg";
import SuggestionIcon from "../assets/appImages/SuggestionsIcon.svg";
import RateIcon from "../assets/appImages/RateIcon.svg";
import ShareIcon from "../assets/appImages/ShareIcon.svg";
import PrivacyPolicyIcon from "../assets/appImages/PrivacyPolicyIcon.svg";
import BackArrowIcon from "../assets/appImages/BackArrowIcon.svg";
import BusinessIcon from "../assets/appImages/BusinessIcon.svg";
import NoFrameImg from "../assets/appImages/NoFrameImg.svg";
import SearchIcon from "../assets/appImages/SearchIcon.svg";
import CameraIcon from "../assets/appImages/CameraIcon.svg";
import PersonalIcon from "../assets/appImages/PersonalIcon.svg";
import DeleteIcon from "../assets/appImages/DeleteIcon.svg";
import EditIcon from "../assets/appImages/EditIcon.svg";
import CheckIcon from "../assets/appImages/CheckIcon.svg";

export const image = {
  eye: <Eye width={perfectSize(20)} height={perfectSize(20)} />,
  hide: <Hide width={perfectSize(20)} height={perfectSize(20)} />,
  home: <Home width={perfectSize(20)} height={perfectSize(20)} />,
  homeOutline: <HomeOutline width={perfectSize(20)} height={perfectSize(20)} />,
  frame: <Frame width={perfectSize(20)} height={perfectSize(20)} />,
  frameOutline: (
    <FrameOutline width={perfectSize(20)} height={perfectSize(20)} />
  ),
  settingOutline: (
    <SettingOutline width={perfectSize(20)} height={perfectSize(20)} />
  ),
  setting: <Setting width={perfectSize(20)} height={perfectSize(20)} />,
  suggestionIcon: (
    <SuggestionIcon width={perfectSize(18)} height={perfectSize(18)} />
  ),
  rateIcon: <RateIcon width={perfectSize(18)} height={perfectSize(18)} />,
  shareIcon: <ShareIcon width={perfectSize(18)} height={perfectSize(18)} />,
  privacyPolicyIcon: (
    <PrivacyPolicyIcon width={perfectSize(18)} height={perfectSize(18)} />
  ),
  backArrowIcon: (
    <BackArrowIcon width={perfectSize(20)} height={perfectSize(20)} />
  ),
  businessIcon: (
    <BusinessIcon width={perfectSize(92)} height={perfectSize(92)} />
  ),
  noFrameImg: <NoFrameImg height={110} width={110} />,
  searchIcon: <SearchIcon width={15} height={15} />,
  cameraIcon: <CameraIcon width={35} height={30} />,
  personalIcon: <PersonalIcon width={92} height={92} />,
  deleteIcon: <DeleteIcon width={18} height={18} />,
  editIcon: <EditIcon width={18} height={18} />,
  checkIcon: <CheckIcon width={16} height={16} />,
};
