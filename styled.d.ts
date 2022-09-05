import "styledcomponents";

declare module "styledcomponents" {
  export interface DefaultTheme {
    colors: {
      DarkPrimaryColor?: string;
      LightPrimaryColor?: string;
      PrimaryColor?: string;
      TextIconsColor: string;
      AccentColor: string;
      PrimaryTextColor: string;
      SecondaryTextColor: string;
      DividerColor: string;
    };
  }
}