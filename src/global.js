import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0; line-height: normal;
  }
:root {

/* fonts */
--font-inter: Inter;
--font-pingfang-sc: 'PingFang SC';
--font-helvetica-neue: 'Helvetica Neue';
--typography-caption: Roboto;
--font-montserrat: Montserrat;
--font-open-sans: 'Open Sans';

/* font sizes */
--typography-caption-size: 12px;
--font-size-3xs: 10px;
--font-size-5xs: 8px;
--font-size-4xs: 9px;
--body-regular-size: 14px;
--font-size-smi: 13px;
--typography-body1-size: 16px;

/* Colors */
--colorstyle-background-base-500: #f3f5fa;
--neutral-1: #fff;
--color-silver: #b6b6b6;
--color-gray-100: #23272d;
--text-5-: #1d2129;
--character-title-85: rgba(0, 0, 0, 0.85);
--text-secondary: rgba(0, 0, 0, 0.6);
--text-primary: rgba(0, 0, 0, 0.87);
--color-lavender-100: #e0e7ff;
--color-lavender-200: #dadeeb;
--color-black: #000;
--text-3-: #86909c;
--brand-6: #165dff;
--color-mediumslateblue-100: #125dff;
--color-darkslategray-100: #475467;
--color-darkslategray-200: #474747;
--color-darkslategray-300: #252c37;
--color-dodgerblue: #0085ff;
--colorstyle-primary-blue: #236df2;
--color-gainsboro-100: #d4d9e5;
--neutral-5: #d9d9d9;
--color-steelblue-100: #919acd;
--color-steelblue-200: #646da1;
--color-plum: #ba91cd;

/* Gaps */
--gap-3xs: 10px;
--gap-9xs: 4px;
--gap-xl: 20px;
--gap-11xs: 2px;
--gap-4xs-4: 8.4px;
--gap-10xs-1: 2.1px;
--gap-10xs: 3px;
--gap-12xs: 1px;

/* Paddings */
--padding-9xs: 4px;
--padding-5xs: 8px;
--padding-5xs-3: 7.3px;
--padding-xs: 12px;
--padding-base: 16px;
--padding-3xs: 10px;
--padding-45xl: 64px;
--padding-12xs: 1px;

/* border radiuses */
--br-33xl-5: 52.5px;
--br-9xs: 4px;
--br-81xl: 100px;
--br-5xs: 8px;
--br-11xs: 2px;

}
`;
