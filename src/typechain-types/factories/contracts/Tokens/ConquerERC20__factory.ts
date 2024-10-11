/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ConquerERC20,
  ConquerERC20Interface,
} from "../../../contracts/Tokens/ConquerERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mintConquerERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b50336040518060400160405280600d81526020017f436f6e71756572204552433230000000000000000000000000000000000000008152506040518060400160405280600481526020017f434f4e5100000000000000000000000000000000000000000000000000000000815250816003908162000090919062000472565b508060049081620000a2919062000472565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200011a5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016200011191906200059e565b60405180910390fd5b6200012b816200013260201b60201c565b50620005bb565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200027a57607f821691505b60208210810362000290576200028f62000232565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620002bb565b620003068683620002bb565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003536200034d62000347846200031e565b62000328565b6200031e565b9050919050565b6000819050919050565b6200036f8362000332565b620003876200037e826200035a565b848454620002c8565b825550505050565b600090565b6200039e6200038f565b620003ab81848462000364565b505050565b5b81811015620003d357620003c760008262000394565b600181019050620003b1565b5050565b601f8211156200042257620003ec8162000296565b620003f784620002ab565b8101602085101562000407578190505b6200041f6200041685620002ab565b830182620003b0565b50505b505050565b600082821c905092915050565b6000620004476000198460080262000427565b1980831691505092915050565b600062000462838362000434565b9150826002028217905092915050565b6200047d82620001f8565b67ffffffffffffffff81111562000499576200049862000203565b5b620004a5825462000261565b620004b2828285620003d7565b600060209050601f831160018114620004ea5760008415620004d5578287015190505b620004e1858262000454565b86555062000551565b601f198416620004fa8662000296565b60005b828110156200052457848901518255600182019150602085019450602081019050620004fd565b8683101562000544578489015162000540601f89168262000434565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005868262000559565b9050919050565b620005988162000579565b82525050565b6000602082019050620005b560008301846200058d565b92915050565b61119a80620005cb6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c57806395d89b411161006657806395d89b4114610202578063a9059cbb14610220578063dd62ed3e14610250578063f2fde38b14610280576100cf565b806370a08231146101aa578063715018a6146101da5780638da5cb5b146101e4576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce5671461017057806335ae00cf1461018e575b600080fd5b6100dc61029c565b6040516100e99190610dee565b60405180910390f35b61010c60048036038101906101079190610ea9565b61032e565b6040516101199190610f04565b60405180910390f35b61012a610351565b6040516101379190610f2e565b60405180910390f35b61015a60048036038101906101559190610f49565b61035b565b6040516101679190610f04565b60405180910390f35b61017861038a565b6040516101859190610fb8565b60405180910390f35b6101a860048036038101906101a39190610ea9565b610393565b005b6101c460048036038101906101bf9190610fd3565b6103a9565b6040516101d19190610f2e565b60405180910390f35b6101e26103f1565b005b6101ec610405565b6040516101f9919061100f565b60405180910390f35b61020a61042f565b6040516102179190610dee565b60405180910390f35b61023a60048036038101906102359190610ea9565b6104c1565b6040516102479190610f04565b60405180910390f35b61026a6004803603810190610265919061102a565b6104e4565b6040516102779190610f2e565b60405180910390f35b61029a60048036038101906102959190610fd3565b61056b565b005b6060600380546102ab90611099565b80601f01602080910402602001604051908101604052809291908181526020018280546102d790611099565b80156103245780601f106102f957610100808354040283529160200191610324565b820191906000526020600020905b81548152906001019060200180831161030757829003601f168201915b5050505050905090565b6000806103396105f1565b90506103468185856105f9565b600191505092915050565b6000600254905090565b6000806103666105f1565b905061037385828561060b565b61037e85858561069f565b60019150509392505050565b60006012905090565b61039b610793565b6103a5828261081a565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6103f9610793565b610403600061089c565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461043e90611099565b80601f016020809104026020016040519081016040528092919081815260200182805461046a90611099565b80156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b5050505050905090565b6000806104cc6105f1565b90506104d981858561069f565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610573610793565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036105e55760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016105dc919061100f565b60405180910390fd5b6105ee8161089c565b50565b600033905090565b6106068383836001610962565b505050565b600061061784846104e4565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106995781811015610689578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610680939291906110ca565b60405180910390fd5b61069884848484036000610962565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107115760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610708919061100f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107835760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161077a919061100f565b60405180910390fd5b61078e838383610b39565b505050565b61079b6105f1565b73ffffffffffffffffffffffffffffffffffffffff166107b9610405565b73ffffffffffffffffffffffffffffffffffffffff1614610818576107dc6105f1565b6040517f118cdaa700000000000000000000000000000000000000000000000000000000815260040161080f919061100f565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361088c5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610883919061100f565b60405180910390fd5b61089860008383610b39565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036109d45760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016109cb919061100f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a465760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610a3d919061100f565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610b33578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b2a9190610f2e565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b8b578060026000828254610b7f9190611130565b92505081905550610c5e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c17578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610c0e939291906110ca565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ca75780600260008282540392505081905550610cf4565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d519190610f2e565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d98578082015181840152602081019050610d7d565b60008484015250505050565b6000601f19601f8301169050919050565b6000610dc082610d5e565b610dca8185610d69565b9350610dda818560208601610d7a565b610de381610da4565b840191505092915050565b60006020820190508181036000830152610e088184610db5565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e4082610e15565b9050919050565b610e5081610e35565b8114610e5b57600080fd5b50565b600081359050610e6d81610e47565b92915050565b6000819050919050565b610e8681610e73565b8114610e9157600080fd5b50565b600081359050610ea381610e7d565b92915050565b60008060408385031215610ec057610ebf610e10565b5b6000610ece85828601610e5e565b9250506020610edf85828601610e94565b9150509250929050565b60008115159050919050565b610efe81610ee9565b82525050565b6000602082019050610f196000830184610ef5565b92915050565b610f2881610e73565b82525050565b6000602082019050610f436000830184610f1f565b92915050565b600080600060608486031215610f6257610f61610e10565b5b6000610f7086828701610e5e565b9350506020610f8186828701610e5e565b9250506040610f9286828701610e94565b9150509250925092565b600060ff82169050919050565b610fb281610f9c565b82525050565b6000602082019050610fcd6000830184610fa9565b92915050565b600060208284031215610fe957610fe8610e10565b5b6000610ff784828501610e5e565b91505092915050565b61100981610e35565b82525050565b60006020820190506110246000830184611000565b92915050565b6000806040838503121561104157611040610e10565b5b600061104f85828601610e5e565b925050602061106085828601610e5e565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806110b157607f821691505b6020821081036110c4576110c361106a565b5b50919050565b60006060820190506110df6000830186611000565b6110ec6020830185610f1f565b6110f96040830184610f1f565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061113b82610e73565b915061114683610e73565b925082820190508082111561115e5761115d611101565b5b9291505056fea26469706673582212200df9d798505791382f6dbd1f2721ff25c8ba6cef8ac13d31b6e81d414af1fb4064736f6c63430008140033";

type ConquerERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConquerERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConquerERC20__factory extends ContractFactory {
  constructor(...args: ConquerERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ConquerERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ConquerERC20__factory {
    return super.connect(runner) as ConquerERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConquerERC20Interface {
    return new Interface(_abi) as ConquerERC20Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ConquerERC20 {
    return new Contract(address, _abi, runner) as unknown as ConquerERC20;
  }
}
