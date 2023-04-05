/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  Magnetar,
  MagnetarInterface,
} from "../Magnetar";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "id",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "call",
            type: "bytes",
          },
        ],
        internalType: "struct MagnetarData.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "burst",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct MagnetarData.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [
      {
        internalType: "uint256",
        name: "basefee",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080346200012757601f6200228738819003918201601f19168301916001600160401b038311848410176200012c578084926020946040528339810103126200012757516001600160a01b03808216908183036200012757620000623362000142565b33906000541603620000e357156200008f576200007f9062000142565b6040516120fd90816200018a8239f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604052600436101561001257600080fd5b60003560e01c8063013546e1146100f75780630f28c97d146100f257806327e86d6e146100ed5780633408e470146100e85780633e64a696146100e357806342cbb15c146100de5780634d2301cc146100d9578063715018a6146100d457806372425d9d146100cf57806386d516e8146100ca5780638da5cb5b146100c5578063a8b0574e146100c0578063ee82ac5e146100bb5763f2fde38b146100b657600080fd5b611074565b611056565b61103b565b611014565b610ff9565b610fde565b610f88565b610f60565b610f27565b610f0c565b610ef1565b610ed1565b610eb6565b6101bb565b60005b83811061010f5750506000910152565b81810151838201526020016100ff565b90602091610138815180928185528580860191016100fc565b601f01601f1916010190565b602080820190808352835180925260409283810182858560051b8401019601946000925b858410610179575050505050505090565b9091929394959685806101aa600193603f1986820301885286838d518051151584520151918185820152019061011f565b990194019401929594939190610168565b6020806003193601126103e25760049067ffffffffffffffff9082358281116103e257366023820112156103e257808401359283116103e25760248101916005916024369186851b0101116103e257600094610216856112c9565b94865b81811061023f5761023b8761022f8a3414611dac565b60405191829182610144565b0390f35b61024a818388611377565b60608082019061026061025c836113a8565b1590565b610e6b575b600161027a6102738561149a565b61ffff1690565b036102bd5750816102ad6102b3926102a561029a8a6102b898970161159d565b9360808101906113b5565b9290916113a8565b92611f0a565b61133c565b610219565b61ffff6002816102cc8661149a565b16036102f4575050816102ee6102b3926102a561029a8a6102b898970161159d565b92611e36565b909150600a81610306859d969561149a565b160361047b57505061033061032861032160808c018c6113b5565b80916114a4565b810190611bf6565b61034961034482516001600160a01b031690565b611f93565b60408a8101359384156103e75787858192019c016103669061159d565b9201516001600160a01b039081169216803b156103e2579051632479d86360e01b81526001600160a01b039092168683019081529193600092859291839182906020015b03925af19182156103dd576102b8926103c4575b5061133c565b806103d16103d7926111a8565b80610eab565b386103be565b6115f5565b600080fd5b9a610409919294506103fd886103fd920161159d565b6001600160a01b031690565b8161041d888601516001600160a01b031690565b94015190803b156103e2579151630c46aac760e31b8152338782019081526001600160a01b039095166020860152604085019190915292600091849182908490829060600103925af19182156103dd576102b8926103c4575061133c565b600b816104878d61149a565b1603610515575050886080810161049e90826113b5565b806104a8926114a4565b81016104b391611cba565b9291936001600160a01b0390979197166104cc90611f93565b896040809601358092019e016104e19061159d565b6001600160a01b031692833b156103e2576103aa8a9160009751998a978896879563695ef6bf60e01b875233908701611d53565b6003816105238d969d61149a565b160361067d57506105dd906080906105726103fd6103fd8a61055561054d610321888c018c6113b5565b810190611c4f565b9861056c610344838c01516001600160a01b031690565b0161159d565b8760008751604096879661058f888c01516001600160a01b031690565b968b01519a01518751634d4d7cbd60e11b81529485019283523360208401526001600160a01b0390961660408301526060820199909952608081019490945290968793849291839160a00190565b03925af180156103dd576102b8936000908192610645575b50915187810192835260208301919091529061061f9082906040015b03601f19810183528261124e565b610627611270565b60018152908682015261063a828a611b3b565b526103be8189611b3b565b61061f9250610611915061066e90843d8611610676575b610666818361124e565b810190611c39565b9250906105f5565b503d61065c565b878161068a86949661149a565b160361074157506106cb6103fd6103fd886106b66106ae61032160808801886113b5565b810190611ad5565b9461056c61034487516001600160a01b031690565b906106df878201516001600160a01b031690565b916040946106ef86840151151590565b92015191813b156103e257945163096f9e0960e21b8152338882019081526001600160a01b039094166020850152941515604084015260608301919091526000918491908290849082906080016103aa565b6006816107508495969461149a565b1603610833575050908161077a6103fd6103fd886106b661032861032160806107d39a01886113b5565b9061078e878201516001600160a01b031690565b604092838093015191600084518098819582946314890dcb60e21b84528d339085016040919493929460608201956001600160a01b0380921683521660208201520152565b03925af180156103dd576102b893600090819261080b575b50915187810192835260208301919091529061061f908290604001610611565b61061f9250610611915061082b90843d861161067657610666818361124e565b9250906107eb565b600781610842859d969561149a565b16036108d2575050886080810161085990826113b5565b80610863926114a4565b810161086e91611b4f565b959392946001600160a01b03909892981661088890611f93565b8a6040809501358093019f0161089d9061159d565b6001600160a01b031693843b156103e2576000968b926103aa92519a8b98899788966307e76fc160e21b885233908801611bb0565b6008816108e08d969d61149a565b16036109e057508561091a6103fd6103fd836109056106ae61032160808b018b6113b5565b9761056c6103448a516001600160a01b031690565b9361092e828201516001600160a01b031690565b9460409361093e85840151151590565b9201518451630cb0f5b760e31b815233818b019081526001600160a01b039098166020890152921515604088015260608701529094859190829060009082906080015b03925af19283156103dd576102b8936106119261061f926000926109b1575b505188810191825292839160200190565b6109d2919250893d8b116109d9575b6109ca818361124e565b810190611b2c565b90386109a0565b503d6109c0565b6009816109ec8661149a565b1603610a7c575085610a116103fd6103fd836109056106ae61032160808b018b6113b5565b93610a25828201516001600160a01b031690565b94604093610a3585840151151590565b920151845163cd0211eb60e01b815233818b019081526001600160a01b03909816602089015292151560408801526060870152909485919082906000908290608001610981565b600c81610a888661149a565b1603610b31575050610aab610aa361032160808501856113b5565b810190611964565b8086018051870151610ac5906001600160a01b0316611f93565b610ad66103fd6103fd89870161159d565b93610ae3835161ffff1690565b91519160408094015195803b156103e2578489610b1560009751998a97889687946307189ae360e31b86528501611a28565b03930135905af19182156103dd576102b8926103c4575061133c565b600d81610b3f86949661149a565b1603610c0b5750608092610b63610b5b610321868501856113b5565b81019061183d565b91610b7861034484516001600160a01b031690565b610b896103fd6103fd8a840161159d565b838901516001600160a01b0316906040610bb48187015195870151988701516001600160a01b031690565b60a08701516001600160a01b031690610bd260c089015161ffff1690565b9761010060e082015191015190853b156103e2576000998e94610b159487519e8f9c8d9b8c9963980322ad60e01b8b5233908b016118d3565b600e81610c178461149a565b1603610cdd5750608092610c3b610c33610321868501856113b5565b810190611737565b91610c5061034484516001600160a01b031690565b610c616103fd6103fd8a840161159d565b838901516001600160a01b0316906040610c9b610c8b82880151968801516001600160a01b031690565b988701516001600160a01b031690565b9560c0610cad60a083015161ffff1690565b91015196833b156103e2576000978c92610b159285519c8d9a8b998a976347d2517560e01b8952339089016117c7565b600f81610ce98461149a565b1603610d895750608092610d0d610d05610321868501856113b5565b810190611658565b91610d2261034484516001600160a01b031690565b610d336103fd6103fd8a840161159d565b838901516001600160a01b031690604060a0610d5b82880151968801519988015161ffff1690565b960151823b156103e257610b158b9160009884519b8c998a988996630a693a6960e11b8852339088016116cc565b81929350610d9860109261149a565b1603610e1a5790610de96103fd8387610dc5610dbd61032160806103fd9901856113b5565b81019061152f565b9992949891939b909596610de26001600160a01b03809916611f93565b880161159d565b92833b156103e257600097610b15918d60409586519d8e9b8c9a8b98639f3a056d60e01b8a521693339089016115a7565b610e678460405191829162461bcd60e51b8352820160609060208152601a60208201527f4d61676e657461723a20616374696f6e206e6f742076616c696400000000000060408201520190565b0390fd5b610ea6610e7b60808501856113b5565b604051808b01888152919250610e9e91610e99908290602001610611565b6113e8565b901515611462565b610265565b60009103126103e257565b346103e25760003660031901126103e2576020604051428152f35b346103e25760003660031901126103e25760206040516000194301408152f35b346103e25760003660031901126103e2576020604051468152f35b346103e25760003660031901126103e2576020604051488152f35b346103e25760003660031901126103e2576020604051438152f35b6001600160a01b038116036103e257565b3590610f5e82610f42565b565b346103e25760203660031901126103e2576020600435610f7f81610f42565b31604051908152f35b346103e257600080600319360112610fdb57610fa261113a565b806001600160a01b038154811981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b346103e25760003660031901126103e2576020604051448152f35b346103e25760003660031901126103e2576020604051458152f35b346103e25760003660031901126103e25760206001600160a01b0360005416604051908152f35b346103e25760003660031901126103e2576020604051418152f35b346103e25760203660031901126103e2576020604051600435408152f35b346103e25760203660031901126103e25760043561109181610f42565b61109961113a565b6001600160a01b0380911680156110e6576000918254826001600160a01b03198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b60405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608490fd5b6001600160a01b0360005416330361114e57565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116111bc57604052565b611192565b6080810190811067ffffffffffffffff8211176111bc57604052565b60c0810190811067ffffffffffffffff8211176111bc57604052565b60e0810190811067ffffffffffffffff8211176111bc57604052565b6060810190811067ffffffffffffffff8211176111bc57604052565b610100810190811067ffffffffffffffff8211176111bc57604052565b90601f8019910116810190811067ffffffffffffffff8211176111bc57604052565b604051906040820182811067ffffffffffffffff8211176111bc57604052565b60405190610120820182811067ffffffffffffffff8211176111bc57604052565b67ffffffffffffffff81116111bc5760051b60200190565b906112d3826112b1565b6040906112e28251918261124e565b83815280936112f3601f19916112b1565b0190600090815b838110611308575050505050565b8451908582019180831067ffffffffffffffff8411176111bc576020928752848152826060818301528285010152016112fa565b600019811461134b5760010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b91908110156113995760051b81013590609e19813603018212156103e2570190565b611361565b801515036103e257565b356113b28161139e565b90565b903590601e19813603018212156103e2570180359067ffffffffffffffff82116103e2576020019181360383136103e257565b90610f5e604c60405180947f4d61676e657461723a204d697373696e672063616c6c20666f7220616374696f60208301526b0dc40eed2e8d040d2dcc8caf60a31b604083015261144181518092602086860191016100fc565b810103602c81018552018361124e565b9060206113b292818152019061011f565b1561146a5750565b60405162461bcd60e51b815260206004820152908190610e6790602483019061011f565b61ffff8116036103e257565b356113b28161148e565b90929192836004116103e25783116103e257600401916003190190565b3590610f5e8261148e565b67ffffffffffffffff81116111bc57601f01601f191660200190565b81601f820112156103e2578035906114ff826114cc565b9261150d604051948561124e565b828452602083830101116103e257816000926020809301838601378301015290565b60e0818303126103e257803561154481610f42565b92602082013592604083013592606081013561155f8161148e565b92608082013561156e81610f42565b9260a083013567ffffffffffffffff81116103e25760c0916115919185016114e8565b9201356113b28161139e565b356113b281610f42565b95926115ed9461ffff9160c09793949a999a6001600160a01b038096168a5260208a0152604089015216606087015216608085015260e060a085015260e084019061011f565b931515910152565b6040513d6000823e3d90fd5b91908260809103126103e257604051611619816111c1565b606080829480358452602081013561163081610f42565b602085015260408101356116438161139e565b60408501520135916116548361139e565b0152565b90610120828203126103e2576116c49060a060405193611677856111dd565b803561168281610f42565b8552602081013561169281610f42565b6020860152604081013560408601526060810135606086015260808101356116b98161148e565b608086015201611601565b60a082015290565b9196959394610f5e9560a09461ffff9361012086019a6001600160a01b03809216875216602086015260408501526060840152166080820152019060608091805184526001600160a01b03602082015116602085015260408101511515604085015201511515910152565b90610140828203126103e2576117bf9060c060405193611756856111f9565b803561176181610f42565b8552602081013561177181610f42565b602086015260408101356040860152606081013561178e81610f42565b606086015260808101356117a181610f42565b608086015260a08101356117b48161148e565b60a086015201611601565b60c082015290565b929796949161ffff92610f5e979260c09661014087019b6001600160a01b038095818095168a5216602089015260408801521660608601521660808401521660a0820152019060608091805184526001600160a01b03602082015116602085015260408101511515604085015201511515910152565b610180818303126103e2576118cc611853611290565b9261185d83610f53565b845261186b60208401610f53565b6020850152604083013560408501526060830135606085015261189060808401610f53565b60808501526118a160a08401610f53565b60a08501526118b260c084016114c1565b60c085015260e083013560e0850152610100809301611601565b9082015290565b949561ffff939a9997929161010097610f5e9a9661018089019d6001600160a01b038096818096168c521660208b015260408a015260608901521660808701521660a08501521660c083015260e0820152019060608091805184526001600160a01b03602082015116602085015260408101511515604085015201511515910152565b359060ff821682036103e257565b808203916101a083126103e2576040519261197e84611215565b82356119898161148e565b84526101008091601f1901126103e257611a209261012091604051906119ae82611231565b6119ba60208401610f53565b82526119c860408401610f53565b60208301526119d960608401610f53565b60408301526080830135606083015260a083013560808301526119fe60c08401611956565b60a083015260e083013560c083015282013560e0820152602086015201611601565b604082015290565b6101209060e0610f5e949695939661ffff6101a08401981683526001600160a01b03808251166020850152806020830151166040850152604082015116606084015260608101516080840152608081015160a0840152611a9260a082015160c085019060ff169052565b60c0810151828401520151610100820152019060608091805184526001600160a01b03602082015116602085015260408101511515604085015201511515910152565b908160809103126103e257606060405191611aef836111c1565b8035611afa81610f42565b83526020810135611b0a81610f42565b60208401526040810135611b1d8161139e565b60408401520135606082015290565b908160209103126103e2575190565b80518210156113995760209160051b010190565b909160c0828403126103e2578135611b6681610f42565b926020830135611b758161148e565b92604081013592606082013592608083013567ffffffffffffffff81116103e25760a091611ba49185016114e8565b9201356113b281610f42565b9490929360a09461ffff611bef949998996001600160a01b0380971689521660208801526040870152606086015260c0608086015260c085019061011f565b9416910152565b908160609103126103e2576040805191611c0f83611215565b8035611c1a81610f42565b83526020810135611c2a81610f42565b60208401520135604082015290565b91908260409103126103e2576020825192015190565b908160a09103126103e2576040519060a082019082821067ffffffffffffffff8311176111bc57608091604052803583526020810135611c8e81610f42565b60208401526040810135611ca181610f42565b6040840152606081013560608401520135608082015290565b91909160a0818403126103e2578035611cd281610f42565b926020820135611ce18161148e565b92604083013592606081013592608082013567ffffffffffffffff928382116103e25701906060828203126103e25760405192611d1d84611215565b8235611d2881610f42565b84526020830135611d3881610f42565b602085015260408301359081116103e257611a2092016114e8565b93906113b295916101009461ffff6040956001600160a01b03809516895216602088015284870152606086015260a060808601528082511660a086015260208201511660c0850152015191606060e0820152019061011f565b15611db357565b60405162461bcd60e51b815260206004820152601860248201527f4d61676e657461723a2076616c7565206d69736d6174636800000000000000006044820152606490fd5b908092918237016000815290565b3d15611e31573d90611e17826114cc565b91611e25604051938461124e565b82523d6000602084013e565b606090565b826004116103e25760e0600319838581010301126103e257600092838093611ecf6001600160a01b03604051611e6b816111f9565b600484013590611e7a82610f42565b8181526024850135611e8b81610f42565b60208201526044850135604082015260648501356060820152611eb060848601611956565b608082015260a485013560a082015260c060c486013591015216611f93565b611ede60405180948193611df8565b03925af190611eeb611e06565b91159081611f01575b50611efc5750565b611fe9565b90501538611ef4565b60c092611f188180856114a4565b90809591810103126103e2576000809493611ecf6001600160a01b038396604051611f42816111dd565b60a080833593611f5185610f42565b8484526020810135611f6281610f42565b602085015260408101356040850152611f7d60608201611956565b6060850152608081013560808501520135910152165b6001600160a01b03163303611fa457565b60405162461bcd60e51b815260206004820152601660248201527f4d61676e657461723a20756e617574686f72697a6564000000000000000000006044820152606490fd5b6044815110612082576004810151810190602081602484019303126103e25760248101519067ffffffffffffffff82116103e2570190806043830112156103e257602482015191612039836114cc565b91612047604051938461124e565b838352604484830101116103e257610e679261206a9160446020850191016100fc565b60405162461bcd60e51b815291829160048301611451565b60405162461bcd60e51b815260206004820152600e60248201527f526561736f6e20756e6b6e6f776e0000000000000000000000000000000000006044820152606490fdfea264697066735822122058b4a3aef9348a4b31775df08a78162a841d4ca7aec72786022d12a419eeb56d64736f6c63430008120033";

type MagnetarConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MagnetarConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Magnetar__factory extends ContractFactory {
  constructor(...args: MagnetarConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Magnetar> {
    return super.deploy(_owner, overrides || {}) as Promise<Magnetar>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): Magnetar {
    return super.attach(address) as Magnetar;
  }
  override connect(signer: Signer): Magnetar__factory {
    return super.connect(signer) as Magnetar__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MagnetarInterface {
    return new utils.Interface(_abi) as MagnetarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Magnetar {
    return new Contract(address, _abi, signerOrProvider) as Magnetar;
  }
}
