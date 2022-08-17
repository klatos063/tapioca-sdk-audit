/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFeeDistributor,
  IFeeDistributorInterface,
} from "../IFeeDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "lock",
        type: "bool",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFeeDistributor__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeDistributorInterface {
    return new utils.Interface(_abi) as IFeeDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFeeDistributor {
    return new Contract(address, _abi, signerOrProvider) as IFeeDistributor;
  }
}
