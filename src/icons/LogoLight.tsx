import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

export const LogoLight: FC<IconProps> = (props) => (
  <Icon
    viewBox="0 0 37 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9924 1.0334C23.5039 1.12838 22.744 1.34549 22.2962 1.50832C21.8484 1.67115 20.8986 2.09179 20.193 2.44458C19.4874 2.79738 18.2662 3.51654 17.4792 4.04573C16.6922 4.57493 15.471 5.51119 14.7654 6.14894C14.0598 6.77312 13.0828 7.73652 12.5943 8.29285C12.1058 8.83562 11.2374 9.93471 10.6404 10.7217C10.0569 11.5087 9.16132 12.8521 8.65927 13.7069C8.14364 14.5618 7.38377 16.0001 6.94956 16.8956C6.52892 17.7912 5.90474 19.2295 5.57909 20.0844C5.23986 20.9392 4.81922 22.2554 4.62925 23.0017C4.37144 24.0601 4.27645 24.8336 4.22218 26.5297C4.1679 27.9544 4.20861 29.0535 4.31716 29.7184C4.41215 30.2748 4.62925 31.1296 4.79208 31.6181C4.95491 32.1066 5.267 32.8393 5.47053 33.2464C5.67407 33.6535 6.10828 34.3319 6.42037 34.739C6.73246 35.1461 7.28879 35.7295 7.65515 36.028C8.02152 36.3266 8.78139 36.8286 9.33772 37.1407C9.89405 37.4664 11.2781 38.0905 12.3908 38.5248C13.517 38.9725 15.1589 39.556 16.0544 39.8274C16.95 40.0988 18.4155 40.438 19.311 40.6008C20.6544 40.8315 21.3192 40.8586 23.1104 40.8044C24.6979 40.7501 25.5799 40.6687 26.3669 40.4516C26.964 40.3023 27.9681 39.9088 28.5923 39.5967C29.325 39.2303 30.017 38.7419 30.5055 38.2669C30.9261 37.8463 31.4418 37.1678 31.6589 36.7065C31.9981 36.0145 32.066 35.7024 32.1067 34.6033C32.1474 33.572 32.0931 33.0564 31.8217 32.0252C31.6453 31.3196 31.2382 30.1391 30.9262 29.4199C30.6276 28.6872 30.0577 27.5202 29.6642 26.8418C29.2707 26.1498 28.4973 24.9692 27.9274 24.2229C27.3711 23.4767 26.4212 22.3776 25.8242 21.7669C25.2271 21.1699 24.2366 20.2879 23.626 19.7994C23.0289 19.3245 22.4319 18.931 22.3098 18.931C22.1877 18.931 22.0927 18.9581 22.0927 18.9989C22.0927 19.0396 22.4726 19.4331 22.9204 19.8808C23.3817 20.3286 24.0873 21.0885 24.4808 21.577C24.8743 22.0655 25.2136 22.5132 25.2136 22.5947C25.2136 22.6761 24.5894 22.0655 23.816 21.2378C23.0425 20.41 22.0791 19.4873 21.672 19.1753C21.265 18.8632 20.5729 18.3882 20.1252 18.1169C19.6774 17.8591 18.8225 17.4791 18.2255 17.2756C17.3706 17.0042 16.855 16.9228 15.7831 16.9228C14.8875 16.9092 14.1683 16.9906 13.6799 17.1399C13.2728 17.262 12.6486 17.547 12.2958 17.7776L11.6445 18.1847C11.4274 17.5063 11.3731 17.0856 11.3731 16.8278C11.3731 16.57 11.4952 15.9594 11.6309 15.4709C11.7802 14.9824 12.2008 14.1276 12.5808 13.5712C12.9471 13.0149 13.6663 12.1058 14.1683 11.5494C14.684 11.0067 15.5931 10.179 16.1901 9.73118C16.7872 9.2834 17.8049 8.65922 18.4697 8.33356C19.1211 8.0079 20.1794 7.57369 20.8443 7.37016C21.9163 7.0445 22.2284 7.00379 24.2637 7.00379C26.0006 6.99022 26.7469 7.0445 27.5882 7.24804C28.1852 7.38373 29.1622 7.66868 29.7592 7.88578C30.3562 8.10289 31.1433 8.50996 31.5096 8.79491C31.8896 9.06629 32.378 9.55478 32.5951 9.86687C32.8258 10.179 33.1515 10.6674 33.3279 10.9524C33.4907 11.2373 33.8164 11.5766 34.0335 11.7123C34.2641 11.8344 34.6034 11.9429 34.7933 11.9429C34.9969 11.9429 35.2954 11.7801 35.5396 11.5359C35.8517 11.2102 35.9331 11.0067 35.9331 10.5589C35.9331 10.1654 35.7974 9.74475 35.5396 9.29697C35.3361 8.9306 34.7662 8.26572 34.2913 7.83151C33.8164 7.3973 32.9615 6.81382 32.4052 6.52887C31.8488 6.23035 30.994 5.87756 30.5055 5.7283C30.017 5.57904 29.04 5.38907 28.3345 5.29409C27.5067 5.17197 26.5026 5.14483 25.5528 5.19911C24.7251 5.25338 23.5446 5.41621 22.9068 5.5519C22.2691 5.70116 21.2921 5.98611 20.7358 6.17608C20.1794 6.37962 19.3246 6.74598 18.8361 6.99022C18.3476 7.23447 17.3978 7.80437 16.7329 8.25215C16.068 8.69993 14.9961 9.54121 14.3719 10.1382C13.7477 10.7217 12.7979 11.7801 12.2687 12.4857C11.7259 13.1913 11.0203 14.2632 10.6947 14.8603C10.179 15.7694 10.0705 15.8915 10.0433 15.6066C10.0162 15.4166 10.1926 14.6839 10.4233 13.9783C10.6539 13.2727 11.0882 12.2279 11.3867 11.6716C11.6852 11.1152 12.2551 10.2332 12.6622 9.70404C13.0557 9.18841 13.8291 8.33356 14.3719 7.81794C14.9282 7.28874 15.8916 6.52887 16.5294 6.1218C17.1671 5.71473 18.1848 5.14483 18.809 4.85988C19.4196 4.57493 20.5187 4.16786 21.2378 3.95075C21.9706 3.74721 22.9882 3.4894 23.5174 3.40799C24.0466 3.313 25.1729 3.19088 26.0277 3.12304C27.2354 3.02805 27.6424 2.94664 27.8324 2.75667C27.9681 2.62098 28.0766 2.33603 28.0766 2.10536C28.0766 1.86111 27.9545 1.58973 27.7646 1.41333C27.5882 1.2505 27.3168 1.04697 27.1404 0.965553C26.9776 0.884139 26.3941 0.816294 25.8513 0.829863C25.3221 0.829863 24.4808 0.924846 23.9924 1.0334ZM14.1955 20.9667C13.8292 21.0752 13.3407 21.3737 13.0964 21.618C12.8115 21.8893 12.5944 22.2964 12.4858 22.7306C12.3773 23.1241 12.3501 23.6398 12.4044 23.9518C12.4451 24.2504 12.6215 24.766 12.7708 25.1052C12.9336 25.4444 13.3949 26.0551 13.8156 26.4757C14.2905 26.9642 14.9418 27.4255 15.6474 27.7783C16.2445 28.0768 17.1943 28.4975 17.7506 28.6875C18.307 28.891 19.7724 29.3659 21.0072 29.7458C22.5405 30.2208 23.5039 30.4379 24.0331 30.4514C24.7387 30.465 24.8608 30.4243 25.1593 30.0986C25.3493 29.868 25.485 29.5423 25.485 29.3116C25.485 29.0945 25.39 28.6739 25.2679 28.4025C25.1593 28.1176 24.793 27.5205 24.4809 27.0727C24.1552 26.625 23.1104 25.458 22.147 24.4675C21.075 23.3684 20.0302 22.4592 19.4468 22.0793C18.9176 21.7537 18.1306 21.3466 17.6828 21.1702C17.2079 20.9938 16.448 20.8445 15.851 20.8174C15.1861 20.7767 14.6162 20.831 14.182 20.9667H14.1955Z"
      fill="#181D27"
    />
    <path
      d="M14.1955 20.9667C13.8292 21.0752 13.3407 21.3737 13.0964 21.618C12.8115 21.8893 12.5944 22.2964 12.4858 22.7306C12.3773 23.1241 12.3501 23.6398 12.4044 23.9518C12.4451 24.2504 12.6215 24.766 12.7708 25.1052C12.9336 25.4444 13.3949 26.0551 13.8156 26.4757C14.2905 26.9642 14.9418 27.4255 15.6474 27.7783C16.2445 28.0768 17.1943 28.4975 17.7506 28.6875C18.307 28.891 19.7724 29.3659 21.0072 29.7458C22.5405 30.2208 23.5039 30.4379 24.0331 30.4514C24.7387 30.465 24.8608 30.4243 25.1593 30.0986C25.3493 29.868 25.485 29.5423 25.485 29.3116C25.485 29.0945 25.39 28.6739 25.2679 28.4025C25.1593 28.1176 24.793 27.5205 24.4809 27.0727C24.1552 26.625 23.1104 25.458 22.147 24.4675C21.075 23.3684 20.0302 22.4592 19.4468 22.0793C18.9176 21.7537 18.1306 21.3466 17.6828 21.1702C17.2079 20.9938 16.448 20.8445 15.851 20.8174C15.1861 20.7767 14.6162 20.831 14.182 20.9667H14.1955Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9924 1.0334C23.5039 1.12838 22.744 1.34549 22.2962 1.50832C21.8484 1.67115 20.8986 2.09179 20.193 2.44458C19.4874 2.79738 18.2662 3.51654 17.4792 4.04573C16.6922 4.57493 15.471 5.51119 14.7654 6.14894C14.0598 6.77312 13.0828 7.73652 12.5943 8.29285C12.1058 8.83562 11.2374 9.93471 10.6404 10.7217C10.0569 11.5087 9.16132 12.8521 8.65927 13.7069C8.14364 14.5618 7.38377 16.0001 6.94956 16.8956C6.52892 17.7912 5.90474 19.2295 5.57909 20.0844C5.23986 20.9392 4.81922 22.2554 4.62925 23.0017C4.37144 24.0601 4.27645 24.8336 4.22218 26.5297C4.1679 27.9544 4.20861 29.0535 4.31716 29.7184C4.41215 30.2748 4.62925 31.1296 4.79208 31.6181C4.95491 32.1066 5.267 32.8393 5.47053 33.2464C5.67407 33.6535 6.10828 34.3319 6.42037 34.739C6.73246 35.1461 7.28879 35.7295 7.65515 36.028C8.02152 36.3266 8.78139 36.8286 9.33772 37.1407C9.89405 37.4664 11.2781 38.0905 12.3908 38.5248C13.517 38.9725 15.1589 39.556 16.0544 39.8274C16.95 40.0988 18.4155 40.438 19.311 40.6008C20.6544 40.8315 21.3192 40.8586 23.1104 40.8044C24.6979 40.7501 25.5799 40.6687 26.3669 40.4516C26.964 40.3023 27.9681 39.9088 28.5923 39.5967C29.325 39.2303 30.017 38.7419 30.5055 38.2669C30.9261 37.8463 31.4418 37.1678 31.6589 36.7065C31.9981 36.0145 32.066 35.7024 32.1067 34.6033C32.1474 33.572 32.0931 33.0564 31.8217 32.0252C31.6453 31.3196 31.2382 30.1391 30.9262 29.4199C30.6276 28.6872 30.0577 27.5202 29.6642 26.8418C29.2707 26.1498 28.4973 24.9692 27.9274 24.2229C27.3711 23.4767 26.4212 22.3776 25.8242 21.7669C25.2271 21.1699 24.2366 20.2879 23.626 19.7994C23.0289 19.3245 22.4319 18.931 22.3098 18.931C22.1877 18.931 22.0927 18.9581 22.0927 18.9989C22.0927 19.0396 22.4726 19.4331 22.9204 19.8808C23.3817 20.3286 24.0873 21.0885 24.4808 21.577C24.8743 22.0655 25.2136 22.5132 25.2136 22.5947C25.2136 22.6761 24.5894 22.0655 23.816 21.2378C23.0425 20.41 22.0791 19.4873 21.672 19.1753C21.265 18.8632 20.5729 18.3882 20.1252 18.1169C19.6774 17.8591 18.8225 17.4791 18.2255 17.2756C17.3706 17.0042 16.855 16.9228 15.7831 16.9228C14.8875 16.9092 14.1683 16.9906 13.6799 17.1399C13.2728 17.262 12.6486 17.547 12.2958 17.7776L11.6445 18.1847C11.4274 17.5063 11.3731 17.0856 11.3731 16.8278C11.3731 16.57 11.4952 15.9594 11.6309 15.4709C11.7802 14.9824 12.2008 14.1276 12.5808 13.5712C12.9471 13.0149 13.6663 12.1058 14.1683 11.5494C14.684 11.0067 15.5931 10.179 16.1901 9.73118C16.7872 9.2834 17.8049 8.65922 18.4697 8.33356C19.1211 8.0079 20.1794 7.57369 20.8443 7.37016C21.9163 7.0445 22.2284 7.00379 24.2637 7.00379C26.0006 6.99022 26.7469 7.0445 27.5882 7.24804C28.1852 7.38373 29.1622 7.66868 29.7592 7.88578C30.3562 8.10289 31.1433 8.50996 31.5096 8.79491C31.8896 9.06629 32.378 9.55478 32.5951 9.86687C32.8258 10.179 33.1515 10.6674 33.3279 10.9524C33.4907 11.2373 33.8164 11.5766 34.0335 11.7123C34.2641 11.8344 34.6034 11.9429 34.7933 11.9429C34.9969 11.9429 35.2954 11.7801 35.5396 11.5359C35.8517 11.2102 35.9331 11.0067 35.9331 10.5589C35.9331 10.1654 35.7974 9.74475 35.5396 9.29697C35.3361 8.9306 34.7662 8.26572 34.2913 7.83151C33.8164 7.3973 32.9615 6.81382 32.4052 6.52887C31.8488 6.23035 30.994 5.87756 30.5055 5.7283C30.017 5.57904 29.04 5.38907 28.3345 5.29409C27.5067 5.17197 26.5026 5.14483 25.5528 5.19911C24.7251 5.25338 23.5446 5.41621 22.9068 5.5519C22.2691 5.70116 21.2921 5.98611 20.7358 6.17608C20.1794 6.37962 19.3246 6.74598 18.8361 6.99022C18.3476 7.23447 17.3978 7.80437 16.7329 8.25215C16.068 8.69993 14.9961 9.54121 14.3719 10.1382C13.7477 10.7217 12.7979 11.7801 12.2687 12.4857C11.7259 13.1913 11.0203 14.2632 10.6947 14.8603C10.179 15.7694 10.0705 15.8915 10.0433 15.6066C10.0162 15.4166 10.1926 14.6839 10.4233 13.9783C10.6539 13.2727 11.0882 12.2279 11.3867 11.6716C11.6852 11.1152 12.2551 10.2332 12.6622 9.70404C13.0557 9.18841 13.8291 8.33356 14.3719 7.81794C14.9282 7.28874 15.8916 6.52887 16.5294 6.1218C17.1671 5.71473 18.1848 5.14483 18.809 4.85988C19.4196 4.57493 20.5187 4.16786 21.2378 3.95075C21.9706 3.74721 22.9882 3.4894 23.5174 3.40799C24.0466 3.313 25.1729 3.19088 26.0277 3.12304C27.2354 3.02805 27.6424 2.94664 27.8324 2.75667C27.9681 2.62098 28.0766 2.33603 28.0766 2.10536C28.0766 1.86111 27.9545 1.58973 27.7646 1.41333C27.5882 1.2505 27.3168 1.04697 27.1404 0.965553C26.9776 0.884139 26.3941 0.816294 25.8513 0.829863C25.3221 0.829863 24.4808 0.924846 23.9924 1.0334ZM14.1955 20.9667C13.8292 21.0752 13.3407 21.3737 13.0964 21.618C12.8115 21.8893 12.5944 22.2964 12.4858 22.7306C12.3773 23.1241 12.3501 23.6398 12.4044 23.9518C12.4451 24.2504 12.6215 24.766 12.7708 25.1052C12.9336 25.4444 13.3949 26.0551 13.8156 26.4757C14.2905 26.9642 14.9418 27.4255 15.6474 27.7783C16.2445 28.0768 17.1943 28.4975 17.7506 28.6875C18.307 28.891 19.7724 29.3659 21.0072 29.7458C22.5405 30.2208 23.5039 30.4379 24.0331 30.4514C24.7387 30.465 24.8608 30.4243 25.1593 30.0986C25.3493 29.868 25.485 29.5423 25.485 29.3116C25.485 29.0945 25.39 28.6739 25.2679 28.4025C25.1593 28.1176 24.793 27.5205 24.4809 27.0727C24.1552 26.625 23.1104 25.458 22.147 24.4675C21.075 23.3684 20.0302 22.4592 19.4468 22.0793C18.9176 21.7537 18.1306 21.3466 17.6828 21.1702C17.2079 20.9938 16.448 20.8445 15.851 20.8174C15.1861 20.7767 14.6162 20.831 14.182 20.9667H14.1955Z"
      stroke="#181D27"
    />
    <path
      d="M14.1955 20.9667C13.8292 21.0752 13.3407 21.3737 13.0964 21.618C12.8115 21.8893 12.5944 22.2964 12.4858 22.7306C12.3773 23.1241 12.3501 23.6398 12.4044 23.9518C12.4451 24.2504 12.6215 24.766 12.7708 25.1052C12.9336 25.4444 13.3949 26.0551 13.8156 26.4757C14.2905 26.9642 14.9418 27.4255 15.6474 27.7783C16.2445 28.0768 17.1943 28.4975 17.7506 28.6875C18.307 28.891 19.7724 29.3659 21.0072 29.7458C22.5405 30.2208 23.5039 30.4379 24.0331 30.4514C24.7387 30.465 24.8608 30.4243 25.1593 30.0986C25.3493 29.868 25.485 29.5423 25.485 29.3116C25.485 29.0945 25.39 28.6739 25.2679 28.4025C25.1593 28.1176 24.793 27.5205 24.4809 27.0727C24.1552 26.625 23.1104 25.458 22.147 24.4675C21.075 23.3684 20.0302 22.4592 19.4468 22.0793C18.9176 21.7537 18.1306 21.3466 17.6828 21.1702C17.2079 20.9938 16.448 20.8445 15.851 20.8174C15.1861 20.7767 14.6162 20.831 14.182 20.9667H14.1955Z"
      stroke="#181D27"
    />
    <path
      d="M3.63861 19.6366C3.16369 20.2201 2.55308 21.0885 2.26813 21.577C1.98318 22.0655 1.58968 22.8796 1.38614 23.4088C1.1826 23.938 0.911222 24.7793 0.775531 25.3085C0.639841 25.8377 0.463443 26.8961 0.382028 27.6831C0.287045 28.66 0.287045 29.5285 0.382028 30.4647C0.463443 31.211 0.639841 32.283 0.7891 32.8393C0.924791 33.3956 1.20974 34.2505 1.41328 34.739C1.63038 35.2275 1.9289 35.8516 2.1053 36.1366C2.2817 36.408 2.64807 36.8965 2.91945 37.195C3.2044 37.5071 3.80144 38.0227 4.24922 38.3348C4.697 38.6604 5.42973 39.0947 5.87751 39.3253C6.32528 39.5424 7.28869 39.9224 8.00785 40.153C8.74058 40.3837 9.67685 40.6144 10.0975 40.6822C10.6403 40.7501 10.8845 40.7365 11.0066 40.6008C11.1152 40.4832 11.1242 40.3882 11.0338 40.3159C10.9524 40.248 10.3418 39.9088 9.67685 39.556C8.99839 39.2032 8.00785 38.6062 7.45152 38.2127C6.89519 37.8327 6.09461 37.1814 5.68754 36.7743C5.2669 36.3673 4.66986 35.6617 4.37134 35.2139C4.05925 34.7661 3.69288 34.1555 3.54362 33.857C3.3808 33.5585 3.13655 32.9207 2.98729 32.4322C2.83803 31.9438 2.6345 31.0075 2.55308 30.329C2.43096 29.3928 2.41739 28.7686 2.53951 27.6152C2.6345 26.8011 2.82446 25.5392 2.98729 24.8336C3.13655 24.128 3.47578 22.9339 3.73359 22.1876C3.9914 21.4413 4.39848 20.4643 4.61558 20.0165C4.83269 19.5688 4.99552 19.0803 4.96838 18.931C4.94124 18.7818 4.83269 18.6461 4.697 18.6189C4.5613 18.5918 4.18137 18.9446 3.63861 19.6366Z"
      fill="#181D27"
    />
  </Icon>
);
