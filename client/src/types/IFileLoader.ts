import { IResult } from "./IResult";
interface IFileLoader {
  setResult: React.Dispatch<React.SetStateAction<IResult>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean
}
export type { IFileLoader };
