/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TricryptoStrategy,
  TricryptoStrategyInterface,
} from "../../curve/TricryptoStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "LPGetterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGauge",
    outputs: [
      {
        internalType: "contract ITricryptoLPGauge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lpGetter",
    outputs: [
      {
        internalType: "contract ITricryptoLPGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "contract ICurveMinter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpGetter",
        type: "address",
      },
    ],
    name: "setTricryptoLPGetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract ISwapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x610140604081815234620004be5760c08262002d898038038091620000258285620004c3565b833981010312620004be578151906001600160a01b038083168303620004be5760209062000055828601620004fd565b9362000063848701620004fd565b6200007160608801620004fd565b6200008d60a06200008560808b01620004fd565b9901620004fd565b926080528660a05260018060a01b0319918480806000963387895416178855818b519c338a7f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002551660c05216928386600354161760035516928360e052816101009b168b521694856004948554161784556376d8b11760e01b895286898581865afa988915620004b457859962000471575b508061012099168952875191635fcbd28560e01b808452888487818b5afa938415620003ae57879462000432575b50895163095ea7b360e01b958682528782015289816044818b886000199a8b6024850152165af18015620004285762000406575b50888387541691878c518094819382525afa908115620003ae57839189898d8d948294620003b8575b5090604492915195869485938c85528d8501528a6024850152165af18015620003ae5791899188936200038c575b506044848d5116918c5194859384928a84528b8401528860248401525af1801562000382579288959492879260449562000360575b5060c05116908a519889968795865285015260248401525af190811562000355575062000320575b5050519061285c92836200052d843960805183818161039901528181610eb60152611532015260a051836101b3015260c05183818161024e015281816103ea01528181610e44015281816112060152818161183701528181611b9a015281816125c401526126e7015260e0518381816106a001528181610f20015281816114e6015281816117cc01528181611a7701528181612436015261254d0152518281816108c80152818161116d01528181611b090152611f9b01525181818161016c0152818161088401528181610d11015281816111320152818161185a0152611abb0152f35b816200034492903d106200034d575b6200033b8183620004c3565b81019062000512565b5038806200023c565b503d6200032f565b8451903d90823e3d90fd5b6200037a90883d8a116200034d576200033b8183620004c3565b503862000214565b89513d88823e3d90fd5b620003a690833d85116200034d576200033b8183620004c3565b5038620001df565b8a513d89823e3d90fd5b95505050505081813d8311620003fe575b620003d58183620004c3565b81010312620003fa57888a60448a8a620003f08896620004fd565b93909192620001b1565b8680fd5b503d620003c9565b62000420908a3d8c116200034d576200033b8183620004c3565b503862000188565b8b513d8a823e3d90fd5b9093508881813d831162000469575b6200044d8183620004c3565b81010312620003fa576200046190620004fd565b923862000154565b503d62000441565b9098508681813d8311620004ac575b6200048c8183620004c3565b81010312620004a857620004a090620004fd565b973862000126565b8480fd5b503d62000480565b88513d87823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b03821190821017620004e757604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620004be57565b90816020910312620004be57518015158103620004be579056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314611fca575081630754617214611f86578163078dfbe714611e7957816317d70f7c14611e5e57816322a58c5d146119ee5781632b3297f9146119c557816330fa738c146119a957816348dcb051146117935781634cce992d146117335781634e71e0c8146116805781635018830114610e73578163726c64f2146116585781637284e416146115bd578163734daaa11461159e5781638da5cb5b14611576578163afa91cc614611515578163c5ec7874146114d1578163ce845d1d14610e73578163db2e21bc14610ee5578163de40657714610ea1578163e30c397814610e78578163e3575f0514610e73578163eb6d3a1114610e2f578163ec32e1b914610ca8578163f3fef3a314610369578163f64920b8146101e257508063f6b4dfb41461019f5763f7c618c11461015957600080fd5b3461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9190503461036557602090816003193601126103615761020061207d565b845490936001600160a01b039161021a9083163314612156565b81808254169516948684519387837fec75cca752304221051372b35f3488d6d59ae4be7bbbb04869f1e887318e12998480a37f0000000000000000000000000000000000000000000000000000000000000000169363095ea7b360e01b9283825284820152816024820152868160448185895af1801561035757908794939291610319575b506044929394886001600160601b0360a01b86541617855586519889958694855284015260001960248401525af190811561031057506102dd578280f35b81813d8311610309575b6102f181836120f5565b8101031261019b57610302906121b5565b5038808280f35b503d6102e7565b513d85823e3d90fd5b929383813d8311610350575b61032f81836120f5565b8101031261034d5786946103446044946121b5565b5094939261029f565b80fd5b503d610325565b86513d84823e3d90fd5b8380fd5b8280fd5b9190503461036557806003193601126103655761038461207d565b6001600160a01b03926024928335916103c0337f000000000000000000000000000000000000000000000000000000000000000088161461268f565b6103c86127b2565b826103d1612523565b10610c5b5781516370a0823160e01b80825230838301527f00000000000000000000000000000000000000000000000000000000000000008816966020969092878185818c5afa908115610676578b91610c2e575b508611610680575b84518281523085820152878185818c5afa908115610676579087918c91610645575b50106106035789809186519a898c019163a9059cbb60e01b8352169a8b8682015288604482015260448152610484816120bd565b5190828b5af13d156105fc573d61049a81612117565b906104a7875192836120f5565b81523d8b8983013e5b816105c0575b501561057f579085929184519788938492835230908301525afa8015610575578690610523575b7f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d8945080610514575b5051908152a2600160025580f35b61051d9061239d565b38610506565b508284813d831161056e575b61053981836120f5565b81010312610569577f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d893516104dd565b600080fd5b503d61052f565b81513d88823e3d90fd5b50601c9085606494519362461bcd60e51b85528401528201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152fd5b809150518781159182156105d9575b50509050386104b6565b83809293500103126105f857866105f091016121b5565b8087386105cf565b8980fd5b60606104b0565b845162461bcd60e51b8152808501889052601d818501527f54726963727970746f53747261746567793a206e6f7420656e6f7567680000006044820152606490fd5b809250898092503d831161066f575b61065e81836120f5565b810103126105695786905138610450565b503d610654565b86513d8d823e3d90fd5b89855161068c816120d9565b528451633313458360e01b815230858201527f00000000000000000000000000000000000000000000000000000000000000008a1690888186818f865af1908115610ac3578c91610c01575b50610880575b8a865191848352308784015289838781845afa92831561084357829361084d575b50803b1561019b5781809160448a5180948193631c683a1b60e11b8352888d84015260018c8401525af180156108435761082b575b50508985541690865163af30c87360e01b8152818782015289818781865afa908115610821578d916107f4575b5060328102818104603214821517156107e2578a926107888f93612710604494049061237a565b928a51958694859363ca26855760e01b85528c8501528a8401525af18015610676579088916107b9575b505061042e565b813d83116107db575b6107cc81836120f5565b810103126105695786386107b2565b503d6107c2565b634e487b7160e01b8e5260118852868efd5b90508981813d831161081a575b61080b81836120f5565b81010312610569575138610761565b503d610801565b88513d8f823e3d90fd5b61083490612093565b61083f578a38610734565b8a80fd5b88513d84823e3d90fd5b8a809294508193503d8311610879575b61086781836120f5565b81010312610569578b905191386106ff565b503d61085d565b8a8a7f00000000000000000000000000000000000000000000000000000000000000001687519085825230888301528a828881845afa918215610bf7578392610bc5575b508c7f000000000000000000000000000000000000000000000000000000000000000016803b15610361578385898b838e5195869485936335313c2160e11b85528401525af18015610ba757908491610bb1575b5050885186815230898201528b818981855afa908115610ba7578e8e9493928b928791610b6f575b50848111610955575b505050505050506106de565b610986946109629161237a565b9060035416948c519485928392631fd177af60e11b845261014096879685016122b7565b0381865afa938415610b355793610b40575b50508751630b7ecdc960e31b81528d908b81806109b7878d830161235a565b0381865afa918215610b355791610b08575b506032810281810460321482151715610af657888f8b946109f6610a0f97956127106101c496049061237a565b865163efa84c6d60e01b815297889687958601906122ee565b610144840152306101648401526101a0610184840152816101a48401525af18015610ac357908791610acd575b50518381523086820152888186818d5afa8015610ac35789908d90610a88575b6000805160206128078339815191529250610a768161239d565b8851908152a18a893880888e82610949565b5081813d8311610abc575b610a9d81836120f5565b8101031261056957886000805160206128078339815191529151610a5c565b503d610a93565b87513d8e823e3d90fd5b813d8311610aef575b610ae081836120f5565b8101031261083f578538610a3c565b503d610ad6565b634e487b7160e01b8f5260118952878ffd5b90508a81813d8311610b2e575b610b1f81836120f5565b810103126105695751386109c9565b503d610b15565b8a51903d90823e3d90fd5b610b60929350803d10610b68575b610b5881836120f5565b8101906121c2565b903880610998565b503d610b4e565b955050505092508a82813d8311610ba0575b610b8b81836120f5565b81010312610569578d92888e8e945138610940565b503d610b81565b8a513d86823e3d90fd5b610bba90612093565b610365578238610918565b925090508982813d8111610bf0575b610bde81836120f5565b81010312610569578c915190386108c4565b503d610bd4565b89513d85823e3d90fd5b90508881813d8311610c27575b610c1881836120f5565b810103126105695751386106d8565b503d610c0e565b90508781813d8311610c54575b610c4581836120f5565b81010312610569575138610426565b503d610c3b565b6023856020608494519362461bcd60e51b85528401528201527f54726963727970746f53747261746567793a20616d6f756e74206e6f742076616044820152621b1a5960ea1b6064820152fd5b919050346103655760208060031936011261036157610cc561207d565b9160018060a01b0393610cdc858754163314612156565b8480600354169416938683519686837fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b8480a37f00000000000000000000000000000000000000000000000000000000000000001663095ea7b360e01b9283895284890152816024890152858860448185855af1978815610e25578798610dde575b509160449186949386519889958694855284015260001960248401525af1908115610dd55750610da1575b50506001600160601b0360a01b600354161760035580f35b81813d8311610dce575b610db581836120f5565b8101031261036557610dc6906121b5565b503880610d89565b503d610dab565b513d86823e3d90fd5b91965092918582813d8311610e1e575b610df881836120f5565b81010312610e1a5787968694610e0f6044946121b5565b509193945091610d5e565b8680fd5b503d610dee565b85513d84823e3d90fd5b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b612133565b50503461019b578160031936011261019b5760015490516001600160a01b039091168152602090f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83833461019b578160031936011261019b5781546001600160a01b039390610f109085163314612156565b828251610f1c816120d9565b52837f000000000000000000000000000000000000000000000000000000000000000016825191633313458360e01b83523081840152602095602493878186818a885af19081156110cd5787916114a4575b5061111e575b84516370a0823160e01b815230838201529287848681845afa9384156110cd5787946110ef575b50803b15610e1a578680916044885180948193631c683a1b60e11b8352898984015260018b8401525af180156110cd579087916110d7575b5050815416845163af30c87360e01b8152838382015287818681855afa9081156110cd5787916110a0575b50603281028181046032148215171561108e576044926110278a9695936127108b94049061237a565b8851978896879563ca26855760e01b87528601528401525af19283156110835792611054575b5051908152f35b9091508281813d831161107c575b61106c81836120f5565b810103126105695751908361104d565b503d611062565b8251903d90823e3d90fd5b634e487b7160e01b8852601184528588fd5b90508781813d83116110c6575b6110b781836120f5565b81010312610569575188610ffe565b503d6110ad565b86513d89823e3d90fd5b6110e090612093565b6110eb578588610fd3565b8580fd5b9093508781813d8311611117575b61110781836120f5565b8101031261056957519288610f9b565b503d6110fd565b84516370a0823160e01b80825230848301527f000000000000000000000000000000000000000000000000000000000000000083169189818881865afa9081156113b6578991611477575b50837f000000000000000000000000000000000000000000000000000000000000000016803b156105f857898091898b51809481936335313c2160e11b83528c8c8401525af1801561145557908a9161145f575b505087519082825230868301528a828981875afa918215611455578a92611426575b508082116111f1575b50505050610f74565b6111fa9161237a565b836003541690611247857f0000000000000000000000000000000000000000000000000000000000000000169485928b5180938192631fd177af60e11b83526101409687958d85016122b7565b0381865afa9182156113ff578b92611409575b50508851630b7ecdc960e31b81528b8180611277858b830161235a565b0381865afa9081156113ff578b916113d2575b5060328102818104603214821517156113c0578a928c6112b56112d0946127106101c495049061237a565b958551968795869463efa84c6d60e01b86528d8601906122ee565b610144840152306101648401526101a0610184840152816101a48401525af180156113b6578a92918991611383575b5087905180948193825230888301525afa80156110cd5788908890611348575b60008051602061280783398151915292506113398161239d565b8751908152a1878080806111e8565b5081813d831161137c575b61135d81836120f5565b810103126105695787600080516020612807833981519152915161131f565b503d611353565b90809293503d83116113af575b61139a81836120f5565b810103126113ab578890878b6112ff565b8780fd5b503d611390565b88513d8b823e3d90fd5b634e487b7160e01b8c5260118852898cfd5b90508b81813d83116113f8575b6113e981836120f5565b8101031261056957518c61128a565b503d6113df565b8a513d8d823e3d90fd5b61141f9250803d10610b6857610b5881836120f5565b8b8061125a565b9091508a81813d831161144e575b61143e81836120f5565b810103126105695751908b6111df565b503d611434565b89513d8c823e3d90fd5b61146890612093565b61147357888b6111bd565b8880fd5b90508981813d831161149d575b61148e81836120f5565b8101031261056957518a611169565b503d611484565b90508781813d83116114ca575b6114bb81836120f5565b81010312610569575188610f6e565b503d6114b1565b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83903461019b57602036600319011261019b5761156e90611560337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461268f565b6115686127b2565b356126ca565b600160025580f35b50503461019b578160031936011261019b57905490516001600160a01b039091168152602090f35b50503461019b578160031936011261019b576020906005549051908152f35b82843461034d578060031936011261034d57508051906060820182811067ffffffffffffffff8211176116435761163f93508152603282527f43757276652d54726963727970746f20737472617465677920666f722077726160208301527170706564206e61746976652061737365747360701b818301525191829182612034565b0390f35b604184634e487b7160e01b6000525260246000fd5b9050346103655782600319360112610365575490516001600160a01b03909116815260209150f35b919050346103655782600319360112610365576001546001600160a01b039290918383169190338390036116f05750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b905034610365576020366003190112610365577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc90359161177e60018060a01b038554163314612156565b6005548151908152836020820152a160055580f35b919050346103655782600319360112610365578051633313458360e01b815230838201526020936001600160a01b0393918581602481857f00000000000000000000000000000000000000000000000000000000000000008a165af190811561199f578291611972575b50819481611810575b5050505051908152f35b809192939495506003541690855190631fd177af60e11b82528180611882610140968488957f000000000000000000000000000000000000000000000000000000000000000016907f0000000000000000000000000000000000000000000000000000000000000000168b85016122b7565b0381855afa928315611968579184939188936118ba979693611949575b505086518080978194630b7ecdc960e31b835288830161235a565b03915afa92831561193d57819361190e575b506032830291838304603214841517156118fb575050906127106118f192049061237a565b9038808080611806565b634e487b7160e01b825260119052602490fd5b9092508481813d8311611936575b61192681836120f5565b81010312610569575191386118cc565b503d61191c565b508351903d90823e3d90fd5b611960929350803d10610b6857610b5881836120f5565b90388061189f565b86513d86823e3d90fd5b90508581813d8311611998575b61198981836120f5565b810103126105695751386117fd565b503d61197f565b84513d84823e3d90fd5b50503461019b578160031936011261019b576020905160018152f35b50503461019b578160031936011261019b5760035490516001600160a01b039091168152602090f35b9190503461036557602090816003193601126103615782359267ffffffffffffffff8411611e5a5736602385011215611e5a57848482013594611a3086612117565b95611a3d855197886120f5565b80875260249636888385010111610361578188889401848301370101528151633313458360e01b815230828201526001600160a01b0394907f0000000000000000000000000000000000000000000000000000000000000000861690858184818b865af1908115611d4c578891611e2d575b50611ab8578680f35b857f000000000000000000000000000000000000000000000000000000000000000016958451886370a0823160e01b938483523087840152888387818d5afa928315610843578293611dfe575b50837f000000000000000000000000000000000000000000000000000000000000000016803b15610365578683928a5194859384926335313c2160e11b84528c8401525af18015611d9557611deb575b508551908382523086830152878286818c5afa918215611d95578a92611dbc575b50808211611b86575b5050508680f35b611b8f9161237a565b611bdb8260035416927f000000000000000000000000000000000000000000000000000000000000000016988992885180938192631fd177af60e11b83526101409687958c85016122b7565b0381865afa918215611d95578a92611d9f575b50508551630b7ecdc960e31b8152878180611c0b858a830161235a565b0381865afa908115611d95578a91611d68575b506032810281810460321482151715611d565787928b611c49611c64946127106101c495049061237a565b958551968795869463efa84c6d60e01b86528c8601906122ee565b610144840152306101648401526101a0610184840152816101a48401525af18015611d4c5786949392918691611d1d575b50519687938492835230908301525afa908115610310578491611ce0575b6000805160206128078339815191529350611ccd8261239d565b51908152a1388080808080808080611b7f565b90508183813d8311611d16575b611cf781836120f5565b8101031261056957600080516020612807833981519152925190611cb3565b503d611ced565b90809295503d8311611d45575b611d3481836120f5565b81010312610e1a5784928438611c95565b503d611d2a565b85513d8a823e3d90fd5b634e487b7160e01b8b5260118752858bfd5b90508781813d8311611d8e575b611d7f81836120f5565b81010312610569575138611c1e565b503d611d75565b87513d8c823e3d90fd5b611db59250803d10610b6857610b5881836120f5565b3880611bee565b9091508781813d8311611de4575b611dd481836120f5565b8101031261056957519038611b76565b503d611dca565b611df790999199612093565b9738611b55565b9092508881813d8311611e26575b611e1681836120f5565b8101031261019b57519138611b05565b503d611e0c565b90508581813d8311611e53575b611e4481836120f5565b810103126113ab575138611aaf565b503d611e3a565b8480fd5b50503461019b578160031936011261019b5751908152602090f35b9190503461036557606036600319011261036557611e9561207d565b91602435918215158303611e5a576044359283151584036110eb5760018060a01b03948591611ec8838954163314612156565b15611f6a571692831590811591611f62575b5015611f275750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36001600160601b0360a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b905038611eda565b9350505050166001600160601b0360a01b600154161760015580f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83853461034d578060031936011261034d578183019083821067ffffffffffffffff831117612021575061163f93508152600f82526e43757276652d54726963727970746f60881b60208301525191829182612034565b634e487b7160e01b815260418552602490fd5b6020808252825181830181905290939260005b82811061206957505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501612047565b600435906001600160a01b038216820361056957565b67ffffffffffffffff81116120a757604052565b634e487b7160e01b600052604160045260246000fd5b6080810190811067ffffffffffffffff8211176120a757604052565b6020810190811067ffffffffffffffff8211176120a757604052565b90601f8019910116810190811067ffffffffffffffff8211176120a757604052565b67ffffffffffffffff81116120a757601f01601f191660200190565b3461056957600036600319011261056957602061214e612523565b604051908152f35b1561215d57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b51906001600160a01b038216820361056957565b5190811515820361056957565b809103610140811261056957604080519267ffffffffffffffff9260608501848111868210176120a7578084526080821261056957612200816120bd565b612209836121a1565b8152602083015160808701526122208484016121a1565b60a0870152606083015160c087015285526080607f19820112610569578290815161224a816120bd565b6080840151815260a0840151602082015260c08401518382015260e08401516060820152602087015260ff19011261056957815192838301908111848210176120a7576122ac916101209184526122a461010082016121b5565b8552016121b5565b602083015282015290565b6001600160a01b0391821681529116602082015260408101919091526000606082018190526080820181905260a082015260c00190565b60206040610120926060815160018060a01b03808251168852858201518689015284820151168488015201516060860152606083820151805160808801528481015160a08801528381015160c0880152015160e086015201518051151561010085015201511515910152565b61236781610180936122ee565b6000610160806101408401528201520190565b9190820391821161238757565b634e487b7160e01b600052601160045260246000fd5b60048054604080516305c43acd60e01b815292830184905260209390926001600160a01b03928316918582602481865afa918215612518576000926124e9575b50603282029180830460321481151715612387576124036044916127108995049061237a565b9160008751958694859363b529fe1d60e01b8552600485015260248401525af19384156124de576000946124ad575b50507f00000000000000000000000000000000000000000000000000000000000000001691823b156105695760009260648492845195869384926383df674760e01b845260048401523060248401528160448401525af19081156124a357506124985750565b6124a190612093565b565b513d6000823e3d90fd5b8181959293953d83116124d7575b6124c581836120f5565b8101031261034d575051913880612432565b503d6124bb565b83513d6000823e3d90fd5b90918682813d8311612511575b61250081836120f5565b8101031261034d57505190386123dd565b503d6124f6565b85513d6000823e3d90fd5b604080516370a0823160e01b80825230600483015290916001600160a01b039160209081856024817f000000000000000000000000000000000000000000000000000000000000000088165afa9485156124de57600095612660575b5081846004541695602485518098819363af30c87360e01b835260048301525afa9485156124de57600095612631575b508190602484518096819382523060048301527f0000000000000000000000000000000000000000000000000000000000000000165afa9182156124a35750600091612605575b50905081018091116123875790565b82813d831161262a575b61261981836120f5565b8101031261034d57505180386125f6565b503d61260f565b90948282813d8311612659575b61264881836120f5565b8101031261034d57505193816125af565b503d61263e565b90948282813d8311612688575b61267781836120f5565b8101031261034d575051933861257f565b503d61266d565b1561269657565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b6040516370a0823160e01b815230600482015260209081816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa9081156127a657600091612779575b50600554811161275657507f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca91604051908152a1565b60008051602061280783398151915292506127708161239d565b604051908152a1565b908282813d831161279f575b61278f81836120f5565b8101031261034d57505138612720565b503d612785565b6040513d6000823e3d90fd5b60028054146127c15760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfede22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d3a2646970667358221220382d602f3c6944a517d6362d867518e9e7059760924cad6e2ac178bf75acb55064736f6c63430008120033";

type TricryptoStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TricryptoStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TricryptoStrategy__factory extends ContractFactory {
  constructor(...args: TricryptoStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TricryptoStrategy";
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TricryptoStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    ) as Promise<TricryptoStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lpGauge: PromiseOrValue<string>,
    _lpGetter: PromiseOrValue<string>,
    _minter: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _lpGauge,
      _lpGetter,
      _minter,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): TricryptoStrategy {
    return super.attach(address) as TricryptoStrategy;
  }
  override connect(signer: Signer): TricryptoStrategy__factory {
    return super.connect(signer) as TricryptoStrategy__factory;
  }
  static readonly contractName: "TricryptoStrategy";

  public readonly contractName: "TricryptoStrategy";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TricryptoStrategyInterface {
    return new utils.Interface(_abi) as TricryptoStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TricryptoStrategy {
    return new Contract(address, _abi, signerOrProvider) as TricryptoStrategy;
  }
}