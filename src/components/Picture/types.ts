export type PictureType = {
  srcSP: string;
  srcSPWebp?: string;
  srcPC?: string;
  srcPCWebp?: string;
  widthSP?: number;
  heightSP?: number;
  widthPC?: number;
  heightPC?: number;
  altText: string;
  isLazy?: boolean;
  breakpoint?: number
}