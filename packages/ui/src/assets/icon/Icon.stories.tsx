import { Meta } from "@storybook/react";
import { Table } from "../../components/common/Table";
import { AddIcon } from "./AddIcon";
import { BreakLinkIcon } from "./BreakLinkIcon";
import { CalendarIcon } from "./CalendarIcon";
import { CloseIcon } from "./CloseIcon";
import { EditIcon } from "./EditIcon";
import { GrayRoundArrow } from "./GrayRoundArrow";
import { InfoIcon } from "./InfoIcon";
import { KkamangIcon } from "./KkamangIcon";
import { PlayIcon } from "./PlayIcon";
import { RefreshIcon } from "./RefreshIcon";
import { RoundArrow } from "./RoundArrow";
import { AngleBracket } from "./AngleBracket";
import { FillNRoundedArrow } from "./FillNRoundedArrow";
import { AccountIcon } from "./AccountIcon";
import { LogoutIcon } from "./LogoutIcon";
import { RoundMinus } from "./RoundMinus";
import { AppleIcon } from "./SnsIcon/AppleIcon";
import { FaceBookIcon } from "./SnsIcon/FaceBookIcon";
import { GoogleIcon } from "./SnsIcon/GoogleIcon";
import { LineIcon } from "./SnsIcon/LineIcon";
import { InstagramIcon } from "./SnsIcon/InstagramIcon";
import { TooltipIcon } from "./TooltipIcon";
import { DropdownIcon } from "./DropdownIcon";
import { ArrowIcon } from "./ArrowIcon";
import { RoundPlus } from "./RoundPlus";
import { RoundClose } from "./RoundClose";
import { CheckIcon } from "./CheckIcon";
import { CoinIcon } from "./CoinIcon";
import { TextLogo } from "./TextLogo";
import { EmptyCircleCheckbox } from "./EmptyCircleCheckbox";
import { NaverIcon } from "./SnsIcon/NaverIcon";
import { KakaoIcon } from "./SnsIcon/KakaoIcon";
import { WhiteCloseIcon } from "./WhiteCloseIcon";
import { WhiteRoundArrow } from "./WhiteRoundArrow";

export default {
  title: "common/Icon",
  argTypes: {}
} as Meta;

