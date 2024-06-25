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
};