const Template = () => {
  return (
    <>
      <style>{`
      table{
      width:500px!important;
      }
      td:nth-child(3) {
      background-color: var(--gray-20);
      }td:nth-child(4) {
      background-color: var(--gray-50);
      }td:nth-child(5) {
      background-color: var(--real-black);
      }
      `}</style>
      <Table.Wrapper>
        <Table.Thead>
          <tr>
            <th>Icon Name</th>
            <th style={{ width: 100 }}>흰 배경</th>
            <th style={{ width: 100 }}>gray-20 배경</th>
            <th style={{ width: 100 }}>gray-50 배경</th>
            <th style={{ width: 100 }}>검은 배경</th>
          </tr>
        </Table.Thead>
        <Table.Tbody>
          <tr>
            <td>close</td>
            <td>
              <CloseIcon />
            </td>
            <td>
              <CloseIcon />
            </td>
            <td>
              <CloseIcon />
            </td>
            <td>
              <CloseIcon />
            </td>
          </tr>
          <tr>
            <td>round arrow</td>
            <td>
              <RoundArrow />
            </td>
            <td>
              <RoundArrow />
            </td>
            <td>
              <RoundArrow />
            </td>
            <td>
              <RoundArrow />
            </td>
          </tr>
          <tr>
            <td>angle bracket</td>
            <td>
              <AngleBracket />
            </td>
            <td>
              <AngleBracket />
            </td>
            <td>
              <AngleBracket />
            </td>
            <td>
              <AngleBracket />
            </td>
          </tr>
          <tr>
            <td>fill rounded arrow</td>
            <td>
              <FillNRoundedArrow />
            </td>
            <td>
              <FillNRoundedArrow />
            </td>
            <td>
              <FillNRoundedArrow />
            </td>
            <td>
              <FillNRoundedArrow />
            </td>
          </tr>
          <tr>
            <td>white round arrow</td>
            <td>
              <WhiteRoundArrow />
            </td>
            <td>
              <WhiteRoundArrow />
            </td>
            <td>
              <WhiteRoundArrow />
            </td>
            <td>
              <WhiteRoundArrow />
            </td>
          </tr>
          <tr>
            <td>gray round arrow</td>
            <td>
              <GrayRoundArrow />
            </td>
            <td>
              <GrayRoundArrow />
            </td>
            <td>
              <GrayRoundArrow />
            </td>
            <td>
              <GrayRoundArrow />
            </td>
          </tr>
          <tr>
            <td>calendar</td>
            <td>
              <CalendarIcon />
            </td>
            <td>
              <CalendarIcon />
            </td>
            <td>
              <CalendarIcon />
            </td>
            <td>
              <CalendarIcon />
            </td>
          </tr>
          <tr>
            <td>account</td>
            <td>
              <AccountIcon />
            </td>
            <td>
              <AccountIcon />
            </td>
            <td>
              <AccountIcon />
            </td>
            <td>
              <AccountIcon />
            </td>
          </tr>
          <tr>
            <td>logout</td>
            <td>
              <LogoutIcon />
            </td>
            <td>
              <LogoutIcon />
            </td>
            <td>
              <LogoutIcon />
            </td>
            <td>
              <LogoutIcon />
            </td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>
              <TooltipIcon />
            </td>
            <td>
              <TooltipIcon />
            </td>
            <td>
              <TooltipIcon />
            </td>
            <td>
              <TooltipIcon />
            </td>
          </tr>
          <tr>
            <td>info icon</td>
            <td>
              <InfoIcon />
            </td>
            <td>
              <InfoIcon />
            </td>
            <td>
              <InfoIcon />
            </td>
            <td>
              <InfoIcon />
            </td>
          </tr>
          <tr>
            <td>break link icon</td>
            <td>
              <BreakLinkIcon />
            </td>
            <td>
              <BreakLinkIcon />
            </td>
            <td>
              <BreakLinkIcon />
            </td>
            <td>
              <BreakLinkIcon />
            </td>
          </tr>
          <tr>
            <td>edit icon</td>
            <td>
              <EditIcon />
            </td>
            <td>
              <EditIcon />
            </td>
            <td>
              <EditIcon />
            </td>
            <td>
              <EditIcon />
            </td>
          </tr>
          <tr>
            <td>dropdown</td>
            <td>
              <DropdownIcon />
            </td>
            <td>
              <DropdownIcon />
            </td>
            <td>
              <DropdownIcon />
            </td>
            <td>
              <DropdownIcon />
            </td>
          </tr>
          <tr>
            <td>arrow</td>
            <td>
              <ArrowIcon />
            </td>
            <td>
              <ArrowIcon />
            </td>
            <td>
              <ArrowIcon />
            </td>
            <td>
              <ArrowIcon />
            </td>
          </tr>
          <tr>
            <td>round plus</td>
            <td>
              <RoundPlus />
            </td>
            <td>
              <RoundPlus />
            </td>
            <td>
              <RoundPlus />
            </td>
            <td>
              <RoundPlus />
            </td>
          </tr>
          <tr>
            <td>round minus</td>
            <td>
              <RoundMinus />
            </td>
            <td>
              <RoundMinus />
            </td>
            <td>
              <RoundMinus />
            </td>
            <td>
              <RoundMinus />
            </td>
          </tr>
          <tr>
            <td>add</td>
            <td>
              <AddIcon />
            </td>
            <td>
              <AddIcon />
            </td>
            <td>
              <AddIcon />
            </td>
            <td>
              <AddIcon />
            </td>
          </tr>
          <tr>
            <td>round close</td>
            <td>
              <RoundClose />
            </td>
            <td>
              <RoundClose />
            </td>
            <td>
              <RoundClose />
            </td>
            <td>
              <RoundClose />
            </td>
          </tr>
          <tr>
            <td>white round close</td>
            <td>
              <WhiteCloseIcon />
            </td>
            <td>
              <WhiteCloseIcon />
            </td>
            <td>
              <WhiteCloseIcon />
            </td>
            <td>
              <WhiteCloseIcon />
            </td>
          </tr>
          <tr>
            <td>check</td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
          </tr>
          <tr>
            <td>refresh</td>
            <td>
              <RefreshIcon />
            </td>
            <td>
              <RefreshIcon />
            </td>
            <td>
              <RefreshIcon />
            </td>
            <td>
              <RefreshIcon />
            </td>
          </tr>
          <tr>
            <td>coin</td>
            <td>
              <CoinIcon />
            </td>
            <td>
              <CoinIcon />
            </td>
            <td>
              <CoinIcon />
            </td>
            <td>
              <CoinIcon />
            </td>
          </tr>
          <tr>
            <td>text logo</td>
            <td>
              <TextLogo />
            </td>
            <td>
              <TextLogo />
            </td>
            <td>
              <TextLogo />
            </td>
            <td>
              <TextLogo />
            </td>
          </tr>
          <tr>
            <td>empty circle checkbox</td>
            <td>
              <EmptyCircleCheckbox />
            </td>
            <td>
              <EmptyCircleCheckbox />
            </td>
            <td>
              <EmptyCircleCheckbox />
            </td>
            <td>
              <EmptyCircleCheckbox />
            </td>
          </tr>
          <tr>
            <td>playicon</td>
            <td>
              <PlayIcon size={16} />
            </td>
            <td>
              <PlayIcon size={24} />
            </td>
            <td>
              <PlayIcon size={40} />
            </td>
            <td>
              <PlayIcon size={80} />
            </td>
          </tr>
          <tr>
            <td>까망이 disabled</td>
            <td>
              <KkamangIcon size={16} />
            </td>
            <td>
              <KkamangIcon size={24} />
            </td>
            <td>
              <KkamangIcon size={40} />
            </td>
            <td>
              <KkamangIcon size={80} />
            </td>
          </tr>
          <tr>
            <td>Naver Icon - default</td>
            <td>
              <NaverIcon type={"default"} size={16} />
            </td>
            <td>
              <NaverIcon type={"default"} size={24} />
            </td>
            <td>
              <NaverIcon type={"default"} />
            </td>
            <td>
              <NaverIcon type={"default"} size={80} />
            </td>
          </tr>
          <tr>
            <td>Naver Icon - white</td>
            <td>
              <NaverIcon type={"white"} size={16} />
            </td>
            <td>
              <NaverIcon type={"white"} size={24} />
            </td>
            <td>
              <NaverIcon type={"white"} />
            </td>
            <td>
              <NaverIcon type={"white"} size={80} />
            </td>
          </tr>
          <tr>
            <td>Instagram Icon - default</td>
            <td>
              <InstagramIcon type={"default"} size={16} />
            </td>
            <td>
              <InstagramIcon type={"default"} size={24} />
            </td>
            <td>
              <InstagramIcon type={"default"} />
            </td>
            <td>
              <InstagramIcon type={"default"} size={80} />
            </td>
          </tr>
          <tr>
            <td>Instagram Icon - white</td>
            <td>
              <InstagramIcon type={"white"} size={16} />
            </td>
            <td>
              <InstagramIcon type={"white"} size={24} />
            </td>
            <td>
              <InstagramIcon type={"white"} />
            </td>
            <td>
              <InstagramIcon type={"white"} size={80} />
            </td>
          </tr>
          <tr>
            <td>Kakao Icon</td>
            <td>
              <KakaoIcon />
            </td>
            <td>
              <KakaoIcon />
            </td>
            <td>
              <KakaoIcon />
            </td>
            <td>
              <KakaoIcon />
            </td>
          </tr>
          <tr>
            <td>Line Icon</td>
            <td>
              <LineIcon />
            </td>
            <td>
              <LineIcon />
            </td>
            <td>
              <LineIcon />
            </td>
            <td>
              <LineIcon />
            </td>
          </tr>
          <tr>
            <td>Apple Icon</td>
            <td>
              <AppleIcon />
            </td>
            <td>
              <AppleIcon />
            </td>
            <td>
              <AppleIcon />
            </td>
            <td>
              <AppleIcon />
            </td>
          </tr>
          <tr>
            <td>Google Icon</td>
            <td>
              <GoogleIcon />
            </td>
            <td>
              <GoogleIcon />
            </td>
            <td>
              <GoogleIcon />
            </td>
            <td>
              <GoogleIcon />
            </td>
          </tr>
          <tr>
            <td>FaceBook Icon - old</td>
            <td>
              <FaceBookIcon type={"old"} />
            </td>
            <td>
              <FaceBookIcon type={"old"} />
            </td>
            <td>
              <FaceBookIcon type={"old"} />
            </td>
            <td>
              <FaceBookIcon type={"old"} />
            </td>
          </tr>
          <tr>
            <td>FaceBook Icon - new</td>
            <td>
              <FaceBookIcon type={"new"} />
            </td>
            <td>
              <FaceBookIcon type={"new"} />
            </td>
            <td>
              <FaceBookIcon type={"new"} />
            </td>
            <td>
              <FaceBookIcon type={"new"} />
            </td>
          </tr>
        </Table.Tbody>
      </Table.Wrapper>
    </>
  );
};

export const DefaultIcon = Template.bind({});
